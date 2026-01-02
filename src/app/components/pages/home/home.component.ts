import {Component} from '@angular/core';
import {const_games} from "../../../core/constants";
import {GamePreviewComponent} from "./game-preview/game-preview.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    GamePreviewComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {
  games = const_games
}
