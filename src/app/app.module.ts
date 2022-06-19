import { ParamInterceptor } from './home/interceptors/param.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product';
import { ChatModule } from './chat/chat.module';
import { MyModule } from './my/my.module';
import { RecommendModule } from './recommend/recommend.module';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule, NotificationInterceptor } from './home';
import localZh from '@angular/common/locales/zh-Hans';
import { registerLocaleData } from '@angular/common';
import { DialogModule } from './dialog';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    RecommendModule,
    MyModule,
    ChatModule,
    CategoryModule,
    HttpClientModule,
    ProductModule,
    DialogModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'zh-Hans'
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ParamInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NotificationInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(localZh, 'zh');
  }
}
