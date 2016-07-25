import React from 'react';
import './header.scss';

const List = () => {
let names = ['dan', 'moshe', 'nisan'].map((item, index)=>{
  return <input key={index} placeholder={item}/>;
});

  return <div>{names}</div>;
};

export class Header extends React.Component{

render(){
  return(<List />)
}
}
