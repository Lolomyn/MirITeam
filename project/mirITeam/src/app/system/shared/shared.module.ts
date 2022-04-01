import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './component/footer/footer.component';



@NgModule({
  declarations: [
  ],
  imports: [ReactiveFormsModule, FormsModule],
  exports: [ReactiveFormsModule, FormsModule]
})
export class SharedModule { }
