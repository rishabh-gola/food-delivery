import { Injectable } from '@angular/core';
import { Food } from '../models/food.model';

@Injectable({
    providedIn: 'root'
})

export class FoodService {
getFoods(): Food[] {
    return [
        {
            id: 1,
            title: 'Sea Food',
            price: 12,
            image: 'assets/images/1.png',
            description: 'In addition to the freshest seafood, there are corn. cliantro and tomatoes: their first became mayonnaise, the second - cream, the third - spicy tomato water.'
        },
        {
            id: 2,
            title: 'Hamburger',
            price: 21,
            image: 'assets/images/2.png',
            description: 'In addition to the freshest seafood, there are corn. cliantro and tomatoes: their first became mayonnaise, the second - cream, the third - spicy tomato water.'
        },
        {
            id: 3,
            title: 'Mussels',
            price: 16,
            image: 'assets/images/3.png',
            description: 'In addition to the freshest seafood, there are corn. cliantro and tomatoes: their first became mayonnaise, the second - cream, the third - spicy tomato water.'
        },
        {
            id: 4,
            title: 'Pizza',
            price: 20,
            image: 'assets/images/4.png',
            description: 'In addition to the freshest seafood, there are corn. cliantro and tomatoes: their first became mayonnaise, the second - cream, the third - spicy tomato water.'
        },
        {
            id: 5,
            title: 'Brekfast',
            price: 10,
            image: 'assets/images/5.png',
            description: 'In addition to the freshest seafood, there are corn. cliantro and tomatoes: their first became mayonnaise, the second - cream, the third - spicy tomato water.'
        }
    ];
}

getFood(id: number): Food | undefined {
    var data = this.getFoods().find((food) => food.id == id);
    return data;
}
}