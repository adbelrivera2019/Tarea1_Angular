import { Component } from '@angular/core';
import { ICard } from './Interfaces/ICard';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title="Autos HN"
  cd: ICard={
    titulo: "Todo Terreno",
    descripcion: "Autos 4x4, listos para la aventura",
    enlace: "https://www.laprensa.hn/autos/4x4-el-club-de-los-mas-fuertes-ATLP698239#image-1"
    }
  cd2: ICard ={
    titulo: "Autos Deportivos",
    descripcion: "Autos deportivos que roban miradas",
    enlace: "https://www.autospublicidad.com/hn/images/autos/1701/thumbnail/1602202329.jpg"
    }
    cd3: ICard ={
      titulo: "Autos Clasico",
      descripcion: "Autos Clasicos con mas de 40 anios rodando",
      enlace: "https://i.ytimg.com/vi/yf2JZHEWN8M/maxresdefault.jpg"
      }
    
    
    
  }


