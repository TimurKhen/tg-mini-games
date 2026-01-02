import {Component, input} from '@angular/core';
import {NavigationButtonComponent} from "./navigation-button/navigation-button.component";
import {NavigationButton} from "../../interfaces/navigation-interfaces/navigation-button";

@Component({
  selector: 'navigation-bar',
  standalone: true,
  imports: [
    NavigationButtonComponent
  ],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.sass'
})
export class NavigationBarComponent {
  navigationPages = input.required<NavigationButton[]>()
}
