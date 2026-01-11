import {Component, effect, signal} from '@angular/core';
import {InputComponent} from "../../../assets/input/input.component";
import {FormBuilder, FormsModule} from "@angular/forms";
import {toObservable} from "@angular/core/rxjs-interop";
import {filter} from "rxjs";

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    InputComponent,
    FormsModule
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.sass'
})
export class SettingsComponent {
  userValue = signal<string>('')
  readonly userName = toObservable(this.userValue).pipe(
    filter((value) => value.length > 0),
  )

  constructor() {
    this.userName.subscribe((val) => {
      console.log(val)
    })
  }
}
