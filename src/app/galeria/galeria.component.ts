import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {
  imagenes = [
    { src: 'https://img.freepik.com/foto-gratis/paisaje-forestal_71767-127.jpg?size=626&ext=jpg&ga=GA1.1.672697106.1714867200&semt=ais', alt: 'Imagen 1' },
    { src: 'https://s1.significados.com/foto/paisaje-og.jpg', alt: 'Imagen 2' },
    { src: 'https://i.blogs.es/3fd5a4/jumpstory-download20220511-143520/1366_2000.jpg', alt: 'Imagen 3' },
    { src: 'https://w0.peakpx.com/wallpaper/224/496/HD-wallpaper-mountain-full-paisaje.jpg', alt: 'Imagen 4' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjFaun93Qh7gXmjT9tbiT4hfV34tSe3yZIG_X7_kKj4Uu5cEkG5aY6-4bfe4IFj7d41m4&usqp=CAU', alt: 'Imagen 5' },
    { src: 'https://www.autopista.es/uploads/s1/10/48/89/47/montanas-del-arco-iris-uno-de-los-bonitos-paisajes-que-esconden-el-planeta.jpeg', alt: 'Imagen 6' },
    { src: 'https://www.nippon.com/es/ncommon/contents/japan-data/1331263/1331263.jpg', alt: 'Imagen 7' },
    { src: 'https://www.lifeder.com/wp-content/uploads/2019/08/frases-sobre-paisajes.jpg', alt: 'Imagen 8' },
    { src: 'https://i.pinimg.com/736x/06/ea/98/06ea980fdf874b4f3a4b8b607241a085.jpg', alt: 'Imagen 9' },
  ];
}
