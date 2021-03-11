import { AlertService } from './../../shared/service/alert.service';
import { LoaderService } from './../../shared/service/loader.service';
import { LoadingController } from '@ionic/angular';
import { CardService } from './../shared/card.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from '../shared/card.model';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.page.html',
  styleUrls: ['./card-detail.page.scss'],
})
export class CardDetailPage {
  card: Card;
  loader: any;

  constructor(
    private route: ActivatedRoute,
    private cardService: CardService,
    private navCtrl: NavController,
    private LoaderService: LoaderService,
    private alertService:AlertService,
  ) {}


  ionViewWillEnter() {
    const cardId = this.route.snapshot.paramMap.get('cardId');

   this.LoaderService.presentLoading()

    this.cardService.getCardById(cardId).subscribe((card: Card[]) => {
      this.card = card.map((card: Card) => {
        card.text = this.cardService.replaceCardTextLine(card.text);
        return card;
      })[0];
      this.LoaderService.dismissLoading();
    });
  }

  updateImage() {
    this.card.img = '/assets/images/DefaultCard.png';
  }
}
