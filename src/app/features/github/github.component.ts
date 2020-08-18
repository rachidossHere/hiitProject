import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../shared/services/github.service';
import { UserDTO } from 'src/app/shared/models/user.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  user: UserDTO;
  username: string;
  constructor(private githubService: GithubService, private router: Router) { }

  ngOnInit(): void {
  }
   /**
    * search call service getUser for get user with username passed in param
    */
  search() {
    this.githubService.getUser(this.username).subscribe(user => {
      this.user = user;
    });
  }
  /**
   * nextPage for redirect to /app/nextpage
   */
  nextPage() {
    this.router.navigate(['/app/shorturl']);
  }
}
