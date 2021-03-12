import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'about',
        loadChildren: () => import('../about/about.module').then(m => m.AboutPageModule)
      },

      {
        path: 'favorite',
        loadChildren: () => import('../card/card-favorite/card-favorite.module').then(m => m.CardFavoritePageModule)
      },
      {
        path: 'card',
        loadChildren: () => import('../card/card-deck/card-deck.module').then(m => m.CardDeckPageModule)
      },
      {
        path: 'card/:cardId',
        loadChildren: () => import('../card/card-detail/card-detail.module').then(m => m.CardDetailPageModule)
      },
      {
        path: 'card/:cardDeckGroup/:cardDeck',
        loadChildren: () => import('../card/card-list/card-list.module').then(m => m.CardListPageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: 'app/tabs/card',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
