import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { ClipboardModule } from "ngx-clipboard";

/** 配置 angular i18n **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import {RequestService} from './service/request.service';
import { AppRoutingModule } from './app-routing.module';
registerLocaleData(zh);

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    ClipboardModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent],
  /** 配置 ng-zorro-antd 国际化（文案 及 日期） **/
  providers   : [
    { provide: NZ_I18N, useValue: zh_CN },
    RequestService
  ]
})
export class AppModule { }
