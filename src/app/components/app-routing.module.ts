import { HomeComponent } from './home/home.component';
import { PopularDomainsComponent } from './popular-domains/popular-domains.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';


const routes: Routes = [
  {
    path: 'popular-domains',
    component: PopularDomainsComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
