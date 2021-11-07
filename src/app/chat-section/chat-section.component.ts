import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat-section',
  templateUrl: './chat-section.component.html',
  styleUrls: ['./chat-section.component.scss']
})
export class ChatSectionComponent implements OnInit {

  @Input() userName:any;

  user_messages = [
    {
      user_message: 'This is a dummy message',
      user_time: '12:00'
    }
  ];

  friend_messages = [
    {
      friend_message: 'This is a dummy message',
      friend_time: '12:00'
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
