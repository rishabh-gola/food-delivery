import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CartItem } from 'src/app/models/cart-item.model';
import { Food } from 'src/app/models/food.model';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  id: any;
  food: Food;

  constructor(private activatedRoute: ActivatedRoute, private foodService: FoodService, 
              private cartService: CartService,
              private toastctrl: ToastController) {

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.food = this.foodService.getFood(this.id)!;
    console.log("This is Food Data ",this.food);
   }

  ngOnInit() {

  }

  addItemToCart(){

    const cartItem: CartItem = {
      id: this.food.id,
    name: this.food.title,
    price: this.food.price,
    image: this.food.image,
    quantity: 1,
    }

this.cartService.addToCart(cartItem);
this.presentToast();
  }

  async presentToast(){
    const toast = await this.toastctrl.create({
      message: 'Food added to the cart',
      mode: 'ios',
      duration: 1000,
      position: 'top',
    })

    toast.present();
  }

}
