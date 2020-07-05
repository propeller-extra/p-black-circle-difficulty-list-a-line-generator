import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';


const modules = [
  MatListModule,
  MatInputModule,
  MatFormFieldModule,
  ClipboardModule,
  MatRadioModule,
  MatCardModule,
];

@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class MaterialModule {}
