import React from 'react';
import PropTypes from 'prop-types';
import KegForm from './KegForm';
import KegList from './KegList';

const Employee = (props) => {
  console.log(props.location)
  return(
    <div>
      <KegList kegListToDisplay={props.kegListToDisplay}/> 
      <KegForm onAddingKegToList={props.onAddingKegToList}/>
    </div>);
};

Employee.propTypes = {
  onAddingKegToList: PropTypes.func.isRequired,
  kegListToDisplay: PropTypes.object.isRequired
};
export default Employee;