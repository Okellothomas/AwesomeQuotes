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
    new Quotes(1, '', '','',new Date())
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
