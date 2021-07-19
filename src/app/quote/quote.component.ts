import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  @Input() charlo:any;
  @Output() kelly= new EventEmitter();
  showForm: boolean=false;


  
  submit(me:any){
    this.kelly.emit(me);
  };

  toggleForm(){
  this.showForm=!this.showForm
  };

  constructor() { }

  ngOnInit(): void {
  }

}
