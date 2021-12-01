import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(public translate:TranslateService) {
    translate.addLangs(['en','fr']);
    translate.setDefaultLang('en');
    const browserlang = translate.getBrowserLang();
    translate.use(browserlang.match(/en|fr/) ? browserlang :'en');

  }

  ngOnInit() {
  }

}
