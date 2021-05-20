import { Component, OnInit } from '@angular/core';
import { Rol } from 'src/app/domain/rol';
import { Usuario } from 'src/app/domain/usuario';
import { ServiceUserService } from 'src/app/service/service-user.service';

@Component({
  selector: 'app-vista-usuario',
  templateUrl: './vista-usuario.component.html',
  styleUrls: ['./vista-usuario.component.css']
})
export class VistaUsuarioComponent implements OnInit {

  public usuarios!: Usuario[];
  public rol!: Rol[];
  constructor(public usuarioServices: ServiceUserService) { }

  ngOnInit(): void {
    this.buscarTodos();
  }
  public buscarTodos():void{

    this.usuarioServices.buscarTodosLosUsuario().subscribe(
      data=>{
        this.usuarios=data;
      },
      error=>{
        window.alert("Error en servicios \n No se encontraron datos"+ error);
      });

  }
  public delete(idUsuario:number): void {

  }
  public cambiar(usuario:string,activo:string):void{

  }
}
