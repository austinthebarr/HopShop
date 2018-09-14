import React from 'react';
import PropTypes from 'prop-types';

import KegForm from './KegForm';
import KegList from './KegList';
import Header from './Header';

const Employee = (props) => {
  if(props.valueOfHideForm === true){
    return(
      <div>
        <KegList
          kegListToDisplay={props.kegListToDisplay} 
          location={props.location}
          onShowingForm={props.onShowingForm}
          onHidingForm={props.onHidingForm}/> 
      </div> );
  } else {
    return(<div>
      <Header 
        location={props.location}
        title='Beer Selection'
        onShowingForm={props.onShowingForm}
        onHidingForm={props.onHidingForm} />
      <KegForm onAddingKegToList={props.onAddingKegToList}/>
    </div>);
  }
};

Employee.propTypes = {
  onAddingKegToList: PropTypes.func.isRequired,
  kegListToDisplay: PropTypes.object.isRequired,
  location: PropTypes.string.isRequired,
  onShowingForm: PropTypes.func.isRequired,
  onHidingForm: PropTypes.func.isRequired,
  valueOfHideForm: PropTypes.bool.isRequired
};
export default Employee;