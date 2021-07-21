import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { postressRoute } from './postress/postress.route';

const routes: Routes = [postressRoute];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
