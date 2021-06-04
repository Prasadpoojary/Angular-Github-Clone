import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MessageService } from 'src/app/services/message.service';
declare var $:any;

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  error=null;
  faTimes=faTimes;
  constructor(private messageService:MessageService)
  {}

  ngOnInit(): void {
    this.messageService.receiveMessage().subscribe((message)=>
    {
     this.error=message;
     
    })
  }

  closeMessage()
  {
    this.error=null;
    
  }
  
  
 
 
}
