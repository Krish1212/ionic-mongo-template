import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DishesProvider } from '../../providers/dishes/dishes'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private dishes:DishesProvider) {

  }
  ngOnInit(){
    let dishId = '5c0e7fda378212075cf6c0e6';
    let dish = {
      name: "dosa",
      day: "all",
      quantity: 2,
      price: 20,
      slot: ['breakfast','dinner']
    };
    this.dishes.getdishes().subscribe((res) => {
      console.log(res);
    });
    this.dishes.getdish(dishId).subscribe((res) => {
      console.log(res);
    });
    this.dishes.createdish(dish).subscribe((res) => {
      console.log(res);
    });
  }

}
