const knex = require("../database/knex");

const AppError = require("../utils/AppError");

const authConfig = require("../configs/auth");

const { compare } = require("bcryptjs");

const { sign } = require("jsonwebtoken");

class SessionsController {

    async create(req, resp){
        const { email, password } = req.body;

        const user = await knex("users").where({ email }).first();

        if(!user){
            throw new AppError("Usuário e/ou senha incorreta!")
        }

        const passwordCompare = await compare(password, user.password)

        if(!passwordCompare){
            throw new AppError("Usuário e/ou senha incorreta")
        }

        const { secret, expiresIn } = authConfig.jwt; //
        const token = sign({}, secret, {
            subject: String(user.id),
            expiresIn
        })

        return resp.json({ user, token });
    }
}

module.exports = SessionsController;