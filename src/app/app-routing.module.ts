import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DeveloperComponent } from './developer/developer.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LprComponent } from './lpr/lpr.component';
import { ObserverComponent } from './observer/observer.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AuthGuard } from './_auth/auth.guard';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'login', component:LoginComponent}, 
  {path: 'admin', component:AdminComponent, canActivate:[AuthGuard], data:{roles:['Admin']}},
  {path: 'developer', component:DeveloperComponent, canActivate:[AuthGuard], data:{roles:['Admin']}},
  {path: 'observer', component:ObserverComponent, canActivate:[AuthGuard], data:{roles:['User']}},
  {path: 'forbidden', component:ForbiddenComponent},
  {path: 'vehicle', component:VehicleComponent, canActivate:[AuthGuard], data:{roles:['Admin']}},
  {path: 'lpr', component:LprComponent, canActivate:[AuthGuard], data:{roles:['Admin']}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
