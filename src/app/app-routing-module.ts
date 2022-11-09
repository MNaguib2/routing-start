import { NgModule } from '@angular/core';
import { Routes ,RouterModule } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerResolver } from './servers/server/server-resolver.service';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users', component: UsersComponent  },
    { path: 'users/:id/:name', component: UsersComponent },  
    /*  this commit to use another way to define child route
    { path: 'servers/:id', component: ServerComponent },
    { path: 'servers/:id/edit', component: EditServerComponent },
    //*/
    {
      path: 'servers', canActivate: [AuthGuard], component: ServersComponent, children: [
        { path: ':id', component: ServerComponent , resolve: {server: ServerResolver}},
        { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] },
      ]
    },
    //{ path: 'not-found', component: PageNotFoundComponent },
    { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not Found!'} },
    {path: 'test', loadChildren: () => 
    import('./test-route/test-routing').then(m => m.testroute) },
    { path: '**', redirectTo: '/not-found' }
  ]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes  
          /* this code to add # in middle url
          {useHash: true}
          //*/
          )
            ],
      exports: [RouterModule]
})

export class appRoutingModule {}