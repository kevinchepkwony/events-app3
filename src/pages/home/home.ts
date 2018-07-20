import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToProfile(): void {
    this.navCtrl.push("ProfilePage");
  }

  goToCreate(): void {
    this.navCtrl.push('EventCreatePage');
  }

  goToList(): void {
    this.navCtrl.push('EventListPage');
  }
  goToPurchase(): void {
    this.navCtrl.push('PurchasePage');
  }
  goToMap(): void {
    this.navCtrl.push('MapPage');
  }

}
