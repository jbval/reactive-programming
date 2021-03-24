import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsDebugComponent } from './rxjs-debug/rxjs-debug.component';
import { RxjsOperatorsComponent } from './rxjs-operators/rxjs-operators.component';
import { RxjsServicesComponent } from './rxjs-services/rxjs-services.component';
import { RxjsShareComponent } from './rxjs-share/rxjs-share.component';
import { RxjsStoreComponent } from './rxjs-store/rxjs-store.component';

const routes: Routes = [
  { path: 'operators', component: RxjsOperatorsComponent },
  { path: 'share', component: RxjsShareComponent },
  { path: 'services', component: RxjsServicesComponent },
  { path: 'store', component: RxjsStoreComponent },
  { path: 'debug', component: RxjsDebugComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
