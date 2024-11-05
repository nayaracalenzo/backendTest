// const { listarTodosLivros, listarUmLivro, criarUmLivro, alterarLivros, deletarLivros } = require('../Controllers/livrosController');


const router = require('express').Router();

router.get('/', (req, res) => {
    res.send("listartodososlivros"); 
})

router.get('/:id', async (req, res) => {
    res.send(await listarUmLivro(req.params.id));
})

router.post('/', async (req, res) => {
    res.send(await criarUmLivro(req.body))
})

router.put('/:id', async (req, res) => {
    res.send(await alterarLivros (req.body, req.params.id))
})

router.delete('/:id', async (req, res) => {
    res.send(await deletarLivros (req.params.id))
})

module.exports = router;