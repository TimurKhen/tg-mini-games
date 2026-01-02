import {Routes} from '@angular/router';
import {TicTacToeComponent} from "./components/pages/games/tic-tac-toe/tic-tac-toe.component";
import {HomeComponent} from "./components/pages/home/home.component";
import {SettingsComponent} from "./components/pages/settings/settings.component";
import {PeopleComponent} from "./components/pages/people/people.component";

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'tictactoe', component: TicTacToeComponent
      }
    ]
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: 'people',
    component: PeopleComponent,
  }
];
