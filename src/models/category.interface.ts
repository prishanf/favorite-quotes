import { Quote } from './quote.interface';
export interface Category{
    category :string;
    quotes: Array<Quote>;
    icon: string;
}