import Table from 'react-bootstrap/Table';

function FoodList ({foods, removeSelectedFood, viewReport}) {
    return <div className="FoodList">
        <Table responsive>
                <tbody>
                    {foods.map(food => <tr>
                        <td><label>{food.description}</label></td>
                        <td><a href="#" onClick={() => viewReport(food)}>See Report</a></td>
                        <td><a href="#" onClick={() => removeSelectedFood(food)}>Remove</a></td>
                    </tr>)}
                </tbody>
            </Table>
    </div>
}

export default FoodList;