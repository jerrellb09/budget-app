import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PaymentFrequency } from '../../enum/paymentFrequencyEnum';
import { BudgetItem } from '../../models/budgetItem';

const BUDGET_DATA: BudgetItem[] = [
  {paidTo: 'T-Mobile', amount: 140.00, paymentFrequency: PaymentFrequency.AUTO, dayDue: 26, bankingInstitution: 'Chase'},
  {paidTo: 'Bank Of America', amount: 550.00, paymentFrequency: PaymentFrequency.AUTO, dayDue: 26, bankingInstitution: 'Chase'},
  {paidTo: 'Chase Balance Transfer', amount: 250.00, paymentFrequency: PaymentFrequency.AUTO, dayDue: 26, bankingInstitution: 'Chase'},
  {paidTo: 'Wells Fargo', amount: 250.00, paymentFrequency: PaymentFrequency.AUTO, dayDue: 26, bankingInstitution: 'Chase'},
  {paidTo: 'Care Credit', amount: 140.00, paymentFrequency: PaymentFrequency.AUTO, dayDue: 26, bankingInstitution: 'Chase'},
  {paidTo: 'Amex', amount: 140.00, paymentFrequency: PaymentFrequency.AUTO, dayDue: 26, bankingInstitution: 'Chase'},
  {paidTo: 'Macys', amount: 140.00, paymentFrequency: PaymentFrequency.AUTO, dayDue: 26, bankingInstitution: 'Chase'},
  {paidTo: 'Geico Car Insurance', amount: 198.00, paymentFrequency: PaymentFrequency.AUTO, dayDue: 26, bankingInstitution: 'Chase'},
  {paidTo: 'Comcast', amount: 200.00, paymentFrequency: PaymentFrequency.AUTO, dayDue: 26, bankingInstitution: 'Chase'},
  {paidTo: 'Mortgage', amount: 1132.00, paymentFrequency: PaymentFrequency.AUTO, dayDue: 26, bankingInstitution: 'Chase'},
  {paidTo: 'Gas', amount: 135.00, paymentFrequency: PaymentFrequency.AUTO, dayDue: 26, bankingInstitution: 'Chase'},
  {paidTo: 'Netflix', amount: 15.00, paymentFrequency: PaymentFrequency.AUTO, dayDue: 26, bankingInstitution: 'Chase'},
  {paidTo: 'Wing Chun', amount: 160.00, paymentFrequency: PaymentFrequency.AUTO, dayDue: 26, bankingInstitution: 'Chase'},
  {paidTo: 'ADT', amount: 60.00, paymentFrequency: PaymentFrequency.AUTO, dayDue: 26, bankingInstitution: 'Chase'},
  {paidTo: 'HOA', amount: 425.00, paymentFrequency: PaymentFrequency.AUTO, dayDue: 26, bankingInstitution: 'Chase'},
  {paidTo: 'YouFit', amount: 28.00, paymentFrequency: PaymentFrequency.AUTO, dayDue: 26, bankingInstitution: 'Chase'},
  {paidTo: 'Parking', amount: 0.00, paymentFrequency: PaymentFrequency.AUTO, dayDue: 26, bankingInstitution: 'Chase'},
  {paidTo: 'Spotify', amount: 14.00, paymentFrequency: PaymentFrequency.AUTO, dayDue: 26, bankingInstitution: 'Chase'},
  {paidTo: 'Disney Plus', amount: 10.00, paymentFrequency: PaymentFrequency.AUTO, dayDue: 26, bankingInstitution: 'Chase'},

]


@Component({
  selector: 'app-budget-form',
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.sass'],
})
export class BudgetFormComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['paidTo', 'amount', 'paymentFrequency', 'dateDue', 'bankingInstitution']
  dataSource = new MatTableDataSource(BUDGET_DATA);

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatSort)
  sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
  }

    /** Announce the change in sort state for assistive technology. */
    announceSortChange(sortState: Sort) {
      // This example uses English messages. If your application supports
      // multiple language, you would internationalize these strings.
      // Furthermore, you can customize the message to add additional
      // details about the values being sorted.
      if (sortState.direction) {
        this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
      } else {
        this._liveAnnouncer.announce('Sorting cleared');
      }
    }

}
