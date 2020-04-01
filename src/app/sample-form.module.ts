import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SampleFormComponent } from './sample-form.component';

@NgModule({
  declarations: [SampleFormComponent],
  imports: [ReactiveFormsModule, CommonModule],
  exports: [SampleFormComponent],
  providers: [],
})
export class SampleFormModule {}
