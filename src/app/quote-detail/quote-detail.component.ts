import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  readMore: boolean=false;

  toggleReadMore(){
  this.readMore=!this.readMore
  };

  constructor() { }

  ngOnInit(): void {
  }

}
