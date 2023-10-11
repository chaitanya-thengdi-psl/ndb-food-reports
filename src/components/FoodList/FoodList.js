import Table from 'react-bootstrap/Table';
import {ReactComponent as Report} from 'bootstrap-icons/icons/card-list.svg';
import {ReactComponent as Trash} from 'bootstrap-icons/icons/trash.svg';

function FoodList ({foods, removeSelectedFood, viewReport}) {
    return <div className="FoodList">
        <Table responsive>
                <tbody>
                    {foods.map(food => <tr>
                        <td><label>{food.description}</label></td>
                        <td><a className="icon" title="See Report" onClick={() => viewReport(food)}><Report /></a></td>
                        <td><a className="icon" title="Remove" onClick={() => removeSelectedFood(food)}><Trash /></a></td>
                    </tr>)}
                </tbody>
            </Table>
    </div>
}

export default FoodList;