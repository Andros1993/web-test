import {Component, HostBinding, OnInit} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

import { RouterOutlet } from '@angular/router';
import {JsonData, PicObject, ProductItem, RequestService} from './service/request.service';


// interface ProductItem {
//   picUrl: string;
//   name: string;
//   keyword: string;
//   url: string;
// }

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{

  productItemList: PicObject[] = []

  constructor(
    private requestService: RequestService
  ) {}

  ngOnInit(): void {
    this.requestService.getArticles().subscribe(
      jsonData => {
        this.productItemList = jsonData
        let reg = new RegExp('_', "g")
        this.productItemList.map( item => {
          item.name = item.name
            .replace('.jpg', '')
            .replace('.png', '')
            .replace('.JPG', '')
            .replace('.PNG','')
            .replace(reg, ' ')
        })
      }
    )
  }

  test() {
    console.log("click the card")
  }
}
