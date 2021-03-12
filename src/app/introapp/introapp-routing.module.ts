import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroappPage } from './introapp.page';

const routes: Routes = [
  {
    path: '',
    component: IntroappPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroappPageRoutingModule {}
