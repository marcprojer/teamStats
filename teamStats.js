const team = {
  _players: [
    {firstName: 'Cristiano', lastName: 'Ronaldo', age: 32},
    {firstName: 'Lionel', lastName: 'Messi', age: 34},
    {firstName: 'David', lastName: 'Beckham', age: 45}
  ],
  _games: [
    {opponent: 'Real Madrid', teamPoints: 3, opponentPoints: 0},
    {opponent: 'Barcelona', teamPoints: 1, opponentPoints: 1},
    {opponent: 'Manchester United', teamPoints: 0, opponentPoints: 3}
  ],
  get players(){
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, NewAge){
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: NewAge
    };
    this.players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints){
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    };
    this.games.push(game);
  }
};

// add new Player
team.addPlayer('Thierry', 'Henry', 59);
console.log(team.players);

// add game
team.addGame('Arsenal', 3, 0);
console.log(team.games);