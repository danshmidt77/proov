import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
      this.state = {filterText: '', suggests: ['one', 'two', 'three']};
      this.handleChange = this.handleChange.bind(this);
    }

handleChange(event){
  console.log(event.target.value);
  this.setState({filterText: event.target.value});
}
  render(){
    let input = <input type="text" name="q" title="search" value={this.state.filterText}
    maxlength="100" placeholder="Search categories, industries, etc." onChange={this.handleChange} />
    return <div>{input}
    <ul>{this.state.suggests.map( (item, index) => {
      return <li key = { index }>{ item }</li>
    })}</ul>
    </div>
  }
};
