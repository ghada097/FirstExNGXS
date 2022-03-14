import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import {environment} from '../environments/environment';
import {TodoState} from './store/todo.state';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule. forRoot ([TodoState], { 
      developmentMode : !environment.production 
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
