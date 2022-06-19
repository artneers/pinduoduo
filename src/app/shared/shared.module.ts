import { DialogModule } from './../dialog/dialog.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TagDirective, GridItemDirective, GridItemImageDirective, GridItemTitleDirective, AvatarDirective } from './directives';
import { HorizontalGridComponent, ScrollableTabComponent, ImageSliderComponent, FooterComponent, VerticalGridComponent, ProductCardComponent, ProductTileComponent, BackButtonComponent } from './components';
import { AgoPipe } from './pipes';
import { CountDownComponent } from './components/count-down/count-down.component';

@NgModule({
  declarations: [
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    AgoPipe,
    FooterComponent,
    VerticalGridComponent,
    ProductCardComponent,
    TagDirective,
    AvatarDirective,
    ProductTileComponent,
    BackButtonComponent,
    CountDownComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DialogModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    DialogModule,
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    VerticalGridComponent,
    ProductCardComponent,
    FooterComponent,
    BackButtonComponent,
    CountDownComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    AgoPipe,
    TagDirective,
    AvatarDirective,
    ProductTileComponent
  ]
})
export class SharedModule { }
