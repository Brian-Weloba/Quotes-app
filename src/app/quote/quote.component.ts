import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'In the fight between you and the world, back the world.', 'Franz Kafka', 0, 'Solomon'),
    new Quote(2, 'He who has a why to live can bear almost any how.', 'Friedrich Nietzsche', 0, 'Cindy'),
    new Quote(3, 'One day, in retrospect, the years of struggle will strike you as the most beautiful.', 'Sigmund Freud', 0, 'Stew'),
    new Quote(4, 'Show me a sane man and I will cure him for you.', 'Carl Jung', 0, 'Denzel'),
  ];

  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  quoteDelete(removeQuote, index) {
    if (removeQuote) {
      let toDelete = confirm('Are you sure you want to delete this quote?')

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.vote = 0;
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
