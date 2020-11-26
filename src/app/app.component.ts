import { Quote } from './quote';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[] = [
    {id:1, quote:'In the fight between you and the world, back the world.', author:'Franz Kafka'},
    {id:2 , quote:'He who has a why to live can bear almost any how.' ,author:'Friedrich Nietzsche' },
    {id:3 , quote:'One day, in retrospect, the years of struggle will strike you as the most beautiful.' ,author:'Sigmund Freud' },
    {id:34 , quote:'Show me a sane man and I will cure him for you.' ,author:'Carl Jung'},
  ]
}
