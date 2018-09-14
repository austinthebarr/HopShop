import React from 'react';
import PropTypes from 'prop-types';

const KegForm = (props) => {
  let _brew = null;
  let _brewery = null;
  let  _type = null;
  let _abv = null;
  let _price = null;
  let _available = null;

  function handleAddingANewKegToList(event){
    event.preventDefault();
    props.onAddingKegToList({brew: _brew.value, brewery: _brewery.value, type: _type.value, abv: _abv.value, price: _price.value, available: _available.value});
    _brew.value = '';
    _brewery.value = '';
    _type.value = '';
    _abv.value = '';
    _price.value = '';
    _available.value = '';

  }
  return(
    <div>
      <form onSubmit={handleAddingANewKegToList}>
        <input
          type='text'
          id='brew'
          placeholder='brew'
          ref={(input) => {_brew = input;}}/>
        <input
          type='text'
          id='brewery'
          placeholder='brewery'
          ref={(input) => {_brewery = input;}}/>
        <input
          type='text'
          id='type'
          placeholder='type'
          ref={(input) => {_type = input;}}/>
        <input
          type='text'
          id='abv'
          placeholder='abv'
          ref={(input) => {_abv = input;}}/>
        <input
          type='text'
          id='price'
          placeholder='price'
          ref={(input) => {_price = input;}}/>
        <input
          type='number'
          id='available'
          placeholder='available'
          ref={(input) => {_available = input;}}/>
        <button className='btn btn-success' type='submit'>Help!</button>
      </form>
    </div>
  );
};

KegForm.propTypes = {
  onAddingKegToList: PropTypes.func.isRequired
};

export default KegForm;