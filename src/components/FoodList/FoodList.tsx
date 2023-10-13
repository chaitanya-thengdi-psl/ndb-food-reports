import React from 'react';

import Table from 'react-bootstrap/Table';
// @ts-ignore: icons don't have a type
import {ReactComponent as Report} from 'bootstrap-icons/icons/card-list.svg';
// @ts-ignore: icons don't have a type
import {ReactComponent as Trash} from 'bootstrap-icons/icons/trash.svg';
import Food from '../../types/Food';

interface FoodListProps {
    foods: Food [];
    removeSelectedFood: Function;
    viewReport: Function;
}

function FoodList ({foods, removeSelectedFood, viewReport}: FoodListProps) {
    return <div className="FoodList">
        <Table responsive>
                <tbody>
                    {foods.map(food => <tr key={food.fdcId}>
                        <td><label>{food.description}</label></td>
                        <td><a className="icon" title="See Report" onClick={() => viewReport(food)}><Report /></a></td>
                        <td><a className="icon" title="Remove" onClick={() => removeSelectedFood(food)}><Trash /></a></td>
                    </tr>)}
                </tbody>
            </Table>
    </div>
}

export default FoodList;