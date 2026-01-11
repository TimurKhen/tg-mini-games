import {Component, input, output} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 't-input',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.sass'
})
export class InputComponent {
  inputValue = input<string>('')
  outputValue = output<string>()

  onInputChange($event: Event) {
    const inputElement = $event.target as HTMLInputElement
    this.outputValue.emit(inputElement.value)
  }
}
