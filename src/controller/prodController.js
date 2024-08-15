const Prod = require("../models/product");

const ProdController = {
    create: async (req, res) => {
        try {
            const { nome, preco, quantidade} = req.body;

            const prodCriado = await Prod.create({ nome, preco, quantidade});

            return res.status(200).json({
                msg: 'Produto criado com sucesso',
                produto: prodCriado
            });          
        }catch (error) {
            console.error(error);
            return res.status(500).json({ msg: 'Acione o suporte'});
        }
    },
    update: async (req, res) => {
        try{
            const { id } = req.params;
            const { nome, preco, quantidade} = req.body;

            const prodUpdate = await Prod.findByPk(id);

            if (prodUpdate == null) {
                return res.status(404).json({
                    msg: "Produto encontrado"
                });
            };

            const updated = await prodUpdate.update({
                nome, preco, quantidade
            });

            if(updated) {
                return res.status(200).json({
                    msg: "Produto atualizado com sucesso"
                });
            };

            return res.status(500).json({
                msg: "Erro ao utilizar"
            });
        }catch (error) {
            console.error(error);
            return res.status(500).json({
                msg: "Acione o suporte"
            });
        }
    },
    getAll: async (req, res) => {
        try {
            const produtos = await Prod.findAll();
            return res.status(200).json({
                msg: "Produtos encontrados",
                produtos: produtos
            });
        
        }catch (error) {
            console.error(error);
            return res.status(500).json({
                msg: "Acione o suporte"
            });
        }
    },
    getOne: async (req, res) => {
        try {
            const { id } = req.params;
            const prodListarUm = await Prod.findByPk(id);

            if(prodListarUm == null) {
                return res.status(404).json({
                    msg: "Produto não encontradp"
                });
            }
            return res.status(200).json({
                msg: "Produto encontrado",
                produto: prodListarUm
            });
        }catch (error) {
            console.error(error);
            return res.status(500).json({
                msg: "Acione o Suporte"
            })
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const prodFinded = await Prod.findByPk(id);

            if (prodFinded == null) {
                return res.status(404).json({
                    msg: "Produto não encontrado"
                });
            };
            
            prodFinded.destroy()
            return res.status(200).json({
                msg:  "Produto deletado com sucesso"
            });
        }catch (error){
            console.error(error);
            return res.status(500).json({
                msg: "Acione o Suporte"
            })
        }
    }
}

module.exports = ProdController;