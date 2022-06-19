import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MyRoutingModule } from './my-routing.module';
import { MyContainerComponent } from './components/my-container/my-container.component';


@NgModule({
  declarations: [MyContainerComponent],
  imports: [
    SharedModule,
    MyRoutingModule
  ]
})
export class MyModule { }
