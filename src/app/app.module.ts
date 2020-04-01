import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SampleFormComponent } from './sample-form.component';
import { AppRoutingModule } from './app-routing.module';
import { SampleFormModule } from './sample-form.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SampleFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
