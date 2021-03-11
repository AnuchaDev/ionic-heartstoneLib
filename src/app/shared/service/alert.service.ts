import { AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable()
export class AlertService {
  constructor(public alertController:AlertController){}
  async presentAlert(message:string) {
    const alert = await this.alertController.create({
      header: 'Alert',
      message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
