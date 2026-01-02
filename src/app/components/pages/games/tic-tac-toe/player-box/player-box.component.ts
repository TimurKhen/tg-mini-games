import {Component, input} from '@angular/core';

@Component({
  selector: 'player-box',
  standalone: true,
  imports: [],
  templateUrl: './player-box.component.html',
  styleUrl: './player-box.component.sass'
})
export class PlayerBoxComponent {
  currentIcon = input<string>('')
}
