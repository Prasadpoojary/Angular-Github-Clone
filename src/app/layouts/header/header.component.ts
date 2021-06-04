import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faClone } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  email:string=null;
  faClone=faClone;
  constructor(private auth:AuthService, private router:Router) { 
    
  }

  ngOnInit(): void {
    this.auth.getUser().subscribe((user)=>
    {
        this.email=user?.email;
    },
    (err)=>
    {
      console.log("Something happends bad in GetUser");
    });

  }

   handleLogout=async ()=>
  {
    try{
      const res =await this.auth.logout();
      this.router.navigateByUrl('/login')
      this.email=null;
    }
    catch
    {
      console.log("can not logout");
    }
  
  }

}
