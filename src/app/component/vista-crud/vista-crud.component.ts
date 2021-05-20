import { Component, OnInit } from '@angular/core';
import { Rol } from 'src/app/domain/rol';
import { Usuario } from 'src/app/domain/usuario';
import { FormsModule } from "@angular/forms";
import { ServiceUserService } from 'src/app/service/service-user.service';

@Component({
  selector: 'app-vista-crud',
  templateUrl: './vista-crud.component.html',
  styleUrls: ['./vista-crud.component.css']
})
export class VistaCRUDComponent implements OnInit {

  public usuario!: Usuario;

  public usuarioEditar!: Usuario;
  public rol!: Rol[];
  public activos!: Rol[];
  constructor(public usuarioServices: ServiceUserService) { }

  ngOnInit(): void {
    this.activos = [new Rol(1, "Y"), new Rol(2, "N")];
    this.usuario = new Usuario(0, "", "", 0);
    this.usuarioEditar = new Usuario(0, "", "", 0);
    this.serviceRol();
  }

  save() {
    console.log(this.usuario);
    this.usuarioServices.crearUsuario(this.usuario).subscribe(
      ok => {
        window.alert('usuario creado correctamente \n ' + ok);
        this.usuario = new Usuario(0, "", "", 0);
      },
      err => {
        console.log(err.error.error);
        window.alert('ERROR AL CREAR USUARIO \n ' + err.error.error);
      });

  }
  serviceRol() {
    //this.rol = [new Rol(1,"Y"),new Rol(2,"N")];
    this.usuarioServices.buscarRoles().subscribe(
      data => {
        this.rol = data;

      },
      error => {
        window.alert("Error en Servicioas \n " + error);
      }
    );

  }
  editar() {
    console.log(
      this.usuarioServices);


    this.usuarioServices.editarUsuario(this.usuarioEditar).subscribe(
      ok => {
        window.alert("Editado Correctamente");
        console.log(ok);

      },
      error => {
        window.alert("Error en Los servicio \n" + error);
      }

    );



  }

}
