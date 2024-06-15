import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  datas:string='12424dfbdfskv'
  title = 'angular_2';
  searchText:string='';
  childvariable:string=''
getChildData(item:string){
this.childvariable=item;
}
  data=[
    {id:1,name:'Satish'},
    {id:2,name:'Ankit'},
    {id:3,name:'Vishal'},
    {id:4,name:'Amol'},
    {id:5,name:'Ruturaj'},
    {id:6,name:'Purna'},
    {id:7,name:'Yogesh'},
    {id:8,name:'Jayesh'}
  ]
}
