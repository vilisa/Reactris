import React, { Component } from 'react';

class BoardRenderer extends Component {

  drawCol(value) {
    if (value === 0) {
      return <td className="empty"></td>;
    }
    return <td className="filled"></td>;
  }

  render() {
    return (
      <table>
        <tbody>
          {this.props.state.map(row => (
            <tr key={row.id}>

              {row.map(col => (
                this.drawCol(col)
              ))}

            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default BoardRenderer;