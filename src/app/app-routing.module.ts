import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { ALineGeneratorFormComponent } from './components/a-line-generator-form/a-line-generator-form.component';

const routes: Routes = [
  { path: 'index', component: ALineGeneratorFormComponent },
  { path: '', redirectTo: '/index', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
