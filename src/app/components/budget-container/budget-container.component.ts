import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './budget-container.component.html',
  styleUrls: ['./budget-container.component.sass']
})
export class BudgetContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('landed on start page');
  }

}
