const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const router = express.Router();
const db = require('../data/models')

const Cliente = db.Cliente;

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET_KEY;
const ADM_EMAIL = process.env.ADM_EMAIL;

router.post('/login', async (req, res) => {
    try {
        const { emailToLogin: emailToLogin, passwordToLogin: passwordToLogin } = req.body;

        // Verifique se o usuário existe no banco de dados
        const user = await Cliente.findOne({ where: { email: emailToLogin } });
        if (!user) {
            return res.status(403).json({ message: 'Usuário não encontrado' });
        }

        // Verifique se a senha está correta
        const isPasswordCorrect = await bcrypt.compare(passwordToLogin, user.senha);
        if (!isPasswordCorrect) {
            return res.status(401).json({ message: 'Senha incorreta' });
        }

        // Crie um token JWT para o usuário
        const token = jwt.sign({ id: user.id }, JWT_SECRET);
        const userSession = {
            token: token,
            nome: user.nome,
            sobrenome: user.sobrenome,
            data_cadastro: user.data_cadastro,
        }
        // Retorne o token JWT e as informações para o cliente
        res.json({ token, userSession });


    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
}),

    router.post('/admin', async (req, res) => {

        try {
            const { emailAdm: emailAdm, passwordAdm: passwordAdm } = req.body;

            // Verifique se o usuário existe no banco de dados
            const user = await Cliente.findOne({ where: { email: emailAdm } });
            if (!user) {
                return res.status(403).json({ message: 'Usuário não encontrado' });
            } else {
                if (user.email != ADM_EMAIL) {
                    return res.status(403).json({ message: 'Não tem permissão' })
                }
            }
            // Verifique se a senha está correta
            const isPasswordCorrect = await bcrypt.compare(passwordAdm, user.senha);
            if (!isPasswordCorrect) {
                return res.status(401).json({ message: 'Senha incorreta' });
            }

            // Crie um token JWT para o usuário
            const token = jwt.sign({ id: user.id }, JWT_SECRET);
            const adminSession = {
                token: token,
                admin: true
            }
            // Retorne o token JWT e as informações para o cliente
            res.json({ token, adminSession });


        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro interno do servidor' });
        }
    });

module.exports = router;