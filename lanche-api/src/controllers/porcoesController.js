const db = require('../data/models')

const Porcao = db.Porcao;

const porcoesController = {
    list: (req, res) => {
        Porcao.findAll()
            .then(porcoes => {
                res.status(200).json(porcoes)
            })
            .catch(err => {
                res.status(500).json(err);
            })
    },
    findById: (req, res) => {
        Porcao.findByPk(req.params.id)
            .then(porcoes => {
                if (!porcoes) {
                    res.status(404).json(porcoes)
                } else {
                    res.status(200).json(porcoes)
                }
            })
            .catch(err => {
                res.status(404).json(err)
            })
    },
    create: async (req, res) => {
        const porcao = req.body;
        try {
            await Porcao.create(porcao)
            res.status(201).json({ msg: 'Porção criada com sucesso!' })
        } catch (err) {
            res.status(400).json({ err })
        }
    },

    update: async (req, res) => {
        const id = req.params.id
        const porcao = req.body
        try {
            await Porcao.update(porcao, { where: { id } })
            res.status(201).json({ msg: 'Porção alterada com sucesso!' })
        } catch (err) {
            res.status(304).json({ error: [...err] })
        }
    },

    delete: async (req, res) => {
        const id = req.params.id
        try {
            await Porcao.destroy({ where: { id } })
            res.status(201).json({ msg: 'Porção excluída com sucesso!' })
        } catch (err) {
            res.status(400).json(err)
        }
    }
}


module.exports = porcoesController;