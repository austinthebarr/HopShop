import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {v4} from 'uuid';

import Welcome from './Welcome';
import KegList from './KegList';
import Error404 from './Error404';
import Employee from './Employee';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      masterTapList: {
        '1': {
          brew: 'Ruby Zozzle',
          brewery: 'Hi-Wheel',
          type: 'Sparkling Wine & Grapefruit',
          abv: '6.8%',
          price: '7',
          available: '20'
        },
        '2': {
          brew: 'Tart N Juicy',
          brewery: 'Epic',
          type: 'Sour IPA',
          abv: '4.5%',
          price: '6',
          available: '60'
        },
        '3': {
          brew: 'High Life',
          brewery: 'Miller/Coors',
          type: 'American Lager',
          abv: '4.7%',
          price: '3',
          available: '65'
        },
        '4': {
          brew: 'Prismatic',
          brewery: 'Ninkasi',
          type: 'Juicy IPA',
          abv:  '5.9%',
          price: '6',
          available: '75'
        },
        '5': {
          brew: 'Juicy Haze',
          brewery: 'New Belgium',
          type: 'India Pale Ale',
          abv:  '7.5%',
          price: '6',
          available: '18'
        },
        '6': {
          brew: '8 Hop',
          brewery: 'New Belgium',
          type: 'Pale Ale',
          abv:  '5.5%',
          price: '6',
          available: '58'
        }
      },

      hideForm: true

    };
    this.handleAddingKegToList = this.handleAddingKegToList.bind(this);
    this.handleHidingForm = this.handleHidingForm.bind(this);
    this.handleShowingForm = this.handleShowingForm.bind(this);
  }
  
 
  handleAddingKegToList(newKeg){
    let newKegId = v4();
    let newMasterTapList = Object.assign({}, this.state.masterTapList, {[newKegId]: newKeg});
    this.setState({ masterTapList : newMasterTapList});
  }

  handleHidingForm(){
    this.setState({hideForm: true});
  }

  handleShowingForm(){
    this.setState({hideForm: false});
  }

  render(){
    return (
      <Wrapper>
        <TransitionGroup>
          <CSSTransition
            key={this.props.location.pathname}
            timeout={{ enter: 300, exit: 300 }}
            classNames={'fade'}>
            <section className="route-section">
              <Switch location={this.props.location}>
                <Route exact path='/'
                  component={Welcome} />
                <Route exact path='/offerings'
                  render={ () => <KegList kegListToDisplay={this.state.masterTapList}/>} /> 
                <Route exact path='/BarKeeper' 
                  render={ ()=> <Employee 
                    onAddingKegToList = {this.handleAddingKegToList} 
                    kegListToDisplay={this.state.masterTapList} 
                    location={this.props.location.pathname}
                    onShowingForm={this.handleShowingForm}
                    onHidingForm={this.handleHidingForm}
                    valueOfHideForm={this.state.hideForm}/> }/> 
                <Route component={Error404}/>
              </Switch>
            </section>
          </CSSTransition>
        </TransitionGroup>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
.fade-enter {
  opacity: 0.01;
}

.fade-enter.fade-enter-active {
  opacity: 1;
  transition: opacity 300ms ease-in;
}

.fade-exit {
  opacity: 1;
}

.fade-exit.fade-exit-active {
  opacity: 0.01;
  transition: opacity 300ms ease-in;
}

div.transition-group {
  position: relative;
}

section.route-section {
position: absolute;
width: 100vw;
height: 100vh;
top: 0;
left: 0;
}
`;

App.propTypes = {
  location: PropTypes.object
};


export default withRouter(App);
