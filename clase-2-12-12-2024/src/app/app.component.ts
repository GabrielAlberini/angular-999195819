import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserComponent],
  templateUrl: "./app.component.html",
  // template: `
  //   <h1>Bienvenido Sebastian al curso de Angular</h1>
  //   <p>Tema de hoy: Introducción Angular</p>
  //   <ul>
  //     <li>Instalación</li>
  //     <li>Configuración inicial</li>
  //     <li>Extensiones</li>
  //   </ul>
  // `,
  styleUrl: "./app.component.css"
  // styles: `
  //   h1 {
  //     color: violet;
  //   }
  // `
})

export class AppComponent {
  title = 'clase-2-12-12-2024';
  name = "Gabriel"
  content = "Introducción Angular"
  islogin = true
}
