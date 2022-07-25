const express = require('express')
const path = require('path')
const app = express()
app.use(express.static(path.join(__dirname,'dist')))
app.use(express.static(path.join(__dirname,'node_modules')))
console.log(path.join(__dirname, 'node_modules'));
let players=[]
let axios=require('axios')


axios
  .get('http://data.nba.net/10s/prod/v1/2018/players.json')
  .then(res => {
  players= res['data']['league']['standard']
  })
  



  const teamToIDs = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756"
}

const port = 3000
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})
app.get('/', function(request, response){
    
    response.send('Server is up and running smoothly')
})
app.get('/teams/:teamName', function(request, response){
    let team = []
    team =players.filter(player => player.teamId==teamToIDs[request.params.teamName]&&player.isActive)
response.send(team)
})




