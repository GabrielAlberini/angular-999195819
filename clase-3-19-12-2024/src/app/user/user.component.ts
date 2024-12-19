import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  template: `
  <h2>Nombre de usuario: {{name}}</h2>
  <h3>Nombre de la clase: {{themeClass}}</h3>
  `,
  styles: `
    h2 {
      color: yellowgreen;
    }
  `
})

export class UserComponent {
  @Input() themeClass = ""
  name = "Sebastian"
}
