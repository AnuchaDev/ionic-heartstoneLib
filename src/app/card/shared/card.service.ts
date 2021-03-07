import {Injectable} from '@angular/core'


@Injectable()
export class CardService{
  public readonly cardDecks:string[] = ['Druid','Mage','Warrior','Rogue','Shaman','Priest','Warlock','Hunter','Paladin']

}
