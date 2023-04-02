const db = require('../data/models')

const Bebida = db.Bebida;

const bebidasController = {
    list: (req, res) => {
        Bebida.findAll()
            .then(bebidas => {
                res.status(200).json(bebidas)
            })
            .catch(err => {
                res.status(500).json(err);
            })
    },
    findById: (req, res) => {
        Bebida.findByPk(req.params.id)
            .then(bebidas => {
                if (!bebidas) {
                    res.status(404).json(bebidas)
                } else {
                    res.status(200).json(bebidas)
                }
            })
            .catch(err => {
                res.status(404).json(err)
            })
    },
    create: async (req, res) => {
        const bebida = req.body;
        try {
            await Bebida.create(bebida)
            res.status(201).json({ msg: 'Bebida adicionada com sucesso!' })
        } catch (err) {
            res.status(400).json({ err})
        }
    },

    update: async (req, res) => {
        const id = req.params.id
        const bebida = req.body
        try {
            await Bebida.update(bebida, { where: { id } })
            res.status(201).json({ msg: 'Bebida alterada com sucesso!' })
        } catch (err) {
            res.status(304).json({ error: [...err] })
        }
    },

    delete: async (req, res) => {
        const id = req.params.id
        try {
            await Bebida.destroy({ where: { id } })
            res.status(201).json({ msg: 'Bebida excluída com sucesso!' })
        } catch (err) {
            res.status(400).json(err)
        }
    }
}


module.exports = bebidasController;