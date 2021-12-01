import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componenets/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { FooterComponent } from './components/footer/footer.component';
import {TranslateModule,TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClientModule,HttpClient} from '@angular/common/http';

export function  HttploaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    PortfolioComponent,
    FeedbackComponent,
    FooterComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide :TranslateLoader,
        useFactory :HttploaderFactory ,
        deps :[HttpClient],
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


