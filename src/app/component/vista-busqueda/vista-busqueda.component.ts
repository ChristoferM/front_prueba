import { Component, OnInit } from '@angular/core';
import { Rol } from 'src/app/domain/rol';
import { Usuario } from 'src/app/domain/usuario';
import { ServiceUserService } from 'src/app/service/service-user.service';
@Component({
  selector: 'app-vista-busqueda',
  templateUrl: './vista-busqueda.component.html',
  styleUrls: ['./vista-busqueda.component.css']
})
export class VistaBusquedaComponent implements OnInit {

  public usuarios!: Usuario[];
  public rol!: Rol;
  public nombre !: string;

  constructor(public usuarioServices: ServiceUserService) { }

  ngOnInit(): void {
  }

  public buscarUsuario(): void {
    this.usuarioServices.buscarUsuario(this.nombre).subscribe(
      data => {
        this.usuarios = data;
      },
      error => {
        window.alert("Error en servicios \n No se encontraron datos" + error);
      }
    );


  }
}
