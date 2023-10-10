# NDB Food Reports

Allows to list and search a list of foods.

Run the app with `npm start`.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

#### Developer Notes
* API key currently used is `DEMO_KEY`. It'll be best to use a proper key before starting a demo as the default request limit is fairly short.
* Hooks are not used for API requests (as there is only one). As standard practice, the `useEffect()` call containing the request is to be moved to a separate hook to be used as a "service".
* Kendo UI has a broken dependency tree - leading to installation failures on my version of NPM. So Bootstrap is used for responsive UI instead of Kendo. Basic responsive design is achieved via this.
* TypeScript is not used due to time shortage.
* To achieve a polished result, more styling (and use of classes, including Bootstrap layout classes) will need to be added to the code.
* The fetch API (that fetches via `fdcId`) is not used as I didn't see a need for using it.
* Favorites functionality is implemented via a "Food List" which you can add to via search results. This list is saved to and retrieved from localStorage.