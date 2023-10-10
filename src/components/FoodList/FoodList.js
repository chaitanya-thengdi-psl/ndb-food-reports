function FoodList ({foods, setSelectedFood}) {
    return <div className="FoodList">
        <p>Foods list:</p>
        <ul>
            {foods.map(food => <li>
                {food.description} <a href="#" onClick={() => setSelectedFood(food)}>See Report</a> <a href="#">Favorite</a>
            </li>)}
        </ul>
    </div>
}

export default FoodList;