import { Component, OnInit } from '@angular/core';
import  { ActivatedRoute, Router } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit{
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
     private route : ActivatedRoute,
     private router : Router) {
      this.route.params.subscribe(data => {
        //console.log(data.id);     
        this.server = this.serversService.getServer(+data.id); 
        //console.log(this.server);
      })
      }

  ngOnInit() {    
    
  }
  OnEdit(){
    this.router.navigate(['edit'], {relativeTo: this.route , queryParamsHandling: 'preserve'});
    /*
    queryParamsHandling this content two option first volitional merge mean keep old queryParams As shown old 
    queryParams inherentance to new url
    but another gherkin means inherantence old queryParams and additional to new queryParams
    */
  }

}
