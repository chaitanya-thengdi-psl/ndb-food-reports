import ListGroup from 'react-bootstrap/ListGroup';

function FoodList ({foods, removeSelectedFood, viewReport}) {
    return <div className="FoodList">
        <ListGroup as="ul">
            {foods.map(food => <ListGroup.Item as="li">
                {food.description} <a href="#" onClick={() => viewReport(food)}>See Report</a> <a href="#" onClick={() => removeSelectedFood(food)}>Remove</a>
            </ListGroup.Item>)}
        </ListGroup>
    </div>
}

export default FoodList;