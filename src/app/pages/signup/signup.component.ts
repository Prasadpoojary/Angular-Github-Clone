import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import {Title} from '@angular/platform-browser';
import { MessageService } from 'src/app/services/message.service';

declare var $: any;
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private authService:AuthService,
    private router:Router,
    private title:Title,
    private messageService:MessageService) {this.title.setTitle("Sign Up | Github Clone"); }

  ngOnInit(): void {
   
      $('.active').mouseleave();
      $('.active').mouseover();
  
  }

  handleSignUp=(f:NgForm)=>
  {
    $('.btn-load').html("<div></div><div></div><div></div>");
    $('.btn-load').addClass('btn-load-anim');
    const {username,password}=f.form.value;
    this.authService.signup(username,password)
    .then((res)=>this.router.navigateByUrl(''))
    .catch((err)=>{
      this.messageService.sendMessage(err.message);
      $('.btn-load').html("Sign Up");
    });
  }


}
