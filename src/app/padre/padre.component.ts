import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-padre',
  standalone: true, // Marcado como independiente
  templateUrl: './padre.component.html',
})
export class PadreComponent {
  @Input() recibeHijo: string = '';
}
