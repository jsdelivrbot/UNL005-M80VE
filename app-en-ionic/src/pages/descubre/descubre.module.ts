import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DescubrePage } from './descubre';

@NgModule({
  declarations: [
    DescubrePage,
  ],
  imports: [
    IonicPageModule.forChild(DescubrePage),
  ],
})
export class DescubrePageModule {}
