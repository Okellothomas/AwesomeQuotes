import { Component, Input, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote!: Quotes;
  votes: any;

  quotes: Quotes[] = [
    new Quotes(1, 'Sam Osee', 'Abraham Lincoln','Enrich yourself with other mens writings.',new Date(2022,3,4))
  ];

  constructor() {
    this.votes = this.votes || 0;
  }

  voteUp(): boolean {
    this.votes += 1;
    return false;
  }
  voteDown(): boolean {
    this.votes -= 1;
    return false;
  }
  

  ngOnInit(): void {
  }

}
