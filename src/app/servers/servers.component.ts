import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import  { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService, 
    private router: Router,
    private route : ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }
  onReload(){
    /* I will comment this code to this Just Try how reload page and Igron all problem by use relative
    this.router.navigate(['/servers'],
    //in this here you can configuer in navigate method
    {relativeTo: this.route});
    //*/
  }

}
