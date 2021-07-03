import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { HeaderDirective } from './header/header.directive';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    CoreModule,

  ],
  providers: [
   ],
  bootstrap: [AppComponent],

})
export class AppModule { }
