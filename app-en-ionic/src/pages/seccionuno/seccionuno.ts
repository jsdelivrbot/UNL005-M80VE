import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  aRutas(){
    this.navCtrl.push(RutasPage);
  }
  aDescubre(){
    this.navCtrl.push(DescubrePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeccionunoPage');
  }

}
