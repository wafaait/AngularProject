import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public translate:TranslateService) {
    translate.addLangs(['en','fr']);
    translate.setDefaultLang('en');
    const browserlang = translate.getBrowserLang();
    translate.use(browserlang.match(/en|fr/) ? browserlang :'en');

  }

  ngOnInit() {
  }

}
