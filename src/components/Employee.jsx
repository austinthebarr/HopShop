import React from 'react';
import PropTypes from 'prop-types';
import KegForm from './KegForm';
import KegList from './KegList';

const Employee = (props) => {
  return(
    <div>
      <KegList
        kegListToDisplay={props.kegListToDisplay} 
        location={props.location}
        onShowingForm={props.onShowingForm}
        onHidingForm={props.onHidingForm}/> 
      <KegForm onAddingKegToList={props.onAddingKegToList}/>
    </div>);
};

Employee.propTypes = {
  onAddingKegToList: PropTypes.func.isRequired,
  kegListToDisplay: PropTypes.object.isRequired,
  location: PropTypes.string.isRequired,
  onShowingForm: PropTypes.func.isRequired,
  onHidingForm: PropTypes.func.isRequired
};
export default Employee;