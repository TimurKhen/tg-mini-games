import {AfterViewInit, Component, ElementRef, input, OnInit, ViewChild} from '@angular/core';
import {NavigationButtonComponent} from "./navigation-button/navigation-button.component";
import {NavigationButton} from "../../interfaces/navigation-interfaces/navigation-button";
import {NgClass} from "@angular/common";

@Component({
  selector: 'navigation-bar',
  standalone: true,
  imports: [
    NavigationButtonComponent,
    NgClass
  ],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.sass'
})
export class NavigationBarComponent {
  navigationPages = input.required<NavigationButton[]>()

  currentIndex = 1

  setIndex(index: number) {
    this.currentIndex = index
  }

}
