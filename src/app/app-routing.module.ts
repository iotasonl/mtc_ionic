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
    path: 'childcare',
    loadChildren: () => import('./home/childcare/childcare.module').then( m => m.ChildcarePageModule)
  },
  {
    path: 'new-admission',
    loadChildren: () => import('./home/children/new-admission/new-admission.module').then( m => m.NewAdmissionPageModule)
  },
  {
    path: 'discharge',
    loadChildren: () => import('./home/children/discharge/discharge.module').then( m => m.DischargePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
