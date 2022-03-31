const express = require('express')
const PORT = 4000
const exphbs = require('express-handlebars')
const db = require('./db/db')
const taskRouter = require('./routes/tasksRoutes')
const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use('/tasks', taskRouter)

app.get('/', (req, res) => {
    res.redirect('/tasks')
})

db.sync().then( () => {
    console.log('Banco de dados conectado')
    app.listen(PORT, (err) => {
        console.log(err ? 'Ocorreu uma falha na inicialização do sistema' :
                          `Aplicação iniciada na porta ${PORT}`)
    })
}).catch((err) => console.log(err))