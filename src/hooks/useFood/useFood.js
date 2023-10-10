import { useEffect, useState } from 'react';

function useFood ({foodId}) {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        function fetchFood(fdcId) {
            fetch(`https://api.nal.usda.gov/fdc/v1/food/${fdcId}?api_key=DEMO_KEY`, {
                method: 'GET'
            }).then(response => response.json())
            .then(data => setFoods([...foods, data]));
        }

        if(foodId && !foods.map(food => food.fdcId).includes(foodId)) {
            fetchFood(foodId);
        }

        return () => {};
        
   }, []);
    return foods;
}

export default useFood;