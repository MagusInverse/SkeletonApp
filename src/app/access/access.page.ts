import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-access',
  templateUrl: './access.page.html',
  styleUrls: ['./access.page.scss'],
})
export class AccessPage implements OnInit {

  correo: string = "";
  password: string = "";
  
  user1: string ="fe.donosoa@duocuc.cl";
  clave1: string ="12345";

  constructor(private alertController: AlertController, private router: Router) {}

  PasarDatos(){
    if(this.correo == this.user1 && this.password == this.clave1){
      let navigationExtras: NavigationExtras ={
        state: {
          usuario: this.correo
        }
      };

      this.router.navigate(['/home'], navigationExtras)
    }
    else{
      this.presentAlert("Usuario y/o Password Incorrecto")
    }
  }
  
  async presentAlert(msj: string) {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: msj,
      buttons: ['OK'],
    });

    await alert.present();
  }

  ngOnInit() {
  }
}