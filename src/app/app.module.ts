import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import {DataTableModule,DialogModule,ButtonModule,InputTextModule} from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DataTableModule,
    DialogModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    HttpModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
