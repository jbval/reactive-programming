import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsOperatorsComponent } from './rxjs-operators/rxjs-operators.component';
import { RxjsServicesComponent } from './rxjs-services/rxjs-services.component';

const routes: Routes = [
  { path: 'operators', component: RxjsOperatorsComponent },
  { path: 'services', component: RxjsServicesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
