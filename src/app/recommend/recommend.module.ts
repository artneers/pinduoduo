import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RecommendRoutingModule } from './recommend-routing.module';
import { RecommendContainerComponent } from './components/recommend-container/recommend-container.component';


@NgModule({
  declarations: [RecommendContainerComponent],
  imports: [
    SharedModule,
    RecommendRoutingModule
  ]
})
export class RecommendModule { }
