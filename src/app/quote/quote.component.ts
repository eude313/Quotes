import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  // @Input() charlo:any;
  @Output() kelly= new EventEmitter();
  showForm: boolean=false;

  clearForm(form: FormGroup) {
    form.reset();
  }
  
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
