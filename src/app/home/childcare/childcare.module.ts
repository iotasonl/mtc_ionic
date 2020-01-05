import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChildcarePageRoutingModule } from './childcare-routing.module';

import { ChildcarePage } from './childcare.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChildcarePageRoutingModule
  ],
  declarations: [ChildcarePage]
})
export class ChildcarePageModule {}
