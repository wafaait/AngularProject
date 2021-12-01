import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public translate:TranslateService) {
    translate.addLangs(['en','fr']);
    translate.setDefaultLang('en');
    const browserlang = translate.getBrowserLang();
    translate.use(browserlang.match(/en|fr/) ? browserlang :'en');

  }
}
