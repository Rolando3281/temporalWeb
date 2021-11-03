import { Component, OnInit } from '@angular/core';
import { CrudBomberoService } from 'src/app/servicios/crud-bombero.service';

@Component({
  selector: 'app-listar-bombero',
  templateUrl: './listar-bombero.component.html',
  styleUrls: ['./listar-bombero.component.css']
})
export class ListarBomberoComponent implements OnInit {
  bomberos:any;

  constructor(
    private servicioBomberos:CrudBomberoService
  ) { }

  ngOnInit(): void {
    this.servicioBomberos.obtenerBomberos().subscribe(respuesta=>{
     //console.log(respuesta);
     this.bomberos=respuesta;
     console.log(this.bomberos);
    });
  }


}
