import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

const OriginalChatList = [{
  id: 1,
  name: 'Abc',
  time: '12:30',
  message: 'This is dummy text'
},
{
  id: 2,
  name: 'Def',
  time: '12:30',
  message: 'This is dummy text'
},
{
  id: 3,
  name: 'Ghi',
  time: '12:30',
  message: 'This is dummy text'
},
{
  id: 4,
  name: 'Jkl',
  time: '12:30',
  message: 'This is dummy text'
},
{
  id: 5,
  name: 'Mno',
  time: '12:30',
  message: 'This is dummy text'
},
{
  id: 6,
  name: 'Pqr',
  time: '12:30',
  message: 'This is dummy text'
},
{
  id: 7,
  name: 'Stu',
  time: '12:30',
  message: 'This is dummy text'
},
{
  id: 8,
  name: 'Vwx',
  time: '12:30',
  message: 'This is dummy text'
},
{
  id: 9,
  name: 'Yzz',
  time: '12:30',
  message: 'This is dummy text'
},
{
  id: 10,
  name: 'Jkl',
  time: '12:30',
  message: 'This is dummy text'
},
{
  id: 11,
  name: 'Jkl',
  time: '12:30',
  message: 'This is dummy text'
},
{
  id: 12,
  name: 'Jkl',
  time: '12:30',
  message: 'This is dummy text'
},
{
  id: 13,
  name: 'Jkl',
  time: '12:30',
  message: 'This is dummy text'
},
{
  id: 14,
  name: 'Jkl',
  time: '12:30',
  message: 'This is dummy text'
},
];

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  chats_list= OriginalChatList;

@Output() getName:EventEmitter<any> = new EventEmitter();

getClicked(name: any){
  this.getName.emit(name);
  // console.log(name);
}

  constructor() { 
  }

  firstName: any;

  search(){
    if (this.firstName == "") {
      this.chats_list = OriginalChatList;
      
    }
    else{
      this.chats_list = this.chats_list.filter(e => {
        return e.name.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
      });
    }
  }

  ngOnInit(): void {
    
  }

}
