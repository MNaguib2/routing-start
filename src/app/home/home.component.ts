import { Component, OnInit } from '@angular/core';
import  { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private AuthService: AuthService) { }

  ngOnInit() {
  }
  onLoadServers(){
    this.router.navigate(['/servers']);
  }
  onLoadServer(id: number){
    this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: '1'} , 
    fragment: 'Loading'});
    //this code to direct url with define all part in url on side
  }
  onLogOut(){
    this.AuthService.logout();
  }
  onLogIn(){  
    this.AuthService.login();
  }
}
