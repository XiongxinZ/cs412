import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TableComponent } from './table/table.component';
import { CallingHttpComponent } from './calling-http/calling-http.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TableComponent,
    CallingHttpComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
