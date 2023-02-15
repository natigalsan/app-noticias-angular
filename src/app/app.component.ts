import { Component } from '@angular/core';
import { NoticiasService } from './services/noticias.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App-Noticias';
  //voy a crear una nueva variable listNoticias
  listNoticias: any[] = [];
  loading = false;
  translate: any;

  //al no crear por defecto en este archivo el constructor, lo crearé a mano.
  constructor(private _noticiaService: NoticiasService){

  }

  //servicio privado

  //este es el método que va a crear la busqueda de mi noticia
  buscarNoticia(parametros: any) {
    // console.log('soy el padre');
    // console.log(parametros);
    //esta información la recoge ahora el componente padre que le viene desde el componente hijo (formulario)
    //----------------------------------------Loading se pone true al iniciar la busqueda de noticia para que se muetre
    this.loading = true; //esto es para que se muestre al principo de la busqueda y luego se pone false para que se deje de mostrar
    this.listNoticias = []; //esto lo pongo par que al hacer una nueva busqueda no me aparezca las noticias anteriores sino como en blanco
    //---------------------------------------
    // le voy a poner un SETTIMEOUT()para que el spinner me dure algo más--------------

    setTimeout(() => {
      this._noticiaService.getNoticias(parametros).subscribe(data => {
        this.loading = false; //para que se deje de mostrar
        console.log(data);
        this.listNoticias = data.articles;
        //ahora debemos pasarle al componente hijo la información de este articulo de la API --> @Input --> entonces me voy a-->  listado-noticias.ts y le meto el @Input para recoger la info del padre.
      }, error => {
        console.log(error);
        //estos errores los podemos manejar dentro del componente o del sercicio "noticias.services"
        this.loading = false; //y aqui otra vez lo pongo para que no se muestre más y se quede como un bucle
      })
    },1500)
  }



}
