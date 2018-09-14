import React from 'react';
import PropTypes from 'prop-types';
import KegForm from './KegForm';

const Employee = (props) => {
  return(<KegForm onAddingKegToList={props.onAddingKegToList}/>);
};

Employee.propTypes = {
  onAddingKegToList: PropTypes.func.isRequired
};
export default Employee;