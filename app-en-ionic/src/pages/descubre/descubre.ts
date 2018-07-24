import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the DescubrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-descubre',
  templateUrl: 'descubre.html',
})
export class DescubrePage {

  myphoto:any;

  constructor(public navCtrl: NavController, private camera: Camera) {
  }
foto(){
  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  
  this.camera.getPicture(options).then((imageData) => {
   // imageData is either a base64 encoded string or a file URI
   // If it's base64 (DATA_URL):
   this.myphoto = 'data:image/jpeg;base64,' + imageData;
  }, (err) => {
   // Handle error
  });

}
  ionViewDidLoad() {
    console.log('ionViewDidLoad DescubrePage');
  }

}
