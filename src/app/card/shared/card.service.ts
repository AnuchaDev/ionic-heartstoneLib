import { CardDeck, Card } from './card.model';
import { Injectable } from '@angular/core';
import { of as ObservableOf, Observable } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpClientModule,
} from '@angular/common/http';

@Injectable()
export class CardService {
  private readonly HS_API_URL = 'https://omgvamp-hearthstone-v1.p.rapidapi.com';
  private readonly API_KEY =
    'cb2de56ea4msh12b366d05d39e5cp17afe0jsnb7bc32ae01aa';

  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'x-rapidapi-key': this.API_KEY });
  }

  public replaceCardTextLine(text:string){
    return text ? text.replace(new RegExp("\\\\n","g"), ", "): 'No Description';
  }

  public getAllCardDecks(): Observable<CardDeck[]> {
    return this.http.get<CardDeck[]>(`${this.HS_API_URL}/info`, {
      headers: this.headers,
    });
  }

  public getCardByDeck(
    cardDeckGroup: string,
    cardDeck: string
  ): Observable<Card[]> {
    return this.http.get<Card[]>(
      `${this.HS_API_URL}/cards/${cardDeckGroup}/${cardDeck}`,
      {
        headers: this.headers,
      }
    );
  }

  public getCardById(cardId: string): Observable<Card[]> {
    return this.http.get<Card[]>(`${this.HS_API_URL}/cards/${cardId}`, {
      headers: this.headers,
    });
  }

}
