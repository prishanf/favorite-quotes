import { Quote } from './../../models/quote.interface';
import { QuotesService } from './../../services/quotes.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  
  quotes: Quote[]; 
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private quoteService: QuotesService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
    this.quotes = this.quoteService.getFavoriteQuotes();
  }

}
