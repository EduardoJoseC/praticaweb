const express = require('express');
const app = express();
const port = 3000;

app.get('/aula', (req,resp) =>
 {resp.send('Fala Galera, Aula Express')
})

app.listen(port, () => {
    console.log('Aplicação Express porta' + port)
})