const User = require("../models/user");

const UserController = {
    create: async (req, res) => {
        try {
            const { nome, senha, email } = req.body;

            const userCriado = await User.create({nome, senha, email});


            return res.status(200).json({
                msg: 'Usuario criado com sucesso!',
                user: userCriado
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: 'Acione o Suporte' });
        }
    },
    update: async (req, res) => {
        try {
            const { id } = req.params;
            const { nome, senha, email } = req.body;

            console.log("Atualizando objeto!");
            console.log({ id });
            console.log({ nome, idade, senha, email });
            return res.status(200).json({
                msg: 'Usuario atualizado com sucesso!'
            });

        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: 'Acione o Suporte' });
        }
    },
    getAll: async (req, res) => {
        try {
            const usuarios = await User.findAll();
            return res.status(200).json({
                msg: 'Usuarios encontrados',
                usuarios: usuarios
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: 'Acione o Suporte' });
        }
    },
    getOne: async (req, res) => {
        try {
            const { id } = req.params;
            const userListarUm = await User.findByPk(id);

            if(userListarUm == null) {
                return res.status(404).json({
                    msg: 'Usuario nao encontrado'
                })
            }
            return res.status(200).json({
                msg: 'Usuario encontrado',
                usuario: userListarUm
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: 'Acione o Suporte' });
        }
    },
    delete: async (req, res) => {
        try {
            return res.status(200).json({
                msg: 'Usuario deletado com sucesso!'
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: 'Acione o Suporte' });
        }
    }
}

module.exports = UserController