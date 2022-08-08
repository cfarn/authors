const express = require('express')
const app = express()
const authors = require('../authors.json')

// affichage dynamique
app.get('/:id', (req, res) => {
    // console.log(req.params)
    // on récupère l'id des params
    const {id} = req.params
    const author = authors.find(author => author.id === Number(id))

    if(author){
        res.json(`${author.name}, ${author.nationality}`)
    }else {
        res.status(404).send('Not Found')
    }
})

app.get('/:id/books', (req, res) => {
    // console.log('get books')
    const {id} = req.params
    const author = authors.find(author => author.id === Number(id))
    if(author){
        res.json(`${author.book.join(', ')}`)
    }else {
        res.status(404).send('Not Found')
    }
})

app.get('/json/:id', (req, res) => {
    const {id} = req.params
    const author = authors.find(author => author.id === Number(id))

    if(author){
        const formattedAuthor = {
            name: author.name,
            nationality: author.nationality
        }
        res.json(formattedAuthor)
    }else {
        res.status(404).send('Not Found')
    }
})

app.get('/json/:id/books', (req, res) => {
    const {id} = req.params
    const author = authors.find(author => author.id === Number(id))

    if(author){
        const formattedAuthor = {
            books: author.books
        }
        res.json(formattedAuthor)
    }else {
        res.status(404).send('Not Found')
    }
})



module.exports = app