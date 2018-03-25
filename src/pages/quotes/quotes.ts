import { Quote } from './../../models/quote.interface';
import { Category } from './../../models/category.interface';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit{

  selectedCategory:Category;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //this veriable will not be initialised at ionViewDisLoad lifeCycle stage
    //Add the elvis operator (?) to the veriable in template to fix the error
    this.selectedCategory = this.navParams.data;
 
  }

  ngOnInit(){
    //this.selectedCategory = this.navParams.data;
  }

  onAddToFavorite(quote:Quote){
    
  }

}
