import { Component, Input, OnInit} from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  readMore: boolean=false;
  
  @Input()val:number | any;
  changed: any;
  likes: number=0;
  dis:number =0;
  
  bless:Quote[]=[
    new Quote("katana", "auter", new Date (), "ifaetrxdfguhijo lkd fyghkjhk;l")
  ];



  loga(event:any){
    this.bless.push(event);
  };

  inc(){
  this.likes ++
  }
  dec(){
    this.dis ++
  }

  onClick(){
    alert('are you sure you want to delete!')
  };

  toggleReadMore(){
  this.readMore=!this.readMore
  };
  
  constructor() {
  };

  ngOnInit(){
  }

}
