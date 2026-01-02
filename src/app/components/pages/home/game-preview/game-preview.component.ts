import {Component, input} from '@angular/core';
import {GamePreview} from "../../../../interfaces/home-interfaces/game-preview";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'game-preview',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './game-preview.component.html',
  styleUrl: './game-preview.component.sass'
})
export class GamePreviewComponent {
  previewData = input.required<GamePreview>()
}
