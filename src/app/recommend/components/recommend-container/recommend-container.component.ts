import { HomeService } from '../../../home/services';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { filter, map, switchMap } from 'rxjs/operators';
import { Ads, Product } from 'src/app/shared';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recommend-container',
  templateUrl: './recommend-container.component.html',
  styleUrls: ['./recommend-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecommendContainerComponent implements OnInit {

  products$: Observable<Product[]>;
  ad: Ads;
  constructor(
    private homeService: HomeService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.homeService.getAdsByTab('men').pipe(
      filter(ads => ads.length > 0),
      map(ads => ads[0])
    )
    .subscribe(ad => {
      this.ad = ad;
      console.log(ad,'data')
    })

    this.products$ = this.homeService.getProductsByTab('men');
    this.cd.detectChanges()
  }

}
