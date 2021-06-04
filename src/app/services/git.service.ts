import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GitService {

  constructor(private http:HttpClient) { }

  getGit=(username)=>
  {
    return this.http.get(`https://api.github.com/users/${username}`);
  }

  getRepo=(repo)=>
  {
    return this.http.get(repo);
  }

}
