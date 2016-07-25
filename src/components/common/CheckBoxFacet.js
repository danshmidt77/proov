import React from 'react';
import CheckBox from './CheckBox';
var label = ['One', 'Two'];
const CheckBoxFacet = ({title}) =>{

  let style= {
    display: 'inline-block'
  }
return(
  <div style={style}>
  {title && <h5>{title}</h5>}
  {label.map((item, key) => {
  return <CheckBox key={key} label={item}/>
})}</div>);
};

export default CheckBoxFacet;
