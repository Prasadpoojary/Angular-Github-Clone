import { Component,Input,OnInit,OnChanges,ChangeDetectorRef } from '@angular/core';
import { GitService } from 'src/app/services/git.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit,OnChanges {

  @Input() repoUrl:string;

  repos:any[];
  constructor(private gitService:GitService,private ref:ChangeDetectorRef) { }

  ngOnInit(): void {
    
  }

  ngOnChanges(): void {
    this.gitService.getRepo(this.repoUrl).subscribe((repos:[])=>
    {
        this.repos=repos;
        this.ref.detectChanges();
    },
    (err)=>
    {
      console.log("Can not fetching repos")
      this.ref.detectChanges();
    })
  }



}
