import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  // @Input() charlo:any;
  @Output() kelly= new EventEmitter();
  showForm: boolean=false;

  submit(me:any, ga:NgForm){
    if(me.name=="" || me.title=="" || me.quote==""){
      alert("fill the form to proceed" )
    }else{
      this.kelly.emit(me);
      ga.reset()
      this.showForm=false;
    }
  };



  toggleForm(){
  this.showForm=!this.showForm
  };

  constructor() { }

  ngOnInit(): void {
  }

}
