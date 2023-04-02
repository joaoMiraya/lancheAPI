const db = require('../data/models')

const Pedido = db.Pedido;

const pedidosController = {
    list: (req, res) => {
        Pedido.findAll()
            .then(pedidos => {
                res.status(200).json(pedidos)
            })
            .catch(err => {
                res.status(500).json(err);
            })
    },
    findById: (req, res) => {
        Pedido.findByPk(req.params.id)
            .then(pedidos => {
                if (!pedidos) {
                    res.status(404).json(pedidos)
                } else {
                    res.status(200).json(pedidos)
                }
            })
            .catch(err => {
                res.status(404).json(err)
            })
    },
    create: async (req, res) => {
        const pedido = req.body;
        try {
            await Pedido.create(pedido)
            res.status(201).json({ msg: 'Pedido criado com sucesso!' })
        } catch (err) {
            res.status(400).json({ err })
        }
    },

    update: async (req, res) => {
        const id = req.params.id
        const pedido = req.body
        try {
            await Pedido.update(pedido, { where: { id } })
            res.status(201).json({ msg: 'Pedido alterado com sucesso!' })
        } catch (err) {
            res.status(304).json({ error: [...err] })
        }
    },

    delete: async (req, res) => {
        const id = req.params.id
        try {
            await Pedido.destroy({ where: { id } })
            res.status(201).json({ msg: 'Pedido excluído com sucesso!' })
        } catch (err) {
            res.status(400).json(err)
        }
    }
}


module.exports = pedidosController;