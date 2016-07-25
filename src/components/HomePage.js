import React from 'react';
import SearchBar from './common/searchBar/SearchBar'
import CheckBoxFacet from './common/CheckBoxFacet';
import CheckBoxFacetsContainer from './checkBoxFacetsContainer/CheckBoxFacetsContainer';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class HomePage extends React.Component{
  render(){
    return <SearchBar />
  }
}

function mapStateToProps(state){
return {};
}

function mapDispatchToProps(dispatch){
return {};
}


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
