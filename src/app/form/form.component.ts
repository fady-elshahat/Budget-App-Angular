import { BudgetItem } from './../shared/models/budget-item.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() item: BudgetItem = new BudgetItem("", NaN)
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>()
  isNewItem: boolean = false;


  constructor() { }

  ngOnInit(): void {
    if (this.item ) {
      this.isNewItem = true
    } else {
      this.isNewItem = false
      this.item = new BudgetItem('', NaN);
    }

  }
  onSubmit(form: NgForm) {
    this.formSubmit.emit(form.value)
    form.reset()


  }

}
