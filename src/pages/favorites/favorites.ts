import { SettingService } from './../../services/settings.service';
import { QuotePage } from './../quote/quote';
import { Quote } from './../../models/quote.interface';
import { QuotesService } from './../../services/quotes.service';
import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  
  quotes: Quote[]; 
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private quoteService: QuotesService,
    private modalCtrl: ModalController,
    private settingService: SettingService ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');

  }

  ionViewDidEnter(){
    console.log('ionViewDidEnter FavoritesPage');
    this.quotes = this.quoteService.getFavoriteQuotes();
  }

  onViewQuote(quote: Quote){
    console.log(quote);
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean)=>{
        console.log(remove);
        if(remove){
          this.onRemoveFromFavorites(quote)
        }
    });
  }

  onRemoveFromFavorites(quote: Quote){
    this.quoteService.removeQuoteFromFavorites(quote);
    this.quotes = this.quoteService.getFavoriteQuotes();
  }

  getBackground(){
      return this.settingService.isAltBackground() ? 'altQuoteBackground' :'quoteBackground';
  }

}
