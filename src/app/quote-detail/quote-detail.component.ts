import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  readMore: boolean=false;
  @Output() isRed = new EventEmitter<boolean>();
  @Input()val:number | any;
  changed: any;
  likes: number=0;
  dis:number =0;
  // isRead: any;

  deleteQuote(red: boolean | true){
    confirm("you want to delete")
    this.isRed.emit(red);
    
  };
  
  bless:Quote[]=[
    new Quote("Carbon", "Be comfortable", new Date ( 2000,11,23), "“Write it. Shoot it. Publish it. Crochet it, sauté it, whatever. MAKE.” ")
  ];

  // delQuote(index:number):void{
  //   this.splice(index)
  // }
  // splice(index: number) {
  //   throw new Error('Method not implemented.');
  // }

  loga(event:any){
    this.bless.push(event);
  };

  inc(i:number){
  this.likes ++
  }
  dec(){
    this.dis ++
  }

  toggleReadMore(){
  this.readMore=!this.readMore
  };
  
  constructor() {
  };

  ngOnInit(){
  }

}
