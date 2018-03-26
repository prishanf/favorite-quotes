import { QuotesPage } from './../quotes/quotes';
import { Category } from './../../models/category.interface';
import { Component,OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import quotes from '../../data/quotes';

@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {

  quoteCollection : Array<Category>;
  quotesPage  = QuotesPage;
   
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LibraryPage');
  }

  ngOnInit(){
    this.quoteCollection = quotes;
  }

}
