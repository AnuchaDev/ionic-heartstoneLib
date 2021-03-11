import { ToastService } from './../../shared/service/toast.service';
import { LoaderService } from './../../shared/service/loader.service';
import { CardService } from './../shared/card.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from '../shared/card.model';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.page.html',
  styleUrls: ['./card-list.page.scss'],
})
export class CardListPage {
  cardDeckGroup: string;
  cardDeck: string;
  cards: Card[] = [];
  copyOfCards: Card[] = [];

  constructor(
    private route: ActivatedRoute,
    private cardService: CardService,
    private LoaderService: LoaderService,
    private ToastService: ToastService
  ) {}
  private getCards() {
    this.LoaderService.presentLoading();

    this.cardService.getCardByDeck(this.cardDeckGroup, this.cardDeck).subscribe(
      (cards: Card[]) => {
        this.cards = cards.map((card: Card) => {
          card.text = this.cardService.replaceCardTextLine(card.text);
          return card;
        });
        this.copyOfCards = Array.from(this.cards);
        this.LoaderService.dismissLoading();
      },
      () => {
        this.LoaderService.dismissLoading();
        this.ToastService.presentErrorToast(
          "Uuuuppp card could not ba loaded, let's let try to refresh page"
        );
      }
    );
  }
  ionViewWillEnter() {
    this.cardDeckGroup = this.route.snapshot.paramMap.get('cardDeckGroup');
    this.cardDeck = this.route.snapshot.paramMap.get('cardDeck');

    if (this.cards && this.cards.length === 0) {
      this.getCards();
    }
  }

  doRefresh(event) {
    this.getCards();
    event.target.complete();
  }

  hydrateCards(cards: Card[]) {
    this.cards = cards;
  }

  ngOnInit() {}
}
