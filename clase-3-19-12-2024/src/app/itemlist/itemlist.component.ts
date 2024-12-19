import { Component } from '@angular/core';

@Component({
  selector: 'app-itemlist',
  imports: [],
  template: `
    <ul>
      @for(item of items; track item.id) {
        <li (click)="favItem = item.text">{{item.text}}</li>
      }
    </ul>
    @if(favItem) {
      <p>Item favorito: {{favItem}}</p>
      <button (click)="favItem=''">Eliminar item fav</button>
    }
  `,
  styles: `

  li {
    transition: color 0.3s;
  }

  li:hover {
    cursor: pointer;
    color: #ccc;
  }

  p {
    margin-top: 10px;
  }

  button {
    padding: 5px 10px;
    background: #333;
    color: white;
    border: none;
    border-radius: 5px;
    margin-top: 10px;
  }
  `
})

export class ItemlistComponent {
  favItem = ""

  items = [
    {
      id: 1,
      text: "Iteración de datos"
    },
    {
      id: 2,
      text: "Envio de propiedades de componente padre a hijo"
    },
    {
      id: 3,
      text: "Carga diferida"
    }
  ]

  saludar(text: string) {
    alert("Item seleccionado: " + text);
  }
}
