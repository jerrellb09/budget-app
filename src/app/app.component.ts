import { Component } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AddRecordComponent } from './components/add-record/add-record.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'budget-app';

  constructor(private router: Router, private route: ActivatedRoute, private dialog: MatDialog) {}

  goToBudget() {
    this.router.navigate(['budget'], {relativeTo: this.route})
  }

  addRecord() {
    this.dialog.open(AddRecordComponent)
  }
}
