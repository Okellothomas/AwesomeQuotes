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
  quotes: any;

  goalComplete(complete:boolean){
    this.isComplete.emit(complete);
  }

  // goalComplete(isComplete: any, index: any){
  //   if (isComplete) {
  //     let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

  //     if (toDelete){
  //       this.quotes.splice(index,1)
  //     }
  //   }
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
