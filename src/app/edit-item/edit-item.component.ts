import { Component, Inject, OnInit } from '@angular/core';
import { BudgetItem } from '../shared/models/budget-item.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditItemComponent>,
    @Inject(MAT_DIALOG_DATA) public item: BudgetItem) { }

  ngOnInit(): void {
  }
  onSubmited(updatedItem: BudgetItem) {
    this.dialogRef.close(updatedItem);
  }

}
