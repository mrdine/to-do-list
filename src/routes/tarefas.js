const router = require('express').Router();
const models = require('../db/models')
const moment = require('moment-timezone')
moment(new Date()).tz("America/Recife").format();
moment.suppressDeprecationWarnings = true

router.get('/', async (req, res) => {
    
    const tarefas = await models.Tarefa.findAll({ raw: true, order: ['prazo'] })
    
    res.render("base", { tarefas, moment: moment });
})

router.post('/adicionar', async (req, res) => {
    let { nome, descricao, responsavel, prazo } = req.body
    prazo = moment(prazo).toDate()
    prazo.setHours(prazo.getHours() + 7)

    const tarefa = models.Tarefa.build( { nome, descricao, responsavel, prazo, concluida: false } )
    await tarefa.save()
    res.redirect('/')
})

router.post('/editar', async (req, res) => {
    let { nome, descricao, responsavel, prazo, id } = req.body
    prazo = moment(prazo, 'DD/MM/YYYY')
    if(!prazo.isValid()) {

    }
    prazo = prazo.toDate()
    const tarefa = await models.Tarefa.findByPk(id)
    tarefa.nome = nome
    tarefa.descricao = descricao
    tarefa.responsavel = responsavel
    tarefa.prazo = prazo
    tarefa.save()
    res.redirect('/')
})

router.post('/deletar/:id', async (req, res) => {
    const id = req.params.id
    const tarefa = await models.Tarefa.findByPk(id)
    await tarefa.destroy()
    res.redirect('/')
})

router.get('/completar/:id', async (req,res) => {
    const id = req.params.id
    const tarefa = await models.Tarefa.findByPk(id)
    tarefa.concluida = !tarefa.concluida
    await tarefa.save()
    res.redirect('/')
})

module.exports = router
