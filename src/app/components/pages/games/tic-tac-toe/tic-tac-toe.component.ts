import {Component} from '@angular/core';
import {PlayerBoxComponent} from "./player-box/player-box.component";

@Component({
  selector: 'app-tic-tac-toe',
  standalone: true,
  imports: [
    PlayerBoxComponent
  ],
  templateUrl: './tic-tac-toe.component.html',
  styleUrl: './tic-tac-toe.component.sass'
})
export class TicTacToeComponent {
  playerBoxes = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]
  currentPlayer = 'x'
  isPlaying = true
  winner = ''
  moves = 0
  isDraw = false

  setPlayer() {
    if (this.currentPlayer === 'x') {
      this.currentPlayer = 'o'
    } else {
      this.currentPlayer = 'x'
    }
  }

  boxClick(x: number, y: number) {
    if (!this.isPlaying) return
    if (this.playerBoxes[x][y] === '') {
      this.playerBoxes[x][y] = this.currentPlayer
      this.setPlayer()
      this.moves += 1
      let winChecker = this.checkWinner()
      if (winChecker == 'x' || winChecker == 'o') {
        this.winner = winChecker
        this.isPlaying = false
      }
      if (winChecker == 'd') {
        this.isPlaying = false
        this.isDraw = true
      }

    } else {
      return
    }
  }

  checkWinner() {
    let board = this.playerBoxes

    if (this.moves < 5) return

    for (let i = 0; i < 3; i++) {
      if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== null) {
        return board[i][0];
      }
    }
    for (let j = 0; j < 3; j++) {
      if (board[0][j] === board[1][j] && board[1][j] === board[2][j] && board[0][j] !== null) {
        return board[0][j];
      }
    }
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== null) {
      return board[0][0];
    }
    if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== null) {
      return board[0][2];
    }

    if (this.moves == 9) {
      return 'd'
    }

    return false
  }

  setUpGame() {
    this.playerBoxes = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ]
    this.currentPlayer = 'x'
    this.isPlaying = true
    this.winner = ''
    this.moves = 0
  }
}
