import { Ads } from './../../../shared/domain/index';
import { Observable } from 'rxjs';
import { ImageSlider, ImageSliderComponent } from '../../../shared/components';
import { HomeService } from './../../services/home.service';
import { ActivatedRoute, Route } from '@angular/router';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Channel } from 'src/app/shared/components';
import { Product } from 'src/app/shared/domain';
import { filter, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {
  selectedTabLink$: Observable<string>;
  channels$:  Observable<Channel[]>;
  imageSliders$: Observable<ImageSlider[]>;
  products$: Observable<Product[]>;
  ad: Ads;
  @ViewChild('imageSlider', {static: true}) imgSlider: ImageSliderComponent;
  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService,
    private cd: ChangeDetectorRef
  ) { }
  ngOnInit() {
    this.selectedTabLink$ = this.route.paramMap.pipe(
      filter(params => params.has('tabLink')),
      map(params => params.get('tabLink'))
    )
    this.imageSliders$ = this.homeService.getBanners();
    this.channels$ = this.homeService.getChannels();
    this.selectedTabLink$.pipe(
      switchMap(tab => this.homeService.getAdsByTab(tab)),
      filter(ads => ads.length > 0),
      map(ads => ads[0])
    )
    .subscribe(ad => {
      this.ad = ad;
    })
    this.products$ = this.selectedTabLink$.pipe(
      switchMap((tab: string) => this.homeService.getProductsByTab(tab))
    )
  }

}
