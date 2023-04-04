const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const router = express.Router();
const db = require('../data/models')

const Cliente = db.Cliente;

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET_KEY;


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
            id: user.id,
            nome: user.nome,
            sobrenome: user.sobrenome,
            bairro: user.bairro,
            rua: user.rua,
            numero_casa: user.numero_casa,
            telefone: user.telefone
        }
        // Retorne o token JWT e as informações para o cliente
        res.json({ token, userSession});


    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
});

module.exports = router;