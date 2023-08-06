import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetFormComponent } from '../../components/budget-form/budget-form.component';

const routes: Routes = [
  { path: '', component: BudgetFormComponent},
  //{ path: 'start', component: BudgetFormComponent,
    // children:
    // [
    //   { path: '', redirectTo: '1'},
    //   { path: '1', component: BudgetFormComponent}
    // ]
  //}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetRoutingModule { }
