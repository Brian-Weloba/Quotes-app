import { Quote } from './../quote';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-author',
  templateUrl: './quote-author.component.html',
  styleUrls: ['./quote-author.component.css']
})
export class QuoteAuthorComponent implements OnInit {

  @Input() quote:Quote;

  constructor() { }

  ngOnInit(): void {
  }

}