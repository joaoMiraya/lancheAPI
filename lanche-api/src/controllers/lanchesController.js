const db = require('../data/models')

const Lanche = db.Lanche;

const lanchesController = {
    list: (req, res) => {
        Lanche.findAll()
            .then(lanches => {
                res.status(200).json(lanches)
            })
            .catch(err => {
                res.status(500).json(err);
            })
    },
    findById: (req, res) => {
        Lanche.findByPk(req.params.id)
            .then(lanches => {
                if (!lanches) {
                    res.status(404).json(lanches)
                } else {
                    res.status(200).json(lanches)
                }
            })
            .catch(err => {
                res.status(404).json(err)
            })
    },
    findByCategory: (req, res) => {
        const categoria = req.params.categoria;
        Lanche.findAll({
            where: { categoria }
        })
            .then(lanches => {
                if (!lanches) {
                    res.status(404).json({message: `Não foi encontrado lanche na categoria %{categoria}`})
                } else {
                    res.status(200).json(lanches)
                }
            })
            .catch(err => {
                res.status(500).json(err)
            })
    },
    create: async (req, res) => {
        const lanche = req.body;
        try {
            await Lanche.create(lanche)
            res.status(201).json({ msg: 'Lanche criado com sucesso!' })
        } catch (err) {
            res.status(400).json({ err })
        }
    },

    update: async (req, res) => {
        const id = req.params.id
        const lanche = req.body
        try {
            await Lanche.update(lanche, { where: { id } })
            res.status(201).json({ msg: 'Lanche alterado com sucesso!' })
        } catch (err) {
            res.status(304).json({ error: [...err] })
        }
    },

    delete: async (req, res) => {
        const id = req.params.id
        try {
            await Lanche.destroy({ where: { id } })
            res.status(201).json({ msg: 'Lanche excluído com sucesso!' })
        } catch (err) {
            res.status(400).json(err)
        }
    }
}


module.exports = lanchesController;