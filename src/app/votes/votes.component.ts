import { Quote } from './../quote';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {


  @Input() quote:Quote;

  constructor() { }

  ngOnInit(): void {
  }

}
