import { Component } from '@angular/core';
import { ICard } from '../Interfaces/ICard';
@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {
  title="Autos HN"
  cd: ICard={
    titulo: "Todo Terreno",
    descripcion: "Autos 4x4: listos para la aventura",
    enlace: "https://www.laprensa.hn/autos/4x4-el-club-de-los-mas-fuertes-ATLP698239#image-1"
    }
  cd2: ICard ={
    titulo: "Autos Deportivos",
    descripcion: "Autos Deportivos: que roban miradas",
    enlace: "https://www.autospublicidad.com/hn/images/autos/1701/thumbnail/1602202329.jpg"
    }
    cd3: ICard ={
      titulo: "Autos Clasico",
      descripcion: "Autos Clasicos: mas experiencia",
      enlace: "https://i.ytimg.com/vi/yf2JZHEWN8M/maxresdefault.jpg"
      }
    
    
    
}
