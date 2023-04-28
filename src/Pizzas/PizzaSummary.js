import classes from './PizzaSummary.module.css'

const PizzaSummary = () => {

    return (
        <section className={classes.summary }>
        <h2>A Pizza a day keeps the sadness away</h2>
        <p>
          Choose your favourite pizzas and enjoy your moment with someone
          special.
        </p>
      </section>
    );
}

export default PizzaSummary;