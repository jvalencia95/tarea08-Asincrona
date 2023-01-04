import { Component } from '@angular/core';



interface Persona {
  nombre: string,
  apellido: string,
  edad: number
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  personas: Persona[] = []


  obj: Persona = {
    nombre: "",
    apellido: "",
    edad: 0
  }

  agregarPersona(nombre: string, apellido: string, edad: string) {

    this.obj = {
      nombre: nombre,
      apellido: apellido,
      edad: Number(edad)
    }

    this.personas.push(this.obj);
  }
}
