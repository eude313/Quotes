import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
 
  showForm: boolean=false;

  toggleForm(){
  this.showForm=!this.showForm
  };
  constructor() { }

  ngOnInit(): void {
  }

}
