import React from 'react';
import { connect } from 'react-redux';
import './App.css';

function App(){
  return (
    <div>APP</div>
  )
}
export default connect(
  function mapStateToProps(state){},
  function mapDispatchToProps(dispatch){}
)(App);
