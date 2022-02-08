import { BudgetItem } from './../../shared/models/budget-item.model';
import { Component, EventEmitter, Input, OnInit , Output } from '@angular/core';

@Component({
  selector: 'app-budget-cart',
  templateUrl: './budget-cart.component.html',
  styleUrls: ['./budget-cart.component.scss']
})
export class BudgetCartComponent implements OnInit {

  @Input() item!: BudgetItem;
  @Output() xButtunClick: EventEmitter<any> = new EventEmitter<any>()
  @Output() cardClick : EventEmitter<any> = new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
  }
  xbutton() {
    this.xButtunClick.emit()
  }
  onClickUp() {
    this.cardClick.emit()
  }

}
