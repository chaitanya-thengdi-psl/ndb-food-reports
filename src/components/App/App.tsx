import React, { useState, useEffect } from 'react';
// @ts-ignore: icons don't have a type
import {ReactComponent as Plus} from 'bootstrap-icons/icons/plus.svg'


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import BasicReport from '../BasicReport/BasicReport';
import FoodList from '../FoodList/FoodList';
import Search from '../Search/Search';

import './App.scss';
import Food from '../../types/Food';

function App() {

  const [activeTab, setActiveTab] = useState("foodslist");
  const [foods, setFoods] = useState<Food []>([]);
  const [query, setQuery] = useState("");
  const [searchData, setSearchData] = useState<Food []>([])
  const [viewingSearchResults, setViewingSearchResults] = useState(true);
  const [selectedFood, setSelectedFood] = useState<Food | null>(null);

  useEffect(() => {
    const storedFoods = localStorage.getItem('foods');
    if(storedFoods) {
      setFoods(JSON.parse(storedFoods));
    }
  }, []);

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

  function addToFoodsList(value: Food) {
    if(!foods.map(food => food.fdcId).includes(value.fdcId)) {
      setFoods([...foods, value])
      localStorage.setItem("foods", JSON.stringify([...foods, value]))

    }
  }

  function removeFromFoodsList(value: Food) {
    const filteredFoods = foods.filter(food => food.fdcId !== value.fdcId);
    setFoods(filteredFoods);
    localStorage.setItem("foods", JSON.stringify(filteredFoods))
  }

  function viewReport (food: Food) {
    setSelectedFood(food);
    setActiveTab("report");
  }

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <h1>Food Reports</h1>
            <Search onSearch={(query: string) => setQuery(query)} clearSearch={() => setQuery("")} />
            {viewingSearchResults && <div>
              <label>Search results:</label>
              <ListGroup as="ul">
                {searchData.map(datum => <ListGroup.Item key={datum.fdcId} as="li"><span>{datum.description}</span> <a className="large icon addSearchResult" title="Add to List" onClick={() => addToFoodsList(datum)}><Plus /></a></ListGroup.Item>)}
              </ListGroup>
            </div>}
            <Tabs
              activeKey={activeTab}
              onSelect={t => t && setActiveTab(t)} // t can technically be null, for whatever reason
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
