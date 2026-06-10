import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TD-Form-Task-2-E';

  @ViewChild('empForm') empForm !: NgForm

  constructor(
    private _matSnackBar : MatSnackBar
  ){}
  
  leaveTypes = [
    'Sick Leave',
    'Casual Leave',
    'Earned Leave',
    'Maternity Leave',
    'Paternity Leave',
    'Bereavement Leave',
    'Unpaid Leave',
    'Compensatory Leave',
    'Public Holiday',
    'Study Leave'
  ];

  minToDate: string = '';

  dateError: boolean = false;

  onFromDateChange(form: NgForm) {
  const fDate = form.value.fDate;
  const tDate = form.value.tDate;

  this.minToDate = fDate;

  if (tDate && tDate < fDate) {
    this.dateError = true;
  } else {
    this.dateError = false;
  }
}


onAdd() {
 
  if (this.empForm.invalid) {
    console.log(this.empForm.value);
    
    this.empForm.form.markAllAsTouched()
    return
  }else{
      this.empForm.reset()
       this._matSnackBar.open('Leave Application is applied successfully !!!', 'close',{
      duration : 3000,
      horizontalPosition : 'left',
      verticalPosition : 'top'
    })
    
  }
}
}
