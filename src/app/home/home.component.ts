import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
@Input() item:any
@Output() updateEventEmiter=new EventEmitter<string>()
myVariable:any
color:any='Blue';
count:number=0;
toggle_menu:any;
todoList:any[]=[];
Dataarray:any=[
  {name:'Satish',phone:'459345',social:['A','B','C']},
  {name:'Ajikya',phone:'52345543',social:['X','Y','Z']},
  {name:'Aptech',phone:'25435345',social:['K','L','M']}
]
toggle(){
  this.toggle_menu=!this.toggle_menu
}

getTododata(item:any){
  this.todoList.push({id:this.todoList.length,name:item})
}


  constructor() { }

  ngOnInit(): void {
  }
  getCount(type:string){
    if(type=='add'){
      this.count++
    }
    else{
      this.count--
    }
  }
  eventFun(item:any){
    this.myVariable=item
    console.log("event fired");
  }

}
