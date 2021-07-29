const router = require('express').Router()

const tarefasRoutes = require('./tarefas')

router.use('/tarefas', tarefasRoutes)

router.get("/", function(req, res) {  
    res.redirect('/tarefas')
  });

module.exports = router