import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmptyRouteComponent} from './empty-route/empty-route.component';
import {PageChildComponent} from './page-child/page-child.component';
import {LeaveGuardGuard} from './leave-guard.guard';


const routes: Routes = [
  { path: 'page-child', component: PageChildComponent, canDeactivate: [LeaveGuardGuard]},
  { path: '**', component: EmptyRouteComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
