import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PadreComponent } from './padre/padre.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,PadreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  mensaje = 'mensaje del app';
  valorContador:number=0;

  incrementar(){
    this.valorContador++;
  }

  decrementar(){
    this.valorContador--;
  }

}
