import {Routes} from '@angular/router';
import {TicTacToeComponent} from "./components/pages/games/tic-tac-toe/tic-tac-toe.component";
import {HomeComponent} from "./components/pages/home/home.component";

export const routes: Routes = [
  {
    path: 'main',
    component: HomeComponent,
    children: [
      {
        path: 'tictactoe', component: TicTacToeComponent
      }
    ]
  }
];
