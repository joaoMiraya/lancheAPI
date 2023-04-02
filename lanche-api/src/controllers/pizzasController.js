const db = require('../data/models')

const Pizza = db.Pizza;

const pizzasController = {
    list: (req, res) => {
        Pizza.findAll()
            .then(pizzas => {
                res.status(200).json(pizzas)
            })
            .catch(err => {
                res.status(500).json(err);
            })
    },
    findById: (req, res) => {
        Pizza.findByPk(req.params.id)
            .then(pizzas => {
                if (!pizzas) {
                    res.status(404).json(pizzas)
                } else {
                    res.status(200).json(pizzas)
                }
            })
            .catch(err => {
                res.status(404).json(err)
            })
    },
    create: async (req, res) => {
        const pizza = req.body;
        try {
            await Pizza.create(pizza)
            res.status(201).json({ msg: 'Pizza criada com sucesso!' })
        } catch (err) {
            res.status(400).json({ err })
        }
    },

    update: async (req, res) => {
        const id = req.params.id
        const pizza = req.body
        try {
            await Pizza.update(pizza, { where: { id } })
            res.status(201).json({ msg: 'Pizza alterada com sucesso!' })
        } catch (err) {
            res.status(304).json({ error: [...err] })
        }
    },

    delete: async (req, res) => {
        const id = req.params.id
        try {
            await Pizza.destroy({ where: { id } })
            res.status(201).json({ msg: 'Pizza excluída com sucesso!' })
        } catch (err) {
            res.status(400).json(err)
        }
    }
}


module.exports = pizzasController;