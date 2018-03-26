# favorite-quotes App
Object of the project is to learning Ioinc 2 step by step.

# App Structure 
 *Main functionality of the App*
- Quotes Library ( Quotes List Group by Course Category ) 
- Quotes (Display list of Qoutes on the selected Category )
- Add Quote to Favorite 
- Favourted Quotes List
- Favorite Details and Abilility to Unfavourite Qoutes 
- Side Menu to navigate between Favorites page and Setting page
- Settings to allow user to toggle between favorite background colors
- Tabs panel to toggle between Favorites and Library Pages

## App Pages
- FavoritePage
- LibraryPage
- QuotesPage
- QuotePage
- SettingsPage
- TabsPage

## Page Navigation
- TabsPage ->  FavoritePage , LibraryPage
- LibraryPage -> QuotesPage -> (Favorite)
- FavoritePage -> QuotePage -> (UnFavorite)-> (Close) -> FavoritePage
- MenuPage -> QuotesPage, Settings Page
- Settings Page -> MenuPage


## Development Steps 

1. Genertae Pages (`$ ionic g page <pagename>`)
    * ionic g page library
    * ionic g page quotes
    * ionic g page quote
    * ionic g page favorites
    * ionic g page settings

2. Implement the TabsNavigation (Manualy Create the TabsPage component)
    * Create a new folder under pages `tabs`
    * Create a new file *tabs.ts* under *tabs* folder
    * Implememnt the TabsPage Component (tabs.ts)
    * Import the TabsPage Component on the app.module and add to declarations and entryComponent arrays
    * Update the app.component point the root page to TabsPage `rootPage:any = TabsPage;`

3. Display Quates on the Libaray Page
    * Create a new folder data under *src* folder
    * Create quoates.ts file which will be used store the quotes data
    * Create sample date array with below structire example 
      ```javascript
      export default [
        {
          category: 'inspirational',
          quotes: [
            {
              id: '1',
              person: 'Theodore Roosevelt',
              text: 'Believe you can and you\'re halfway there'
            },
            {
              id: '2',
              person: 'Norman Vincent Peale',
              text: 'Change your thoughts and you change your world.'
            }
          ],
          icon: 'brush'
        }
      ```
    * Create two Interface classes for the Category and Quote data model
        1. Create new folder *model* under the *src* folder
        2. Create quote.interface.ts file and implement the interface class
        3. Create categort.interface.ts file and implement the interface class

    * Update the LibraryPage component display Quotes
        * `<ion-list>` use ionic-list UI element to dsiplay list of categories 
        * `<button *ngFor="let quoteGroup of quoteCollection" ion-item>` add ion-item as a button to display quotes for each item in the *quoteCollection* via ngFor
        * `<ion-icon [name]="quoteGroup.icon" item-left></ion-icon>` use the ion-icon display the icon and format to left via item-left directive
        * `<h2>{{quoteGroup.category | uppercase}}</h2>` display the the category name and Uppercase via angular uppercase pipe
  
4. Implement Quotes Page to display the Quotes on selected category
    * Pass data from Libaray Component to Quotes componet
        * [navPush]="quotesPage" , [navParams]="quoteGroup"
    * Implement the Quote Card
        * `<ion-card *ngFor="let quote of selectedCategory?.quotes; let i = index">` repeate for each quote
    
5. Adding Alert to Favorite the Article
    * `private alertCtrl: AlertController` to create the Alert in ionic
    * Implement Alert 
      ```javascript
        const alert = this.alertCtrl.create({
          title: 'Add Quote',
          subTitle: 'Are you sure?',
          message: 'Are you sure you want to add the quote?',
          buttons:[
            {
              text:'Yes go ahead',
              handler: ()=> {
                console.log('Ok');
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
      ```
6. Implement the QuoteService to Store Favorited Quotes
    * addQuoteToFavorites 
    * removeQuoteFromFavorites
    * getFavoriteQuotes
    * update the app.module file to regsiter the QuoteService in the providers array.
    * update the Quotes component Alert handler to use QuoteService to add Quote to Favorite

7. Display Favorites on the Favoites Page

8. Implement the Modal to display Quote from Favorites page and Unfavorite functionality
    * Implement The Model
      ```javascript
        const modal = this.modalCtrl.create(QuotePage);
        modal.present();
      ```
    * Update the QuotePage to display the Quote Text and dismiss buttons to close the modal
      ```javascript
        constructor(private viewCtrl: ViewController) {}
        onClose(remove=false){
          this.viewCtrl.dismiss(remove);
        }
      ```
      Use the ViewController dismiss method to remove the current page (modal overlay) from the view
    * Pass data to display on the modal
    * Implement Unfavotite button via model onDisDismiss view lifecycle menthod
      ```javascript
        modal.onDidDismiss((remove: boolean)=>{
            if(remove){
              this.quoteService.removeQuoteFromFavorites(quote);
              this.quotes = this.quoteService.getFavoriteQuotes();
            }
        });
      ``` 

9. Add Unfavorite Functionality to Quotes Page
    * Add new `isQuoteFavorite` method to QuoteService method
    * Display/Hide favorite/Unfavorite button based on the favorited state

10. Implement slide on the favorite page to unfavorite an item
    * Use `<ion-item-sliding></ion-item-sliding>` to wrap the item
    * Add Slide button via `<ion-item-options>`
        ```html
          <ion-item-options>
            <button ion-button color="danger"
            (click)="onRemoveFromFavorites(quote)">
              <ion-icon name="trash"></ion-icon>
              Delete
            </button>
          </ion-item-options>
        ```
11. Changing the overall theme
    * overite the content padding `$content-padding: 8px;`
    * create new color variable `quoteBackground: #f2f7c0`
    * override the primary color from #488aff to #ffbb00  `primary:    #ffbb00`

12. Add Side Menu 
    * Add button to toggle the Side Menu 
      ```html
        <ion-buttons start> 
          <button ion-button menuToggle>
            <ion-icon name="menu"></ion-icon>
          </button>
        </ion-buttons>
      ```
    * Replace the Root Page ref: app.html page
      ```html
        <ion-menu [content]="nav">
          <ion-header>
              <ion-toolbar>
                  <ion-title>Menu</ion-title>
              </ion-toolbar>
          </ion-header>
          <ion-content>
              <ion-list>
                  <button ion-item (click)="onLoad(tabsPage)">
                      <ion-icon name="quote" item-left></ion-icon>
                      Quotes
                  </button>
                  <button ion-item (click)="onLoad(settingsPage)">
                      <ion-icon name="settings" item-left></ion-icon>
                      Settings
                  </button>
              </ion-list>
          </ion-content>
      </ion-menu>
      ```
      ```javascript
        onLoad(page:any){
          this.nav.setRoot(page);
          this.menuCtrl.close();
        }
      ```   