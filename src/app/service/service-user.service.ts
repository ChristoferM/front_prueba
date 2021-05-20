import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../domain/usuario';
import { Rol } from '../domain/rol';

@Injectable({
  providedIn: 'root'
})
export class ServiceUserService {

  public url: string = environment.apiURL + "prueba/";
  constructor(public httpClient:HttpClient) { }


  buscarTodosLosUsuario(): Observable<any> {
    
    return this.httpClient.get(this.url+'buscarTodo');

  }
  buscarUsuario(data: string): Observable<any> {
    
    return this.httpClient.get(this.url+'buscarUsuario/'+data);

  }
  crearUsuario(usuario:Usuario): Observable<any> {
    return this.httpClient.post(this.url+'guardarUser',usuario);

  }

  buscarRoles(): Observable<any> {
    return this.httpClient.get(this.url+'buscarRoles');

  }
  editarUsuario(usuario:Usuario): Observable<any> {
    return this.httpClient.put(this.url+'actualizarUsuario',usuario);

  }
}
