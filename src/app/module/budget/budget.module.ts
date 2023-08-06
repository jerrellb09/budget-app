import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BudgetContainerComponent } from '../../components/budget-container/budget-container.component';
import { BudgetFormComponent } from '../../components/budget-form/budget-form.component';
import { BudgetRoutingModule } from './budget-routing.module';
import { BudgetComponent } from './budget.component';



@NgModule({
  declarations: [
    BudgetComponent,
    BudgetFormComponent,
    BudgetContainerComponent
  ],
  imports: [
    CommonModule,
    BudgetRoutingModule,
    MatTableModule,
    MatSortModule
  ]
})
export class BudgetModule { }
