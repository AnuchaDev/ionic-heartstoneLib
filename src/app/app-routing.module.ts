import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'card-deck',
    loadChildren: () => import('./card/card-deck/card-deck.module').then( m => m.CardDeckPageModule)
  },
  {
    path: 'card-deck',
    loadChildren: () => import('./card/card-deck/card-deck.module').then( m => m.CardDeckPageModule)
  },
  {
    path: 'shared',
    loadChildren: () => import('./card/shared/shared.module').then( m => m.SharedPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
