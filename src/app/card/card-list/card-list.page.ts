import { ToastService } from './../../shared/service/toast.service';
import { LoaderService } from './../../shared/service/loader.service';
import { CardService } from './../shared/card.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from '../shared/card.model';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage'
import { FavoriteCardStore } from './../shared/card-favorite.store';
import { Subscription } from 'rxjs';

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
  isLoading:boolean= false;
  favoriteCards :any = {}
  favoriteCardSub:Subscription;
  limit:number=20;

  constructor(
    private route: ActivatedRoute,
    private cardService: CardService,
    private LoaderService: LoaderService,
    private ToastService: ToastService,
    private storage:Storage,
    private FavoriteCardStore:FavoriteCardStore,
  ) {
    this.favoriteCardSub = this.FavoriteCardStore.favoriteCards.subscribe((favoriteCards:any)=>{
      this.favoriteCards = favoriteCards
    })


  }
  ionViewDidLeave(){
    if(this.favoriteCardSub && this.favoriteCardSub.closed){
      this.favoriteCardSub.unsubscribe();
    }
  }
  private getCards() {
    this.LoaderService.presentLoading();

    this.cardService.getCardByDeck(this.cardDeckGroup, this.cardDeck).subscribe(
      (cards: Card[]) => {
        this.cards = cards.map((card: Card) => {
          card.text = this.cardService.replaceCardTextLine(card.text);
          card.favorite = this.isCardFavorite(card.cardId)
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

  private isCardFavorite(cardId:string):boolean{
    const card = this.favoriteCards[cardId];
    return card? true : false;
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
    this.isLoading = false;
  }
  handleSearch(){
    this.isLoading = true;
  }

  favoriteCard(card:Card){
    this.FavoriteCardStore.toggleCard(card);
  }

  loadData(infiniteScroll){
    setTimeout(()=>{
      this.limit += 20;
      infiniteScroll.target.complete();
    },500)

  }

  ngOnInit() {}
}
