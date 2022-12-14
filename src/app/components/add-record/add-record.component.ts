import { ChangeDetectionStrategy, Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddRecordComponent implements OnInit {
  onAdd = new EventEmitter<FormGroup>()

  form = this.fb.group({
    name: ['same'],
    cost: [0, [ Validators.min(.01), Validators.required]]
  })

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<AddRecordComponent>) { }

  ngOnInit(): void {

  }

  onSubmit() {
    this.onAdd.emit(this.form);
    this.dialogRef.close();
    console.log(this.form.value);
  }

}
