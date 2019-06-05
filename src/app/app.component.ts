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
import {RequestService} from './service/request.service';

interface productItem {
  picUrl: string;
  name: string;
  keyword: string;
  url: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent implements OnInit{

  productItemList: productItem [] = []

  constructor(
    private requestService: RequestService
  ) {}

  ngOnInit(): void {
    console.log("开始获取数据")
    this.requestService.getArticles().subscribe(
      test => {
        console.log(test)
      }
    )
  }

}
