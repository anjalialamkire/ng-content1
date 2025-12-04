import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostCardComponent } from './post-card/post-card.component';
import { TestComponent } from './test/test.component';
import{HttpClientModule} from "@angular/common/http";
import { GetConfirmComponent } from './get-confirm/get-confirm.component';
import { AuthComponent } from './auth/auth.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    PostCardComponent,
    TestComponent,
    GetConfirmComponent,
    AuthComponent,
    TableComponent,
   
  ],
  imports: [
    BrowserModule,
   HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
