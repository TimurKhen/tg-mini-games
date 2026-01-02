import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavigationBarComponent} from "./components/navigation-bar/navigation-bar.component";
import {NavigationButton} from "./interfaces/navigation-interfaces/navigation-button";
import {const_navigation_objects} from "./core/constants";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'tg-mini-games';
  navigation_objects: NavigationButton[] = const_navigation_objects
}
