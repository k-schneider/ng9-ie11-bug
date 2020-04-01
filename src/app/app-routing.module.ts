import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestPageComponent } from './test-page.component';


const routes: Routes = [
  {
    path: 'test',
    loadChildren: () => import('./test.module').then(m => m.TestModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // TODO: REMOVE THIS TO FIX IT
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
