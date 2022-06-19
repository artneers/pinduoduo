import { Ads, Product } from './../../shared/domain/index';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Channel, ImageSlider, TopMenu } from 'src/app/shared/components';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getBanners() {
    return this.http.get<ImageSlider[]>(`${environment.baseUrl}/banners`)
  }

  getChannels() {
    return this.http.get<Channel[]>(`${environment.baseUrl}/channels`)
  }

  getTabs() {
    return this.http.get<TopMenu[]>(`${environment.baseUrl}/tabs`)
  }

  getAdsByTab(tab: string) {
    return this.http.get<Ads[]>(`${environment.baseUrl}/ads`, {
      params: { categories_like: tab }
    })
  }

  getProductsByTab(tab: string) {
    return this.http.get<Product[]>(`${environment.baseUrl}/products`, {
      params: { categories_like: tab }
    })
  }
}
