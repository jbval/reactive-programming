import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsOperatorsComponent } from './rxjs-operators/rxjs-operators.component';
import { RxjsServicesComponent } from './rxjs-services/rxjs-services.component';

@NgModule({
  declarations: [AppComponent, RxjsOperatorsComponent, RxjsServicesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  // providers: [HttpClient],
  bootstrap: [AppComponent],
  entryComponents: [RxjsOperatorsComponent, AppComponent],
  exports: [RxjsServicesComponent],
})
export class AppModule {}
