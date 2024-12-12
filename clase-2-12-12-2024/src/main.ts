import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

// El código utiliza bootstrapApplication para iniciar una aplicación Angular con la configuración definida en appConfig y el componente raíz AppComponent. Si ocurre algún error durante el inicio, se captura y se muestra en la consola mediante console.error(err). Esto permite inicializar la aplicación de manera estructurada y manejar errores potenciales.