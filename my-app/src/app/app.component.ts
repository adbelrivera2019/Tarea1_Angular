import { Component } from '@angular/core';
interface IEnlace {
  url: string,
  msg: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Futbol Hondureño';
  descripcion = 'Esta es una pagina sobre el deporte rey de los Hondureños'
  enlace: IEnlace = {
    url:"http://www.google.com",
    msg:"Google Prueba Angular"
  }
}

