import { Quote } from './../models/quote.interface';
export class QuotesService {
    
    private favoriteQuotes : Quote[] =[];

    addQuoteToFavorites(quote: Quote){
           this.favoriteQuotes.push(quote); 
    }

    removeQuoteFromFavorites(quote: Quote){
        const position = this.favoriteQuotes.findIndex(
            (quoteEl: Quote) => {
                return quoteEl.id == quote.id;
            }
        );
        this.favoriteQuotes.splice(position,1);    
    }

    getFavoriteQuotes(){
        return this.favoriteQuotes.slice();//make it private so that array can not be updated by getting a referance to the instance
    }
}