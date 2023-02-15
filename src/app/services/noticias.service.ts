import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }
  //ACAVO DE METER UNA CLASE PRIVATE HTTP: HTTCLIENT
  //este método va a devolver un OBSERVABLE en getNoticias, de modo que en getNoticias, desp de any ponemos...

 //vamos a crear un MÉTODO  que sea para recibir las noticias --> con dos parámetros seg el objeto
 getNoticias(parametros: any): Observable<any>{

    const URL = 'https://newsapi.org/v2/top-headlines?country='+parametros.pais+'&category='+parametros.categoria+'&apiKey=88f68f21031f4ce58392ad8d3da06f4c';
     // lo hemos puesto de manera dinámica para que me vaya cambiando el pais y la categoría
    return this.http.get(URL);

  } //para poder hacer las PETICIONES DE LA INFORMACIÓN Http debemos importar un módulo en app.module.ts --> HttpClientModule
    //una vez importado el módulo de HttpClientModule, en constructor --< desp inyectamos una clase en servicios --> constructor()
}   //le ponem os el return para que me devuelva una petición el this.get...

