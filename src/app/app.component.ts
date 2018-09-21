import { Component } from '@angular/core';
import { MoviesServices } from './services/movies.service';
import { ActivatedRoute } from '../../node_modules/@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-movies';
  textoBusqueda : string;
  peliculas : any[];
  constructor(private moviesService : MoviesServices, private route : ActivatedRoute){

  }
  buscar(){
    
    this.moviesService.buscarPeliculaXnombre(this.textoBusqueda, 's').subscribe(
      (response : any) => {
        console.log(response);
        this.peliculas = response.Search;
      }
    );
  }
}
