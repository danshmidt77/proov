import React from 'react';

const DropDown = ({options, onChange, value, placeholder}) => {

return (<select onChange = {onChange}>{
  options.map(
    (item, index)=>{
      return <option key={index}>{item}</option>})}</select>
    );
};

export default DropDown;
