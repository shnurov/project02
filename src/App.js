import logo from './logo.svg';
import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Caregories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

import items from './assets/pizza.json';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((obj) => (
              <PizzaBlock
                key={obj.id}
                title={obj.title}
                price={obj.price}
                imageUrl={obj.imageUrl}
                sizes={obj.sizes}
                type={obj.types}
              /> //{...obj}
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
