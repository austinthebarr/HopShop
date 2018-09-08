import React from 'react';
import Keg from './Keg';
import Header from './Header';
import Beer from '../assets/images/beer.jpeg';

const masterKegList = [
  {
    brew: 'Ruby Zozzle',
    brewery: 'Hi-Wheel',
    type: 'Sparkling Wine & Grapefruit',
    abv: '6.8%',
    price: '7',
    availble: '20'
  },
  {
    brew: 'Tart N Juicy',
    brewery: 'Epic',
    type: 'Sour IPA',
    abv: '4.5%',
    price: '6',
    availble: '60'
  },
  {
    brew: 'Hamm\'s',
    brewery: 'Miller/Coors',
    type: 'American Lager',
    abv: '4.7%',
    price: '3',
    availble: '65'
  },
  {
    brew: 'Prismatic',
    brewery: 'Ninkasi',
    type: 'Juicy IPA',
    abv:  '5.9%',
    price: '6',
    availble: '75'
  },
  {
    brew: 'Juicy Haze',
    brewery: 'New Belgium',
    type: 'India Pale Ale',
    abv:  '7.5%',
    price: '6',
    availble: '18'
  },
  {
    brew: '8 Hop',
    brewery: 'New Belgium',
    type: 'Pale Ale',
    abv:  '5.5%',
    price: '6',
    availble: '58'
  }
];

const KegList = () => {
  return (
    <div className='everyPage'>
      <Header 
        title='Beer Selection'/>
      <div className='container flex '>
        <style jsx>{`
          .flex{
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          background-image: url(${Beer});
          background-repeat: no-repeat;
          background-size: cover;
          max-width: 1500px;
          height: 100%;
          margin-top: 90px;
          }
          `}</style>
      
        {masterKegList.map((keg, index) =>
          <Keg 
            brew={keg.brew}
            brewery={keg.brewery}
            type={keg.type}
            abv={keg.abv}
            price={keg.price}
            availble={keg.availble}
            key={index}/>
        )}
      </div>
    </div> 
  );
};

export default KegList;