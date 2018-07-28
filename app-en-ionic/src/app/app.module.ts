import { CameraPreview } from '@ionic-native/camera-preview';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SeccionunoPage } from '../pages/seccionuno/seccionuno';
import { RutasPage } from '../pages/rutas/rutas';
// import { DescubrePage } from '../pages/descubre/descubre';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SeccionunoPage,
    RutasPage
    // DescubrePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SeccionunoPage,
    RutasPage
    // DescubrePage
  ],
  providers: [
    StatusBar,
    SplashScreen,Camera,
    CameraPreview,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
