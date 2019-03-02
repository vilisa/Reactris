import React, { Component } from 'react';

class BoardRenderer extends Component {

  drawCol(value) {
    if (value === 0) {
      return <div className="col empty"></div>;
    }
    return <div className="col filled"></div>;
  }

  render() {
    return (
      <div className="table">
          {this.props.state.map(row => (
            <div className="row" key={row.id}>
            
              {row.map(col => (
                this.drawCol(col)
              ))}

            </div>
          ))}
      </div>
    );
  }
}

export default BoardRenderer;