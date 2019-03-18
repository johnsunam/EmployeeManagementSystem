const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  
  server.get('/', (req, res) => {
    app.render(req, res, '/', req.query);
  })

  server.get('/:org/users', (req, res) => {
    req.query = {
      org: req.params.org
    }

    return app.render(req, res, '/users', req.query)
  })

  server.get('/:org/users/:user/profile', (req, res) => {
    req.query = {
      org: req.params.org,
      user: req.params.user
    }
    return app.render(req, res, '/users/profile', req.query)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready ons http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})