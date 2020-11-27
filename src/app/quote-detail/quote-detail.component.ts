import { Quote } from '../quote';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote:Quote;
  @Output() removeQuote = new EventEmitter<boolean>();

  deleteQuote(remove:boolean){
    this.removeQuote.emit(remove);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
