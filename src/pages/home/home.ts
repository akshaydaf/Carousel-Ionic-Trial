import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  swiped = false;
  constructor(public navCtrl: NavController) {

  }

  cardWasSwiped(){
    console.log("card was swiped");
    this.swiped = !this.swiped;
  }

}
