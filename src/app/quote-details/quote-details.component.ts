import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  quotes: Quotes[] = [
    new Quotes(1, 'Sam Osee', 'Abraham Lincoln','Enrich yourself with other mens writings.',new Date(2022,3,4))
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
