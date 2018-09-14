import React from 'react';
import PropTypes from 'prop-types';
import KegForm from './KegForm';
import KegList from './KegList';

const Employee = (props) => {
  return(<div><KegForm onAddingKegToList={props.onAddingKegToList}/>
   </div>);
};

Employee.propTypes = {
  onAddingKegToList: PropTypes.func.isRequired
};
export default Employee;