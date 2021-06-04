import { Component, OnInit} from '@angular/core';
import { GitService } from 'src/app/services/git.service';
import {Title} from '@angular/platform-browser';
import { MessageService } from 'src/app/services/message.service';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username:string;
  responseData: any;
  constructor(private gitService:GitService,private title:Title,private messageService:MessageService) {this.title.setTitle("GitHub Clone");}

  ngOnInit(): void {
      $('.active').mouseleave();
      $('.active').mouseover();
  }

  search= ()=>
  {
    this.gitService.getGit(this.username).subscribe((respdata)=>
    {
      this.responseData=respdata;
    },
    (err)=>
    {
      this.messageService.sendMessage("Unable to fetch data");
    })
   
  }
}
