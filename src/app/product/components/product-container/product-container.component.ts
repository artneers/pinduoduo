import { DialogService } from './../../../dialog';
import { ProductVariant } from './../../domain';
import { Observable } from 'rxjs/internal/Observable';
import { OrderService } from './../../services';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit, EventEmitter } from '@angular/core';
import { filter, map, switchMap } from 'rxjs/operators';
import { ProductVariantDialogComponent } from '../product-variant-dialog';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css']
})
export class ProductContainerComponent implements OnInit {

  variants: ProductVariant[] = [];
  selectedIndex = 0;
  startDate = new Date(2022,6,4);
  futureDate = new Date(2022,6,5);
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: OrderService,
    private dialogService: DialogService
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      filter(parmas => parmas.has('productId')),
      map(params => params.get('productId')),
      switchMap(productId => this.productService.getProductVariantsByProductId(productId))
    ).subscribe(variants => {
      this.variants = variants;
      console.log(this.variants)
    })
  }

  handleDirectBuy(variants: ProductVariant[]) {}

  handleGroupBuy(variants: ProductVariant[]) {
    const top = 40;
    const formSubmitted = new EventEmitter();
    formSubmitted.subscribe(ev => {
      console.log(ev)
      this.dialogService.setData(ev);
      this.router.navigate(['/order/confirm']);
    })
    const selected = new EventEmitter();
    selected.subscribe(ev => {
      console.log(ev);
      this.selectedIndex = ev;
    })
    this.dialogService.open(ProductVariantDialogComponent, {
      inputs: {
        variants,
        selectedVariantIndex: this.selectedIndex
      },
      outputs: {
        formSubmitted,
        selected
      },
      position: {
        top: `${top}%`,
        left: '0',
        width: '100%',
        height: `${100 - top}%`
      }
    })
  }

}
