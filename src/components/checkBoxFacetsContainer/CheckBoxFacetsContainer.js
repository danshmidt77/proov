import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class CheckBoxFacetContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  componentWillMount(){
    console.log('will mount');
  };

  render(){
    return(
       <h1>manage course</h1>
    );
  }
}

function mapStateToProps(state, ownProps){
  return {
    state: state
  };
}

function mapDispatchToProps(dispatch){
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckBoxFacetContainer);
