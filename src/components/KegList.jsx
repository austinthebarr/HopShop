import React from 'react';
import Keg from './Keg';

const masterKegList = [
  {
    brew: 'Ruby Zozzle',
    brewery: 'Hi-Wheel',
    description: 'Sparkling Wine & Grapefruit',
    abv: '6.8%',
    price: '7',
    availble: '20'
  },
  {
    brew: 'Tart N Juicy',
    brewery: 'Epic',
    description: 'Sour IPA',
    abv: '4.5%',
    price: '6',
    availble: '60'
  },
  {
    brew: 'Hamm\'s',
    brewery: 'Miller/Coors',
    description: 'American Lager',
    abv: '4.7%',
    price: '3',
    availble: '65'
  },
  {
    brew: 'Prismatic',
    brewery: 'Ninkasi',
    description: 'Juicy IPA',
    abv:  '5.9%',
    price: '6',
    availble: '75'
  },
  {
    brew: 'Juicy Haze',
    brewery: 'New Belgium',
    description: 'India Pale Ale',
    abv:  '7.5%',
    price: '6',
    availble: '18'
  },
  {
    brew: '8 Hop',
    brewery: 'New Belgium',
    description: 'Pale Ale',
    abv:  '5.5%',
    price: '6',
    availble: '58'
  }
];

const KegList = () => {
  return (
    <div>
      {masterKegList.map((keg, index) =>
        <Keg 
          brew={keg.brew}
          brewery={keg.brewery}
          abv={keg.price}
          price={keg.availble}
          key={index}/>
      )}
    </div>
  );
};

export default KegList;