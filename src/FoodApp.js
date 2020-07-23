import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, picture, rating }) {
return (
  <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} />
  </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://www.bgw.kr/wp-content/uploads/2019/12/%EC%88%98%EC%9E%85%EA%B9%80%EC%B9%98.png',
    rating: 5,
  },
  {
    id: 2,
    name: 'Samhyeopsal',
    image: 'https://t1.daumcdn.net/liveboard/dailylife/222d88e5c7dc496c8e8a8a56c3452e52.JPG',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'Bibimbap',
    image: 'https://files.bonif.co.kr/upload/cmdt/BF102_pic_LjMg3BTB.jpg',
    rating: 3,
  },
  {
    id: 4,
    name: 'Doncasu',
    image: 'https://th2.tmon.kr/thumbs/image/423/336/e17/1b1492318_700x700_95_FIT.jpg',
    rating: 4,
  },
  {
    id: 5,
    name: 'Kimbap',
    image: 'https://recipe1.ezmember.co.kr/cache/recipe/2016/06/29/e7401296033ab8e4297cd53d71e1bba91.jpg',
    rating: 2.3,
  }
];

// function renderFood(dish) {
//   return <Food name={dish.name} picture={dish.image} />
// }
// const renderFood = dish => <Food name={dish.name} picture={dish.image} />


function App() {
  // console.log(foodILike.map(renderFood));
  return (
    <div>
      {/* <h1>Hello</h1>
      {foodILike.map(renderFood)} */}
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default App;
