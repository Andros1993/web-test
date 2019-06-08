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
import {JsonData, ProductItem, RequestService} from './service/request.service';

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

  productItemList: ProductItem[] = []

  constructor(
    private requestService: RequestService
  ) {}

  ngOnInit(): void {
    console.log("开始获取数据")
    this.requestService.getArticles().subscribe(
      jsonData => {
        console.log(jsonData)
        this.productItemList = jsonData.items
        console.log(this.productItemList)
      }
    )
  }

  test() {
    console.log("click the card")
  }
}
