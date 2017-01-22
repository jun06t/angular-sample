import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { Template2Component } from './template-2/template-2.component';
import { Template3Component } from './template-3/template-3.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    Template2Component,
    Template3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
