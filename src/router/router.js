const { Router } = require("express");
const UserController = require("../controller/userController");
const ProdController = require("../controller/prodController")
const router = Router();

router.post('/', (req, res) => {
    UserController.create(req, res);
});
router.get('/', (req, res) => {
    UserController.getAll(req, res);
});
router.delete('/:id', (req, res) => {
    UserController.delete(req, res);
})

router.put('/:id', (req, res) => {
    UserController.update(req, res);
})
router.get('/:id', (req, res) => {
    UserController.getOne(req, res);
});


// ROTAS PARA PRODUTO


router.post('/produto/', (req, res) => {
    ProdController.create(req, res);
});
router.get('/produto/', (req, res) => {
    ProdController.getAll(req, res);
});
router.delete('/produto/:id', (req, res) => {
    ProdController.delete(req, res);
});
router.put('/produto/:id', (req, res) => {
    ProdController.update(req, res);
});
router.get('/produto/:id', (req, res) => {
    ProdController.getOne(req, res);
});
module.exports = router;