import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote:Quote[]=[
    {id:1, name:'caro'},
    {id:2, name:'juma'}

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
