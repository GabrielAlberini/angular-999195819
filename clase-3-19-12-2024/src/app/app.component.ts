import { Component } from '@angular/core';
import { UserComponent } from './user/user.component';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { ContentComponent } from './content/content.component';
import { ImagesComponent } from "./images/images.component";

@Component({
  selector: 'app-root',
  imports: [UserComponent, ItemlistComponent, ContentComponent, ImagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  isLogin = true
  theme = "Paso de datos entre componentes"
}
