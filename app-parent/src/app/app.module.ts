import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {APP_BASE_HREF} from '@angular/common';
import {EmptyRouteComponent} from './empty-route/empty-route.component';
import { ParentPageOneComponent } from './parent-page-one/parent-page-one.component';
import { ParentPageTwoComponent } from './parent-page-two/parent-page-two.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    ParentPageOneComponent,
    ParentPageTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
