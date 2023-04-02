const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

const db = require('../data/models')

const Cliente = db.Cliente;

dotenv.config();
const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;


router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Verifique se o usuário existe no banco de dados
        const user = await Cliente.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({ message: 'Usuário não encontrado' });
        }

        // Verifique se a senha está correta
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({ message: 'Senha incorreta' });
        }

        // Crie um token JWT para o usuário
        const token = jwt.sign({ id: user.id }, JWT_SECRET);

        // Retorne o token JWT para o cliente
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
});

module.exports = router;