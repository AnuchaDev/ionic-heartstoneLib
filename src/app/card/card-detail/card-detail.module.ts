import { AlertService } from './../../shared/service/alert.service';
import { ToastService } from './../../shared/service/toast.service';
import { CardService } from './../shared/card.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardDetailPageRoutingModule } from './card-detail-routing.module';

import { CardDetailPage } from './card-detail.page';
import { HttpClientModule } from '@angular/common/http';
import { LoaderService } from './../../shared/service/loader.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardDetailPageRoutingModule,
    HttpClientModule,
  ],
  providers:[
    CardService,
    LoaderService,
    ToastService,
    AlertService,
  ],
  declarations: [CardDetailPage]
})
export class CardDetailPageModule {}
