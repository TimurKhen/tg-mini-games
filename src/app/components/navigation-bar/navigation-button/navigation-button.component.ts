import {Component, computed, input} from '@angular/core';
import {NavigationButton} from "../../../interfaces/navigation-interfaces/navigation-button";

@Component({
  selector: 'navigation-button',
  standalone: true,
  imports: [],
  templateUrl: './navigation-button.component.html',
  styleUrl: './navigation-button.component.sass'
})
export class NavigationButtonComponent {
  buttonName = input.required<NavigationButton>()
  iconPath = computed(() => `icons/${this.buttonName().icon}.svg`);
}
