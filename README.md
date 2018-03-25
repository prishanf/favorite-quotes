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