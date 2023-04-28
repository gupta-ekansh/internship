import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import classes from './AvailablePizza.module.css';
import PizzaItem from './PizzaItem/PizzaItem';
import axios from 'axios';
const AvailablePizzas = () => {
  const [data , setData] = useState([]);
  useEffect(() => {
    axios.get('https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68')
      .then(response => {
        console.log(response.data);
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  } , [])
  
  const teaList = data.map((tea) => (
    <PizzaItem
      key={tea.id}
      id={tea.id}
      name={tea.name}
      description={tea.description}
      price={100}
      type = {tea.isVeg}
      img = {tea.img_url}
    />
  ));

  return (
    <section className={classes.teas}>
      <Card>
        <ul>{teaList}</ul>
      </Card>
    </section>
  );
};

export default AvailablePizzas;
