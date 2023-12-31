import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {load} from "@angular-devkit/build-angular/src/utils/server-rendering/esm-in-memory-loader/loader-hooks";

const routes: Routes = [
  {path:'',component:MainLayoutComponent, children:[
      {path:'',redirectTo:'cars', pathMatch:'full'},
      {path:'cars', loadChildren:()=>import('./modules/cars/cars.module').then(m=>m.CarsModule)},
      {path:'auth', loadChildren:()=>import('./modules/auth/auth.module').then(m=>m.AuthModule)}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
