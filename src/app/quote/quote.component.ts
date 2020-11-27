import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1, 'In the fight between you and the world, back the world.', 'Franz Kafka',0),
    new Quote(2 , 'He who has a why to live can bear almost any how.' ,'Friedrich Nietzsche',0 ),
    new Quote(3 , 'One day, in retrospect, the years of struggle will strike you as the most beautiful.' ,'Sigmund Freud',0 ),
    new Quote(4 , 'Show me a sane man and I will cure him for you.' ,'Carl Jung',0),
  ];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
