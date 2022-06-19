import { DialogService } from './../../../dialog';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductVariant } from '../../domain';

@Component({
  selector: 'app-product-variant-dialog',
  templateUrl: './product-variant-dialog.component.html',
  styleUrls: ['./product-variant-dialog.component.css']
})
export class ProductVariantDialogComponent implements OnInit {

  @Input() variants: ProductVariant[] = [];
  @Input() selectedVariantIndex = 0;
  @Output() formSubmitted = new EventEmitter();
  @Output() selected = new EventEmitter();

  count = 0;
  constructor(
    private dialogService: DialogService
  ) { }

  ngOnInit() {
  }

  get price() {
    if (this.selectedVariantIndex > 0 || this.variants.length === 0) return 0;
    return this.variants[this.selectedVariantIndex].price;
  }

  get selectedVariantImage() {
    if (this.selectedVariantIndex > 0 || this.variants.length === 0) return '';
    return this.variants[this.selectedVariantIndex].productVariantImages[0].imgUrl;
  }

  get selectedVariantName () {
    if (this.selectedVariantIndex > 0 || this.variants.length === 0) return '';
    return this.variants[this.selectedVariantIndex].name;
  }

  handleSelection(idx) {
    this.selectedVariantIndex = idx;
    this.selected.emit(this.selectedVariantIndex);
  }

  handleAmountChange(count: number) {
    this.count = count;
  }

  handleConfirm() {
    if (this.selectedVariantIndex > 0 || this.variants.length === 0) return;
    this.formSubmitted.emit({
      variant: this.variants[this.selectedVariantIndex],
      count: this.count
    })
    this.dialogService.close()
  }

}
