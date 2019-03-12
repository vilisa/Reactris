import React, { Component } from 'react';

class BoardRenderer extends Component {

  drawCol(value, index){
    if (value === 0) {
      return <div className="col empty" key={index}></div>;
    }
    return <div className="col filled" key={index}></div>;
  }

  render(){
    return(
      <div className="table">
        {this.props.state.map((row, index) => (
          <div className="row" key={index}>
          
            {row.map((col, index) => (
              this.drawCol(col, index)
            ))}

          </div>
        ))}
      </div>
    );
  }
}

export default BoardRenderer;