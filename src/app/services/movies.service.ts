import {Http, Response} from '@angular/http';
import {map} from 'rxjs/operators';
import { Injectable } from '../../../node_modules/@angular/core';

@Injectable()
export class MoviesServices{
    private key = "42af3ea1";
    private urlmovies = "http://www.omdbapi.com/?apikey=" + this.key; 

    constructor(private http : Http){

    }
    buscarPeliculaXnombre(nombre : string, type : string, page? : number){
        let url = this.urlmovies + '&' + type + '=' + nombre + (page ? '&page=' + page: '');
        return this.http.get(url).pipe(map(
            (response : Response) => { return response.json();}
        ));
        
    }
}