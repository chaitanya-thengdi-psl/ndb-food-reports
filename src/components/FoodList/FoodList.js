function FoodList ({foods}) {
    return <div className="FoodList">
        <ul>
            {foods.map(food => <li>
                {food.description} <a href="#">See Report</a>
            </li>)}
        </ul>
    </div>
}

export default FoodList;