import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { HomeComponent } from './home/home.component';
import { UserpipPipe } from './pipes/userpip.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    HomeComponent,
    UserpipPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
