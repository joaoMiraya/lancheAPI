const db = require('../data/models')

const Acrescimo = db.Acrescimo;

const acrescimoController = {
    list: (req, res) => {
        Acrescimo.findAll()
            .then(acrescimos => {
                res.status(200).json(acrescimos)
            })
            .catch(err => {
                res.status(500).json(err);
            })
    },
    findById: (req, res) => {
        Acrescimo.findByPk(req.params.id)
            .then(acrescimos => {
                if (!acrescimos) {
                    res.status(404).json(acrescimos)
                } else {
                    res.status(200).json(acrescimos)
                }
            })
            .catch(err => {
                res.status(404).json(err)
            })
    },
    create: async (req, res) => {
        const acrescimo = req.body;
        try {
            await Acrescimo.create(acrescimo)
            res.status(201).json({ msg: 'Acrescimo adicionado com sucesso!' })
        } catch (err) {
            res.status(400).json({ err})
        }
    },

    update: async (req, res) => {
        const id = req.params.id
        const acrescimo = req.body
        try {
            await Acrescimo.update(acrescimo, { where: { id } })
            res.status(201).json({ msg: 'Acrescimo alterado com sucesso!' })
        } catch (err) {
            res.status(304).json({ error: [...err] })
        }
    },

    delete: async (req, res) => {
        const id = req.params.id
        try {
            await Acrescimo.destroy({ where: { id } })
            res.status(201).json({ msg: 'Acrescimo excluída com sucesso!' })
        } catch (err) {
            res.status(400).json(err)
        }
    }
}


module.exports = acrescimoController;