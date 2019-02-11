import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SliderComponent } from './slider/slider.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'slider', component: SliderComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
