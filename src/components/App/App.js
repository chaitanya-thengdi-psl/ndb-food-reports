import { useState, useEffect } from 'react';

import Breadcrumb from '../Breadcrumb/Breadcrumb';
import FoodList from '../FoodList/FoodList';
import Search from '../Search/Search';

import './App.scss';
import BasicReport from '../BasicReport/BasicReport';

function App() {

  const [foods, setFoods] = useState([]);
  const [query, setQuery] = useState(false);
  const [searchData, setSearchData] = useState([])
  const [viewingSearchResults, setViewingSearchResults] = useState(true);
  const [selectedFood, setSelectedFood] = useState(null);

  useEffect(() => {
    if(query) {
      setViewingSearchResults(true);
      fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=DEMO_KEY&query=${query}`, {
        method: 'GET'
      })
        .then(response => response.json())
        .then(data => {
          setSearchData(data.foods.slice(0, 5));
        });
      } else {
        setViewingSearchResults(false);
      }
  }, [query]);

  function addToFoodsList(value) {
    if(!foods.map(food => food.fdcId).includes(value.fdcId)) {
      setFoods([...foods, value])
      localStorage.setItem("foods", JSON.stringify([...foods, value]))

    }
  }

  function removeFromFoodsList(value) {
    const filteredFoods = foods.filter(food => food.fdcId !== value.fdcId);
    setFoods(filteredFoods);
    localStorage.setItem("foods", JSON.stringify(filteredFoods))
  }

  return (
    <div className="App">
      <Breadcrumb />
      <h1>Food Reports</h1>
      <Search onSearch={(query) => setQuery(query)}/>
      {viewingSearchResults && <div>
        Search results:
        <ul>
          {searchData.map(datum => <li>
            <span>{datum.description}</span> <button onClick={() => addToFoodsList(datum)}>Add</button>
          </li>)}
        </ul>
      </div>}
      <FoodList foods={foods} removeSelectedFood={removeFromFoodsList} setSelectedFood={setSelectedFood} />
      {selectedFood && <BasicReport food={selectedFood} />}
    </div>
  );
}

export default App;
