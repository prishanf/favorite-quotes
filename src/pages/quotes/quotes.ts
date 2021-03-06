import { QuotesService } from './../../services/quotes.service';
import { Quote } from './../../models/quote.interface';
import { Category } from './../../models/category.interface';
import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit{

  selectedCategory:Category;

  constructor(
    private navParams: NavParams, 
    private alertCtrl: AlertController,
    private quoteService: QuotesService) {
  }

  ionViewDidLoad() {
    //this veriable will not be initialised at ionViewDisLoad lifeCycle stage
    //Add the elvis operator (?) to the veriable in template to fix the error
    this.selectedCategory = this.navParams.data;
 
  }

  ngOnInit(){
    //this.selectedCategory = this.navParams.data;
  }

  onAddToFavorites(selectedQuote:Quote){
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add the quote?',
      buttons:[
        {
          text:'Yes go ahead',
          handler: ()=> {
            console.log('Ok');
            this.quoteService.addQuoteToFavorites(selectedQuote);
          }
        },
        {
          text:'No, I change my mind',
          role:'cancel',
          handler: ()=> {
            console.log('Cancelled');
          }
        }
      ]
    });
    alert.present();
  }

  onRemoveFromFavorites(selectedQuote:Quote){
    this.quoteService.removeQuoteFromFavorites(selectedQuote);
  }

  isFavotite(quote:Quote){
    return this.quoteService.isQuoteFavotite(quote);
  }

}
