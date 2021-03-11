import { SearchComponent } from './../../shared/component/search/search.component';
import { ToastService } from './../../shared/service/toast.service';
import { LoaderService } from './../../shared/service/loader.service';
import { HttpClientModule } from '@angular/common/http';
import { CardService } from './../shared/card.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardListPageRoutingModule } from './card-list-routing.module';

import { CardListPage } from './card-list.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardListPageRoutingModule,
    HttpClientModule,
  ],
  providers:[
    CardService,
    LoaderService,
    ToastService,

  ],
  declarations: [CardListPage,
    SearchComponent,

  ]
})
export class CardListPageModule {}
