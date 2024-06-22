import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCalculatorComponent } from './calculator/component/my-calculator.component';
import { MyEmptyPage } from './components/empty-route.component/empty-route.component';

const routes: Routes = [
  {
    path: 'calculator',
    component: MyCalculatorComponent,
  },
  {
    path: '', redirectTo: 'calculator', pathMatch: 'full'
  },
  {
    path: 'object-list',
    loadChildren: () => import('./object-list/object-list.module').then((m) => m.MyObjectListModule)
  },
  {
    path: '**',
    component: MyEmptyPage,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
