import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { PCircleDifficultyListFormComponent } from './components/p-circle-difficulty-list-form/p-circle-difficulty-list-form.component';
import { PSRanDifficultyListFormComponent } from './components/p-s-ran-difficulty-list-form/p-s-ran-difficulty-list-form.component';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'p-circle', component: PCircleDifficultyListFormComponent, pathMatch: 'full' },
  { path: 's-ran', component: PSRanDifficultyListFormComponent, pathMatch: 'full' },
  { path: '', redirectTo: 'p-circle', pathMatch: 'prefix' },
  { path: '**', component: PageNotFoundComponent }, // 404ページ
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
