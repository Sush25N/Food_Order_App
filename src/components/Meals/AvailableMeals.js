import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css'


const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Misal-Pav',
        description: 'Spicy and Crispy',
        price: 'Rs. 80',
    },
    {
        id: 'm2',
        name: 'Surmai-Fish',
        description: 'Finest fish and veggies',
        price: 'Rs. 320',
    },
    {
        id: 'm3',
        name: 'Pav-Bhaji',
        description: 'Mashveggies',
        price: 'Rs. 120',
    },
    {
        id: 'm4',
        name: 'Thalipith',
        description: 'Mix-veg',
        price: 'Rs. 50',
    },
    {
        id: 'm5',
        name: 'Pooran-Poli',
        description: 'Sweet Chapati',
        price: 'Rs. 150',
    }, 
    {
        id: 'm6',
        name: 'Thali',
        description: 'Complete food',
        price: 'Rs. 200',
    }
]

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => (
        <MealItem 
            id={meal.id}
            key={meal.id} 
            name={meal.name} 
            description={meal.description}
            price={meal.price}
        />
    ));


    return (
        <section className={classes.meals}>

            <Card>
                <ul>{mealsList}</ul>
            </Card>
            {/* <ul>{mealsList}</ul> */}
        </section>
    )
};

export default AvailableMeals