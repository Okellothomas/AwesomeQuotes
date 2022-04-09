import { Quote } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quotes[] = [
    new Quotes(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son','sureone',new Date()),
    new Quotes(2, 'Watch finding Nemo', 'Find an online version and watch merlin find his son','sureone',new Date()),
    new Quotes(3, 'Watch finding Nemo', 'Find an online version and watch merlin find his son','sureone',new Date()),
    new Quotes(4, 'Watch finding Nemo', 'Find an online version and watch merlin find his son','sureone',new Date()),
    new Quotes(5, 'Watch finding Nemo', 'Find an online version and watch merlin find his son','sureone',new Date())
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
