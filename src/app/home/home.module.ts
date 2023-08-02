import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { BadgeModule } from '../components/badge/badge.module';
import { CartItemModule } from '../components/cart-item/cart-item.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    BadgeModule,
    CartItemModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
