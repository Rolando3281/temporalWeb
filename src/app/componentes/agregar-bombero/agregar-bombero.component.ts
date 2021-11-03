import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { CrudBomberoService } from 'src/app/servicios/crud-bombero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-bombero',
  templateUrl: './agregar-bombero.component.html',
  styleUrls: ['./agregar-bombero.component.css']
})
export class AgregarBomberoComponent implements OnInit {

  formularioDeBombero:FormGroup;

  constructor(
    public formulario:FormBuilder,
    private bomberoService:CrudBomberoService,
    private ruteador:Router ) 
    { 
    this.formularioDeBombero=this.formulario.group({
      nombres:[''],
      apellidos:[''],
      email:[''],
      fechaNacimiento:['1985-10-10'],
      direccion:['4ta calle 4-87 Canton El Rosario'],
      fechaAlta:['2021-06-01'],
      fechaCreacion:['2021-11-02']

    });

  }

  ngOnInit(): void {
  }

  enviarDatos():any {
    console.log("Me presionaron!...");
    console.log(this.formularioDeBombero.value);
    this.bomberoService.agregarBombero(this.formularioDeBombero.value).subscribe();
    this.ruteador.navigateByUrl('/listar-bombero');

  }

}
