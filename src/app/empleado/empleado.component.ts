import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template: "<p>aqui iria un empleado</p>",
  styleUrls: ['./empleado.component.css'],
  //styles: ["p{background-color: red;}"]
})
export class EmpleadoComponent implements OnInit {
  nombre = "Juan";
  apellido = "Quiroz";
  edad = 8;
  //empresa = "Píldoras Informáticas"
  /*
  getEdad(){
    return this.edad;
  }
  */
/*Propiedades para binding */
habilitacionCuadro=false;
userLogin=false;
textoDeRegistro="No hay nadie registrado";

getUserLogin(){
  this.userLogin=false;
}
setUserLogin(event: Event){
  //textoDeRegistro = "usuario registrado";
  if((<HTMLInputElement>event.target).value=="si"){
    this.textoDeRegistro = "usuario registrado";
  }else{
    this.textoDeRegistro = "usuario no registrado";
  }
}
 llamaEmpresa(value: String){

 }
  constructor() {

  }

  ngOnInit(): void {

  }
}
