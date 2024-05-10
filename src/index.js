const express = require('express');
const conectarDB = require('../config/db');
const cors = require('cors');
const app = express();

conectarDB();
app.use(cors());

app.use(express.json());
app.use('/api/clientes', require('../routes/rutas'));

app.get('/', (req,res) => {
    res.send('Hello Word');
})

const port = process.env.PORT || 10000

app.listen(port, () => {
    console.log('Servidor corriendo en puerto 10000 http://localhost:10000')
});