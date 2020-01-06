import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'splash', pathMatch: 'full' },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'new-admission',
    loadChildren: () => import('./home/children/new-admission/new-admission.module').then( m => m.NewAdmissionPageModule)
  },
  {
    path: 'discharge',
    loadChildren: () => import('./home/children/discharge/discharge.module').then( m => m.DischargePageModule)
  },  {
    path: 'follow-up',
    loadChildren: () => import('./home/follow-up/follow-up.module').then( m => m.FollowUpPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
