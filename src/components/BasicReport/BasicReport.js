function BasicReport ({food}) {
    return (
        <>
            <h2>Basic Report</h2>
            <h4>Basic Information</h4>
            <p><label>FDC ID:</label> {food.fdcId}</p>
            <p><label>Name:</label> {food.description}</p>
            <p><label>Category:</label> {food.brandedFoodCategory}</p>
            <p><label>Ingredients:</label> {food.ingredients}</p>
            <h4>Nutrient Details</h4>
            {food.foodNutrients.map(nutrient => <p>
                {nutrient.nutrientName}: {nutrient.value} {nutrient.unitName}
            </p>)}
        </>
    )
}

export default BasicReport;