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
    new Quotes(1, 'Sam Osee', 'Abraham Lincoln','Enrich yourself with other mens writings.',new Date(2022,1,1)) //new Date(2022,3,4)
  ];

  addNewQuote(quote: any){
    let goalLength = this.quotes.length;
    quote.id = goalLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  goalComplete(complete:boolean){
    this.isComplete.emit(complete)
  }

  toggleDetails(index: any){
    this.quotes[index].showQuotes = !this.quotes[index].showQuotes;
  }

  completeGoal(isComplete: any, index: any){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }

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
