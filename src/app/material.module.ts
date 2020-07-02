import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [MatListModule, MatInputModule],
  exports: [MatListModule, MatInputModule],
})
export class MaterialModule {}
