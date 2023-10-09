import Breadcrumb from '../Breadcrumb/Breadcrumb';
import FoodList from '../FoodList/FoodList';
import Search from '../Search/Search';

import './App.scss';

function App() {

  function searchFoodList(query) {
    console.log(`Searched for ${query}`)
  }

  return (
    <div className="App">
      <Breadcrumb />
      <h1>Food Reports</h1>
      <Search onSearch={(query) => searchFoodList(query)}/>
      <FoodList />
    </div>
  );
}

export default App;
