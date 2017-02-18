import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './modal/modal.service';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { CompleteComponent } from './complete/complete.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    ConfirmationComponent,
    CompleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ModalService],
  bootstrap: [AppComponent],
  entryComponents: [
    ConfirmationComponent,
    CompleteComponent
  ]
})
export class AppModule { }
