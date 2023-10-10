import { useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import FoodList from '../FoodList/FoodList';
import Search from '../Search/Search';

import './App.scss';
import BasicReport from '../BasicReport/BasicReport';

function App() {

  const [activeTab, setActiveTab] = useState("foodslist");
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

  function viewReport (food) {
    setSelectedFood(food);
    setActiveTab("report");
  }

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <h1>Food Reports</h1>
            <Search onSearch={(query) => setQuery(query)} clearSearch={() => setQuery("")} />
            {viewingSearchResults && <div>
              <label>Search results:</label>
              <ListGroup as="ul">
                {searchData.map(datum => <ListGroup.Item as="li"><span>{datum.description}</span> <Button className="addSearchResult" variant="secondary" onClick={() => addToFoodsList(datum)}>Add</Button></ListGroup.Item>)}
              </ListGroup>
            </div>}
            <Tabs
              activeKey={activeTab}
              onSelect={(t) => setActiveTab(t)}
              fill
            >
              <Tab eventKey="foodslist" title="Foods List">
                <FoodList foods={foods} removeSelectedFood={removeFromFoodsList} viewReport={viewReport} />
              </Tab>
              {selectedFood && <Tab eventKey="report" title={`Basic Report: ${selectedFood.description.length > 20 ? selectedFood.description.substring(0,20) + '...' : selectedFood.description}`}>
                <BasicReport food={selectedFood} />
              </Tab>}
            </Tabs>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
