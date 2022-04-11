import { Quote } from '@angular/compiler';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  @Input()quote!: Quotes;
  @Output() isComplete = new EventEmitter<boolean>();

  quotes: Quotes[] = [
    new Quotes(1, 'Okello', 'thomas','sureong ',new Date())
  ];

  deleteQuote(complete:boolean){
    this.isComplete.emit(complete);
  }

  quoteDelete(isComplete: any, index: string | number){
    // if (isComplete) {
    //   let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

    //   if (toDelete){
    //     this.quotes.splice(index,1)
    //   }
    // }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
