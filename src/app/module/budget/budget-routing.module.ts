import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetContainerComponent } from '../../components/budget-container/budget-container.component';

const routes: Routes = [
  { path: '', redirectTo: 'start' },
  { path: 'start', component: BudgetContainerComponent,
    // children:
    // [
    //   { path: '', redirectTo: '1'},
    //   { path: '1', component: BudgetFormComponent}
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetRoutingModule { }
