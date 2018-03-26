import { QuotesService } from './../../services/quotes.service';
import { Quote } from './../../models/quote.interface';
import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
  
  quote: Quote;
  
  constructor(private viewCtrl: ViewController,private navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotePage');
    this.quote = this.navParams.data;
  }

  onClose(remove = false){
    this.viewCtrl.dismiss(remove);
  }

}
