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
import {ProductItem, RequestService} from './service/request.service';

// interface ProductItem {
//   picUrl: string;
//   name: string;
//   keyword: string;
//   url: string;
// }

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent implements OnInit{

  productItemList = []
  testitem: ProductItem

  constructor(
    private requestService: RequestService
  ) {}

  ngOnInit(): void {
    console.log("开始获取数据")
    this.requestService.getArticles().subscribe(
      items => {
        console.log(items)
        this.productItemList = items
        this.testitem = items[0]
      }
    )
  }

}
