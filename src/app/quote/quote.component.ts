import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    {id:1, quote:'In the fight between you and the world, back the world.', author:'Franz Kafka'},
    {id:2 , quote:'He who has a why to live can bear almost any how.' ,author:'Friedrich Nietzsche' },
    {id:3 , quote:'One day, in retrospect, the years of struggle will strike you as the most beautiful.' ,author:'Sigmund Freud' },
    {id:34 , quote:'Show me a sane man and I will cure him for you.' ,author:'Carl Jung'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
