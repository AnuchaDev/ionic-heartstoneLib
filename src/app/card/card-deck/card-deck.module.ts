import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardDeckPageRoutingModule } from './card-deck-routing.module';

import { CardDeckPage } from './card-deck.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardDeckPageRoutingModule
  ],
  declarations: [CardDeckPage]
})
export class CardDeckPageModule {}
