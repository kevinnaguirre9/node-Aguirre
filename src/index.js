import app from './app'
import morgan from 'morgan'

app.listen(3000)

app.use(morgan('combined'))

app.get('/', (req, res) => {
     res.json('Welcome')
})

console.log('Server listening on port', 3000)