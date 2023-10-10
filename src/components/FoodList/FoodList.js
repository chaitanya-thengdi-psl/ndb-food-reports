function FoodList ({foods}) {
    return <div className="FoodList">
        <p>Foods list:</p>
        <ul>
            {foods.map(food => <li>
                {food.description} <a href="#">See Report</a> <a href="#">Favorite</a>
            </li>)}
        </ul>
    </div>
}

export default FoodList;