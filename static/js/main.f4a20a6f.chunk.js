(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(18)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),s=a(7),r=a.n(s),i=(a(14),a(1)),c=a(2),l=a(4),p=a(3),u=a(5),d=(a(15),{validateMove:function(e){return!(e.paused||!this.isWithinBoundaries(e)||!this.isSpaceAvailable(e))},isSpaceAvailable:function(e){var t=e.piece,a=e.landed;console.log("r: "+t.potential_rotation+"\ny: "+t.potential_pos_y+"\nx: "+t.potential_pos_x+"\nshape: "+t.shapes[t.potential_rotation]);for(var o=0;o<t.shapes[t.potential_rotation].length;o++)for(var n=0;n<t.shapes[t.potential_rotation][o].length;n++)if(0!==t.shapes[t.potential_rotation][o][n]&&(console.log(t.shapes[t.potential_rotation][o][n]),0!==a[o+t.potential_pos_y]&&0!==a[n+t.potential_pos_x]))return console.log("Space Taken!"),console.log("row:"+a[o+t.potential_pos_y]+"col:"+a[n+t.potential_pos_x]),!0;return!0},isWithinBoundaries:function(e){return!0},moveDown:function(e){var t=e.piece;return t.potential_pos_y=e.piece.pos_y+1,this.validateMove(e)?(console.log("Down"),t.pos_y=e.piece.potential_pos_y):t.potential_pos_y=t.pos_y,t},moveLeft:function(e){var t=e.piece;return t.potential_pos_x=t.pos_x-1,this.validateMove(e)?(console.log("Left"),t.pos_x=t.potential_pos_x):t.potential_pos_x=t.pos_x,t},moveRight:function(e){var t=e.piece;return t.potential_pos_x=t.pos_x+1,this.validateMove(e)?(console.log("Right"),t.pos_x=t.potential_pos_x):t.potential_pos_x=t.pos_x,t},hardDrop:function(e){this.validateMove(e)&&console.log("Drop")},rotate:function(e){var t=e.piece;return t.potential_rotation=t.rotation+1,t.potential_rotation>=t.shapes.length&&(t.potential_rotation=0),this.validateMove(e)?(console.log("rotate"),t.rotation=t.potential_rotation):t.potential_rotation=t.rotation,t},pause:function(e){return e.paused=!e.paused,e.paused?console.log("Pause"):console.log("Resume"),e.paused},landPiece:function(e){console.log("land piece");for(var t=e.piece,a=e.landed,o=0;o<t.shapes[t.rotation].length;o++)for(var n=0;n<t.shapes[t.rotation][o].length;n++)0!==t.shapes[t.rotation][o][n]&&(a[o+t.pos_y][n+t.pos_x]=t.shapes[t.rotation][o][n]);return a}}),_=10,h=16,m={getNewBoard:function(){return Array(h).fill(null).map(function(e){return Array(_).fill(0)})},drawBoard:function(e){for(var t=this.getNewBoard(),a=e.landed,o=e.piece,n=0;n<a.length;n++)for(var s=0;s<a[n].length;s++)0!==a[n][s]&&(t[n][s]=1);for(var r=0;r<o.shapes[o.rotation].length;r++)for(var i=0;i<o.shapes[o.rotation][r].length;i++)0!==o.shapes[o.rotation][r][i]&&(t[r+o.pos_y][i+o.pos_x]=1);return t}},v=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"drawCol",value:function(e){return 0===e?n.a.createElement("td",{className:"empty"}):n.a.createElement("td",{className:"filled"})}},{key:"render",value:function(){var e=this;return n.a.createElement("table",null,n.a.createElement("tbody",null,this.props.state.map(function(t){return n.a.createElement("tr",{key:t.id},t.map(function(t){return e.drawCol(t)}))})))}}]),t}(o.Component),f={shapes:[[[1,1],[1,1]]],pos_y:0,pos_x:4,rotation:0,potential_pos_y:0,potential_pos_x:0,potential_rotation:0},b={shapes:[[[1,1],[1,0],[1,0]],[[0,0,0],[1,1,1],[0,0,1]],[[0,1],[0,1],[1,1]],[[0,0,0],[1,0,0],[1,1,1]]],pos_y:0,pos_x:4,rotation:0,potential_pos_y:0,potential_pos_x:0,potential_rotation:0},y={shapes:[[[1,1],[0,1],[0,1]],[[0,0,0],[0,0,1],[1,1,1]],[[1,0],[1,0],[1,1]],[[0,0,0],[1,1,1],[1,0,0]]],pos_y:0,pos_x:4,rotation:0,potential_pos_y:0,potential_pos_x:0,potential_rotation:0},E={shapes:[[[0,1,0],[1,1,1]],[[0,1,0],[0,1,1],[0,1,0]],[[1,1,1],[0,1,0]],[[0,1,0],[1,1,0],[0,1,0]]],pos_y:0,pos_x:4,rotation:0,potential_pos_y:0,potential_pos_x:0,potential_rotation:0},w={shapes:[[[0,1,0],[0,1,0],[0,1,0],[0,1,0]],[[1,1,1,1]]],pos_y:0,pos_x:4,rotation:0,potential_pos_y:0,potential_pos_x:0,potential_rotation:0},g={shapes:[[[0,1,0],[0,1,1],[0,0,1]],[[0,0,0],[0,1,1],[1,1,0]]],pos_y:0,pos_x:4,rotation:0,potential_pos_y:0,potential_pos_x:0,potential_rotation:0},k={shapes:[[[0,1,0],[1,1,0],[1,0,0]],[[0,0,0],[1,1,0],[0,1,1]]],pos_y:0,pos_x:4,rotation:0,potential_pos_y:0,potential_pos_x:0,potential_rotation:0},x={getPiece:function(e,t){var a;switch(e){case"O":a=f;break;case"J":a=b;break;case"L":a=y;break;case"I":a=w;break;case"T":a=E;break;case"Z":a=g;break;case"S":a=k}return a.shapes.length<=t&&(a.rotation=t),a},getPieces:function(){return[]}},N=(a(16),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"paused",value:function(){if(this.props.state.paused)return n.a.createElement("span",{className:"blink"},"||")}},{key:"render",value:function(){return n.a.createElement("div",{className:"info"},this.paused(),n.a.createElement("span",{className:"score"},"Score: 100    Lines: 1"))}}]),t}(o.Component)),S=(a(17),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"buttons"},n.a.createElement("div",{className:"button"},n.a.createElement("button",{onClick:function(){return e.props.setStateVariable({paused:d.pause(e.props.state)})}}),n.a.createElement("div",null,"Pause")),n.a.createElement("div",{className:"button"},n.a.createElement("button",null),n.a.createElement("div",null,"Reset"))),n.a.createElement("div",{className:"arrows"},n.a.createElement("center",null,n.a.createElement("div",{className:"up"},n.a.createElement("button",{className:"arrow-up",onClick:function(){return e.props.movePiece(d.rotate(e.props.state))}})),n.a.createElement("div",{className:"left-right"},n.a.createElement("button",{className:"arrow-left",onClick:function(){return e.props.movePiece(d.moveLeft(e.props.state))}}),n.a.createElement("span",{className:"spacer"},n.a.createElement("i",{className:"up"}),n.a.createElement("i",{className:"left"}),n.a.createElement("i",{className:"right"}),n.a.createElement("i",{className:"down"})),n.a.createElement("button",{className:"arrow-right",onClick:function(){return e.props.movePiece(d.moveRight(e.props.state))}})),n.a.createElement("div",{className:"down"},n.a.createElement("button",{className:"arrow-down",onClick:function(){return e.props.movePiece(d.moveDown(e.props.state))}})))))}}]),t}(o.Component)),O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={score:0,linesCleared:0,paused:!1,board:m.getNewBoard(),landed:[[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,0,0],[0,0,1,0,0,0,0,1,0,0],[1,1,1,0,0,0,0,1,0,0]],piece:x.getPiece("Z",0)},a.prevState={},a.state.board=m.drawBoard(a.state),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.attachEventListeners()}},{key:"componentDidUpdate",value:function(){this.state.board,this.prevState.board}},{key:"drawBoard",value:function(){console.log("drawboard"),this.setState({board:m.drawBoard(this.state)})}},{key:"setPieceState",value:function(e){this.prevState=this.state,this.setState({piece:e}),this.drawBoard()}},{key:"setStateVariable",value:function(e){this.prevState=this.state,this.setState(e)}},{key:"setLanded",value:function(e){this.prevState=this.state,this.setState({landed:e})}},{key:"render",value:function(){var e=this;return n.a.createElement("center",null,n.a.createElement("div",{className:"main-container"},n.a.createElement("div",{className:"reactris-container"},n.a.createElement("div",{className:"screen"},n.a.createElement(v,{state:this.state.board}),n.a.createElement("div",{className:"info"},n.a.createElement(N,{state:this.state}))),n.a.createElement("div",{className:"controls"},n.a.createElement(S,{state:this.state,movePiece:function(t){e.setPieceState(t)},setStateVariable:function(t){e.setStateVariable(t)}})))))}},{key:"attachEventListeners",value:function(){var e=this;document.addEventListener("keydown",function(t){if(e.state.piece){switch(t.code){case"ArrowUp":e.setPieceState(d.rotate(e.state));break;case"ArrowDown":e.setPieceState(d.moveDown(e.state));break;case"ArrowLeft":e.setPieceState(d.moveLeft(e.state));break;case"ArrowRight":e.setPieceState(d.moveRight(e.state));break;case"Space":e.setPieceState(d.hardDrop(e.state));break;case"Enter":e.setLanded(d.landPiece(e.state));break;case"Escape":e.setState({paused:d.pause(e.state)})}e.drawBoard()}})}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.f4a20a6f.chunk.js.map