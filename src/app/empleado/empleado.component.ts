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
habilitacionCuadro=false;

userLogin=false;

getUserLogin(){
  this.userLogin=false;
}
 llamaEmpresa(value: String){

 }
  constructor() {

  }

  ngOnInit(): void {

  }
}
