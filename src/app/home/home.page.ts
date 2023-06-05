import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
public alertButtons = ['OK'];

  nombre: string = "";
  apellido: string = "";

  constructor(private alertController: AlertController) {}

  limpiar(){
    
  }

  mostrarUsuario(){
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: this.nombre,
      message: this.nombre +" "+ this.apellido,
      buttons: ['OK'],
    });

    await alert.present();
  }

  ngOnInit() {
  }
}
