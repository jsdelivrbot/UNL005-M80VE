import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { RutasPage } from '../rutas/rutas';
import { DescubrePage } from '../descubre/descubre';


/**
 * Generated class for the SeccionunoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seccionuno',
  templateUrl: 'seccionuno.html',
})
export class SeccionunoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  aRutas(){
    this.navCtrl.push(RutasPage);
  }
  aDescubre(){
    let arLauncher = this.modalCtrl.create('DescubrePage');
    arLauncher.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeccionunoPage');
  }

}
