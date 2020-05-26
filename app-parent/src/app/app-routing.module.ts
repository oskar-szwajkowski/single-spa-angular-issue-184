import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmptyRouteComponent} from './empty-route/empty-route.component';
import {ParentPageOneComponent} from './parent-page-one/parent-page-one.component';
import {ParentPageTwoComponent} from './parent-page-two/parent-page-two.component';
import {LeaveGuardGuard} from './leave-guard.guard';


const routes: Routes = [
  { path: 'parent-1', component: ParentPageOneComponent, canDeactivate: [LeaveGuardGuard]},
  { path: 'parent-2', component: ParentPageTwoComponent, canDeactivate: [LeaveGuardGuard]},
  { path: '**', component: EmptyRouteComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
