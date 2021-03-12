import { Card } from './../shared/card.model';
import { Component, OnInit } from '@angular/core';
import { FavoriteCardStore } from './../shared/card-favorite.store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-card-favorite',
  templateUrl: './card-favorite.page.html',
  styleUrls: ['./card-favorite.page.scss'],
})
export class CardFavoritePage  {
  favoriteCardList: Card[] = [];

  favoriteCardSub: Subscription;

  constructor(private FavoriteCardStore: FavoriteCardStore) {
    this.favoriteCardSub = this.FavoriteCardStore.favoriteCards.subscribe(
      (favoriteCards: any) => {
        this.favoriteCardList = this.getFavoriteCardList(favoriteCards);
      }
    );
  }

  ionViewDidLeave() {
    if (this.favoriteCardSub && this.favoriteCardSub.closed) {
      this.favoriteCardSub.unsubscribe();
    }
  }

  private getFavoriteCardList(favoriteCards: any): Card[] {
    if (favoriteCards) {
      return Object.keys(favoriteCards)
        .filter((key) => favoriteCards[key])
        .map((key) => favoriteCards[key]);
    }
    return [];
  }
}
