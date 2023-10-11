import Table from 'react-bootstrap/Table';


function BasicReport({ food }) {
    return (
        <>

            <h2>Basic Report</h2>
            <h4>Basic Information</h4>
            <Table responsive>
                <tbody>
                    <tr>
                        <td><label>FDC ID</label></td>
                        <td>{food.fdcId}</td>
                    </tr>
                    <tr>
                        <td><label>Name</label></td>
                        <td>{food.description}</td>
                    </tr>
                    <tr>
                        <td><label>Category</label></td>
                        <td>{food.brandedFoodCategory}</td>
                    </tr>
                </tbody>
            </Table>
            <h4>Nutrient Details</h4>
            <Table responsive>
                <tbody>
                    {food.foodNutrients.map(nutrient => <tr>
                        <td>{nutrient.nutrientName}</td><td>{nutrient.value} {nutrient.unitName.toLowerCase()}</td>
                    </tr>
                    )}
                </tbody>
            </Table>
        </>
    )
}

export default BasicReport;