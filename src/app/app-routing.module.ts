import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './components/about/about.component';
import {PortfolioComponent} from './components/portfolio/portfolio.component';
import {BlogComponent} from './components/blog/blog.component';
import {HomeComponent} from './componenets/home/home.component';
import {ContactComponent} from './components/contact/contact.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"About",component:AboutComponent},
  {path:"Portfolio",component:PortfolioComponent},
  {path:"blog",component:BlogComponent},
  {path:"contact",component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
