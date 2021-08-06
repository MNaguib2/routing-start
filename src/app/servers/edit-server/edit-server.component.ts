import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ServersService } from '../servers.service';
import { canComponentDeactivate } from './can-deactivate-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit , canComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdite = false;
  changeSaved = false;

  constructor(private serversService: ServersService, private route : ActivatedRoute,
      private router: Router) { }

  ngOnInit() {
    //console.log(this.route.snapshot.queryParams); // this code to get all part in url in side 
    //console.log(this.route.snapshot.fragment);
    this.route.queryParams
    .subscribe(
      (queryParams: Params) => {     
        this.allowEdite = queryParams['allowEdite'] === '1' ? true : false;
      }
    )
    this.server = this.serversService.getServer(+this.route.snapshot.params.id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    //console.log(this.route.snapshot.params.id);
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changeSaved = true;
    this.router.navigate(['../'],{relativeTo: this.route, queryParamsHandling: "preserve"});
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean{
    if (!this.allowEdite) {
      return true;
    }
    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) &&
     !this.changeSaved) {
      return confirm('Do you want to discard the changes?');
    } else {
      return true;
    }
  }

}
