const db = require('../data/models')

const Cliente = db.Cliente;

const clienteController = {
    list: (req, res) => {
        Cliente.findAll()
            .then(clientes => {
                res.status(200).json(clientes)
            })
            .catch(err => {
                res.status(500).json(err);
            })
    },
    findByEmail: (req, res) => {
        Cliente.findOne({
            where: {
                email: req.params.email
            }
        })
            .then((cliente) => {
                if (cliente) {
                    res.status(200).json(cliente);
                } else {
                    res.status(404).json({ error: 'Email não encontrado' })
                }
            }).catch((err) => {
                res.status(500).json(err);
            })

    },
    findById: (req, res) => {
        Cliente.findByPk(req.params.id)
            .then(clientes => {
                if (!clientes) {
                    res.status(404).json(clientes)
                } else {
                    res.status(200).json(clientes)
                }
            })
            .catch(err => {
                res.status(404).json(err)
            })
    },
    create: async (req, res) => {
        const cliente = req.body;
        try {
            await Cliente.create(cliente)
            res.status(201).json({ msg: 'Cliente criado com sucesso!' })
        } catch (err) {
            res.status(400).json({ err })
        }
    },

    update: async (req, res) => {
        const id = req.params.id
        const cliente = req.body
        try {
            await Cliente.update(cliente, { where: { id } })
            res.status(201).json({ msg: 'Cliente alterado com sucesso!' })
        } catch (err) {
            res.status(304).json({ error: [...err] })
        }
    },

    delete: async (req, res) => {
        const id = req.params.id
        try {
            await Cliente.destroy({ where: { id } })
            res.status(201).json({ msg: 'Cliente excluído com sucesso!' })
        } catch (err) {
            res.status(400).json(err)
        }
    }
}


module.exports = clienteController;