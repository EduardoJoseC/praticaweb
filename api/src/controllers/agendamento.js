module.exports = app => {

    app.get('/agendamento', (req, res) =>
      res.send('Get Agendamento Tchô')
    )
  
    app.post('/agendamento', (req, res) => {
      console.log(req.body);
      res.send('Post Agendamento Tchô')
    }
  
    )
  
  }