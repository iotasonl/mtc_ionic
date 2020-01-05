import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewAdmissionPageRoutingModule } from './new-admission-routing.module';

import { NewAdmissionPage } from './new-admission.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewAdmissionPageRoutingModule
  ],
  declarations: [NewAdmissionPage]
})
export class NewAdmissionPageModule {}
