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