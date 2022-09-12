const knex = require("../database/knex");

class NotesController{
    //criar nota
    async create(request, response){ 
        const { title, description, rating, tags } = request.body;
        const user_id = request.user.id;

        const note_id = await knex("movie_notes").insert({
            title,
            description,
            rating,
            user_id       
        });

        const tagsInsert = tags.map(name => {
            return{
                note_id,
                name,
                user_id
            }
        })

        await knex("movie_tags").insert(tagsInsert);

        response.json();
    }

    //exibir nota
    async show(request, response) {
        const { id } = request.params;

        const note = await knex("movie_notes").where({ id }).first();
        const tags = await knex("movie_tags").where({ note_id: id}).orderBy("name");

        return response.json({
            ...note,
            tags
        });
    }

    //deletar nota
    async delete(request, response) {
        const {id} = request.params;

        await knex("movie_notes").where({ id }).delete();

        return response.json();
    }

    //listar/pesquisar todas as notas por usuário
    async index(request, response) {
        const { title, tags } = request.query;
        
        const user_id = request.user.id;

        let notes;
    
        if (tags) { //listar tags e exibir título vinculado à nota 
            const filterTags = tags.split(',').map(tag => tag);
            
            
            notes = await knex("movie_tags")
            .select([
                "movie_notes.id",
                "movie_notes.title",
                "movie_notes.user_id",
            ])
            .where("movie.notes.user_id", user_id)
            .whereLike("movie_notes.title", `%${title}%`)
            .whereIn("name", filterTags)
            .innerJoin("movie_notes", "movie_notes.id", "movie_tags.note_id")
            .groupBy("movie_notes.id")
            .orderBy("movie_notes.title")

        } else {
            notes = await knex("movie_notes")
            .where({ user_id })
            .whereLike("title", `%${title}%`) //pesquisar por título
            .orderBy("title");   
        }

        const userTags = await knex("movie_tags").where({ user_id });
        const notesWithTags = notes.map(note => {
            const noteTags = userTags.filter(tags => tags.note_id === note.id);

            return {
                ...note,
                movie_tags: noteTags
                
            }
        });    

        return response.json(notesWithTags);
    }
}

module.exports = NotesController;