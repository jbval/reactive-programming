import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsOperatorsComponent } from './rxjs-operators/rxjs-operators.component';
import { RxjsServicesComponent } from './rxjs-services/rxjs-services.component';
import { RxjsStoreComponent } from './rxjs-store/rxjs-store.component';

const routes: Routes = [
  { path: 'operators', component: RxjsOperatorsComponent },
  { path: 'services', component: RxjsServicesComponent },
  { path: 'store', component: RxjsStoreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
