import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SeccionunoPage } from '../seccionuno/seccionuno';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  otraPagina(){
    this.navCtrl.push(SeccionunoPage);
  }

}
