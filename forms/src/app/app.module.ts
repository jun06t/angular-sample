import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { ModelComponent } from './model/model.component';
import { Template2Component } from './template-2/template-2.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    ModelComponent,
    Template2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
