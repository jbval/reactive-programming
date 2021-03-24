import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsOperatorsComponent } from './rxjs-operators/rxjs-operators.component';
import { RxjsServicesComponent } from './rxjs-services/rxjs-services.component';
import { RxjsStoreComponent } from './rxjs-store/rxjs-store.component';
import { StoreComp1Component } from './rxjs-store/store-comp1/store-comp1.component';
import { RxjsShareComponent } from './rxjs-share/rxjs-share.component';
import { RxjsDebugComponent } from './rxjs-debug/rxjs-debug.component';

@NgModule({
  declarations: [
    AppComponent,
    RxjsOperatorsComponent,
    RxjsServicesComponent,
    RxjsStoreComponent,
    StoreComp1Component,
    RxjsShareComponent,
    RxjsDebugComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
  entryComponents: [RxjsOperatorsComponent, AppComponent],
  exports: [RxjsServicesComponent],
})
export class AppModule {}
