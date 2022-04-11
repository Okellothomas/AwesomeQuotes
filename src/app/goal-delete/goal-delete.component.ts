import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-goal-delete',
  templateUrl: './goal-delete.component.html',
  styleUrls: ['./goal-delete.component.css']
})
export class GoalDeleteComponent implements OnInit {

  @Input() quote!: Quotes;
  @Output() isComplete = new EventEmitter<boolean>();

  goalComplete(complete:boolean){
    this.isComplete.emit(complete);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
