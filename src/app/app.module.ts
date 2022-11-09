import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { appRoutingModule } from './app-routing-module';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/server-resolver.service';
import { TestRouteComponent } from './test-route/test-route.component';
import { testroute } from './test-route/test-routing';

// const appRoutes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'users', component: UsersComponent },
//   { path: 'users/:id/:name', component: UsersComponent },  
//   /*  this commit to use another way to define child route
//   { path: 'servers/:id', component: ServerComponent },
//   { path: 'servers/:id/edit', component: EditServerComponent },
//   //*/
//   {
//     path: 'servers', component: ServersComponent, children: [
//       { path: ':id', component: ServerComponent },
//       { path: ':id/edit', component: EditServerComponent },
//     ]
//   },
//   { path: 'not-found', component: PageNotFoundComponent },
//   { path: '**', redirectTo: '/not-found' }
// ]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent,
    ErrorPageComponent,
    TestRouteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    appRoutingModule,
    testroute
    //RouterModule.forRoot(appRoutes) // this code cancel to work instead of outsource file
  ],
  providers: [ServersService, AuthGuard, AuthService, CanDeactivateGuard, ServerResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
