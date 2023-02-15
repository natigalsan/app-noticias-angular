import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  //3. vamos a crear el decorador para pasar la info del componenete formulario (hijo) al padre(html)
  //la info que le vamos a mandar son los parametros recogidos en el formulario --> decorador @Output() y lo he tipificado como objeto de tipo <any>
  @Output() parametrosSeleccionados = new EventEmitter<any>()


  //2. inicialmente queremos que aparezca seleccionado el general xa ello ponemos una nueva variable:
  categoriaSeleccionada = "general";
  paisSeleccionado = "ar";

  //1. creamos dos variables una por cada select: países y categorías:

    paises: any[] = [
      {value: 'ar', nombre: 'Argentina'},
      {value: 'de', nombre: 'Alemania'},
      {value: 'fr', nombre: 'Francia'},
      {value: 'gb', nombre: 'Reino Unido'},
      {value: 'us', nombre: 'USA'},
      {value: 'mx', nombre: 'México'},
      {value: 'it', nombre: 'Italia'}



  ];
  categorias: any[] = [
    {value: 'general', nombre: 'General'},
    {value: 'business', nombre: 'Negocios'},
    {value: 'health', nombre: 'Salud'},
    {value: 'sports', nombre: 'Deporte'},
    {value: 'technology', nombre: 'Tecnología'},
    {value: 'science', nombre: 'Ciencia'},
    {value: 'entertainment', nombre: 'Entretenimiento'},

  ];


  constructor() { }

  ngOnInit(): void {
  }
  //crear METODO que cuando se ejecute esto hará que me imprma la info en consola --> (lo dejamos de demostración)
  buscarNoticia(){
    // console.log(this.categoriaSeleccionada);
    // console.log(this.paisSeleccionado);
     //voy a crear un objeto con dos parametros:
    const PARAMETROS = {
      //esto seria lo que el user haya seleccionado en el form
      categoria: this.categoriaSeleccionada, //esto seteará la categoria seleccionado en el formulario
      pais: this.paisSeleccionado //esto seteará el pais seleccionado

    }
    //una vez creado el objeto, voy a mandar la info al componente padre --> component html principal
    //para ello cogemos divhos parametros y los mandamos con un metodo llamado emit
    this.parametrosSeleccionados.emit(PARAMETROS);
    //Y YA TENGO LITO EL COMPONENTE HIJO --> AHORA VOY AL COMPONENTE PADRE



  }

}
