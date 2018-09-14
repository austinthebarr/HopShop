import React from 'react';
import PropTypes from 'prop-types';

import Keg from './Keg';
import Header from './Header';
import Beer from '../assets/images/beer.jpeg';


const KegList = (props) => {
  return (
    <div>
      <Header 
        location={props.location}
        title='Beer Selection'
        onShowingForm={props.onShowingForm}
        onHidingForm={props.onHidingForm} />
      <div className='container flex'>
        <style jsx>{`
          .flex{
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          background-image: url(${Beer});
          background-size: cover;
          background-repeat: no-repeat;
          max-width: 1500px;
          height: 100vh;
          margin-top: 90px;
          }
          `}</style>
      
        {Object.keys(props.kegListToDisplay).map((kegId) => {
          let keg = props.kegListToDisplay[kegId];
          return <Keg 
            brew={keg.brew}
            brewery={keg.brewery}
            type={keg.type}
            abv={keg.abv}
            price={keg.price}
            available={keg.available}
            key={kegId}
            kegId={kegId}/>;
        })};
      </div>
    </div> 
  );
};

KegList.propTypes = {
  kegListToDisplay: PropTypes.object,
  location: PropTypes.string,
  onShowingForm: PropTypes.func,
  onHidingForm: PropTypes.func
};

export default KegList;