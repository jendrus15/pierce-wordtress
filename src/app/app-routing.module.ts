import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Routes
import { homePageRoute } from './home-page/home-page.route';
import { errorPageRoute } from './error-page/error-page.route';
import { postressRoute } from './postress/postress.route';

const routes: Routes = [homePageRoute, errorPageRoute, postressRoute];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
