import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';
import { ProductContainerComponent } from './components/product-container/product-container.component';
import { GroupItemComponent } from './components/group-item/group-item.component';
import { GroupShortListComponent } from './components/group-short-list/group-short-list.component';
import { ProductVariantDialogComponent } from './components/product-variant-dialog';
import { ProductAmountComponent } from './components/product-amount/product-amount.component';
import { ConfirmOrderComponent } from './components/confirm-order/confirm-order.component';
import { PaymentComponent } from './components/payment/payment.component';


@NgModule({
  declarations: [ProductContainerComponent, GroupItemComponent, GroupShortListComponent, ProductVariantDialogComponent, ProductAmountComponent, ConfirmOrderComponent, PaymentComponent],
  imports: [
    SharedModule,
    ProductRoutingModule
  ],
  entryComponents: [ProductVariantDialogComponent]
})
export class ProductModule { }
