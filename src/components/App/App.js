import useFood from '../../hooks/useFood/useFood';

import Breadcrumb from '../Breadcrumb/Breadcrumb';
import FoodList from '../FoodList/FoodList';
import Search from '../Search/Search';

import './App.scss';

function App() {

  function searchFoodList(query) {
    console.log(`Searched for ${query}`)
    fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=DEMO_KEY&query=${query}`, {
      method: 'GET'
    }).then(response => response.json())
      .then(data => console.log({ data }));


  }

  // called on each rerender, move to effect
  const foods = useFood({foodId: 534358});

  return (
    <div className="App">
      <Breadcrumb />
      <h1>Food Reports</h1>
      <Search onSearch={(query) => searchFoodList(query)}/>
      <FoodList foods={foods} />
    </div>
  );
}

export default App;
