import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { bombero } from './bombero';

@Injectable({
  providedIn: 'root'
})
export class CrudBomberoService {

  API: string='http://localhost:8000/api/bomberos/';

  constructor(private clienteHttp:HttpClient) {  }

  agregarBombero(datosBombero:bombero):Observable<any>{
    return this.clienteHttp.post(this.API,datosBombero);

  }

  obtenerBomberos(){
    return this.clienteHttp.get(this.API);

  }
}
