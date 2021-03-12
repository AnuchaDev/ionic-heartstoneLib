import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntroappPageRoutingModule } from './introapp-routing.module';

import { IntroappPage } from './introapp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroappPageRoutingModule
  ],
  declarations: [IntroappPage]
})
export class IntroappPageModule {}
