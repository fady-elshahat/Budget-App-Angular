import { EditItemComponent } from './../edit-item/edit-item.component';
import { BudgetItem } from './../shared/models/budget-item.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.scss']
})
export class BudgetListComponent implements OnInit {

  @Input() budgetItems: BudgetItem[] = [];
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>()
  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  onDelete(item:BudgetItem) {
    this.delete.emit(item);
  }
  onClikeUpdate(updateItem: BudgetItem) {
    let dialogRef = this.dialog.open(EditItemComponent, {
      width: '600px',
      data: updateItem
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.update.emit({
          old: updateItem,
          new: result
        });
      }
    })
  }
}
export interface UpdateEvent {
  old: BudgetItem;
  new: BudgetItem;
}
