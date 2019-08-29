import {Component, HostBinding, OnInit} from '@angular/core';


import { RouterOutlet } from '@angular/router';
import {JsonData, PicObject, ProductItem, RequestService} from './service/request.service';
import {ClipboardService, IClipboardResponse} from 'ngx-clipboard';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{

  productItemList: PicObject[] = []

  constructor(
    private requestService: RequestService,
    private clipboardService: ClipboardService
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

  copyDetail(str: string) {
    this.clipboardService.copyFromContent(str)
  }
}
