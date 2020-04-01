import { NgModule } from '@angular/core';
import { TestRoutingModule } from './test-routing.module';
import { TestPageComponent } from './test-page.component';
import { SampleFormModule } from './sample-form.module';

@NgModule({
  imports: [
    TestRoutingModule,
    SampleFormModule,
  ],
  declarations: [TestPageComponent],
  providers: [],
})
export class TestModule { }
