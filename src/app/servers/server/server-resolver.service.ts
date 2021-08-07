import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { ServersService } from "../servers.service";


interface server {
    id: number, 
    name: string, 
    status: string
}

@Injectable()

export class ServerResolver implements Resolve<server>{
    constructor(private serversService: ServersService){}

    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ): Observable<server> | Promise<server> | server {
        return this.serversService.getServer(+route.params['id']);
      }
}