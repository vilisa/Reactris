(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(7),i=a.n(s),r=(a(14),a(1)),c=a(2),l=a(4),p=a(3),u=a(5),_=(a(15),{GAME_WIDTH:10,GAME_HEIGHT:16}),d={shapes:[[[1,1],[1,1]]],pos_y:0,pos_x:4,rotation:0,potential_pos_y:0,potential_pos_x:0,potential_rotation:0},h={shapes:[[[0,1,1],[0,1,0],[0,1,0]],[[0,0,0],[1,1,1],[0,0,1]],[[0,1,0],[0,1,0],[1,1,0]],[[1,0,0],[1,1,1],[0,0,0]]],pos_y:0,pos_x:4,rotation:0,potential_pos_y:0,potential_pos_x:0,potential_rotation:0},m={shapes:[[[1,1,0],[0,1,0],[0,1,0]],[[0,0,1],[1,1,1],[0,0,0]],[[0,1,0],[0,1,0],[0,1,1]],[[0,0,0],[1,1,1],[1,0,0]]],pos_y:0,pos_x:4,rotation:0,potential_pos_y:0,potential_pos_x:0,potential_rotation:0},f={shapes:[[[0,1,0],[1,1,1],[0,0,0]],[[0,1,0],[0,1,1],[0,1,0]],[[0,0,0],[1,1,1],[0,1,0]],[[0,1,0],[1,1,0],[0,1,0]]],pos_y:0,pos_x:4,rotation:0,potential_pos_y:0,potential_pos_x:0,potential_rotation:0},v={shapes:[[[0,0,1,0],[0,0,1,0],[0,0,1,0],[0,0,1,0]],[[0,0,0,0],[0,0,0,0],[1,1,1,1],[0,0,0,0]],[[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0]],[[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]]],pos_y:0,pos_x:4,rotation:0,potential_pos_y:0,potential_pos_x:0,potential_rotation:0},b={shapes:[[[0,1,0],[0,1,1],[0,0,1]],[[0,0,0],[0,1,1],[1,1,0]],[[1,0,0],[1,1,0],[0,1,0]],[[0,1,1],[1,1,0],[0,0,0]]],pos_y:0,pos_x:4,rotation:0,potential_pos_y:0,potential_pos_x:0,potential_rotation:0},y={shapes:[[[0,0,1],[0,1,1],[0,1,0]],[[0,0,0],[1,1,0],[0,1,1]],[[0,1,0],[1,1,0],[1,0,0]],[[1,1,0],[0,1,1],[0,0,0]]],pos_y:0,pos_x:4,rotation:0,potential_pos_y:0,potential_pos_x:0,potential_rotation:0},E={getPiece:function(e,t){var a;switch(e){case"O":a=d;break;case"J":a=h;break;case"L":a=m;break;case"I":a=v;break;case"T":a=f;break;case"Z":a=b;break;case"S":a=y}return a.shapes.length<=t&&(a.rotation=t),a},getPieces:function(){return[]}},g={validateMove:function(e){return!(e.paused||!e.piece||!this.isSpaceAvailable(e))},isSpaceAvailable:function(e){var t=e.piece,a=e.landed;try{for(var n=0;n<t.shapes[t.potential_rotation].length;n++)for(var o=0;o<t.shapes[t.potential_rotation][n].length;o++)if(0!==t.shapes[t.potential_rotation][n][o]&&0!==a[n+t.potential_pos_y][o+t.potential_pos_x])return!1;return!0}catch(s){return!1}},moveDown:function(e){var t=e.piece;return t.potential_pos_y=e.piece.pos_y+1,this.validateMove(e)?(console.log("Down"),t.pos_y=e.piece.potential_pos_y):this.landPiece(e),e},moveLeft:function(e){var t=e.piece;return t.potential_pos_x=t.pos_x-1,this.validateMove(e)?(console.log("Left"),t.pos_x=t.potential_pos_x):t.potential_pos_x=t.pos_x,t},moveRight:function(e){var t=e.piece;return t.potential_pos_x=t.pos_x+1,this.validateMove(e)?(console.log("Right"),t.pos_x=t.potential_pos_x):t.potential_pos_x=t.pos_x,t},hardDrop:function(e){this.validateMove(e)&&console.log("Drop")},rotate:function(e){var t=e.piece;return t.potential_rotation=t.rotation+1,t.potential_rotation>=t.shapes.length&&(t.potential_rotation=0),this.validateMove(e)?(console.log("rotate"),t.rotation=t.potential_rotation):t.potential_rotation=t.rotation,t},pause:function(e){return e.paused=!e.paused,e.paused?console.log("Pause"):console.log("Resume"),e.paused},clearPiece:function(e){return e.piece=null,e.piece},landPiece:function(e){if(e.piece){console.log("land piece");for(var t=e.piece,a=e.landed,n=0;n<t.shapes[t.rotation].length;n++)for(var o=0;o<t.shapes[t.rotation][n].length;o++)0!==t.shapes[t.rotation][n][o]&&(a[n+t.pos_y][o+t.pos_x]=t.shapes[t.rotation][n][o]);return e.score=e.score+10,e.piece=E.getPiece("I",0),console.log(e.piece),e}},spawnPiece:function(e){var t=["O","J","L","I","T","Z","S"],a=Math.floor(7*Math.random());return console.log("spawn piece: "+t[a]),E.getPiece(t[a],0)}},w=function(){function e(){Object(r.a)(this,e)}return Object(c.a)(e,null,[{key:"getNewBoard",value:function(){return Array(_.GAME_HEIGHT).fill(null).map(function(e){return Array(_.GAME_WIDTH).fill(0)})}},{key:"drawBoard",value:function(e){for(var t=this.getNewBoard(),a=e.landed,n=e.piece,o=0;o<a.length;o++)for(var s=0;s<a[o].length;s++)0!==a[o][s]&&(t[o][s]=1);for(var i=0;i<n.shapes[n.rotation].length;i++)for(var r=0;r<n.shapes[n.rotation][i].length;r++)0!==n.shapes[n.rotation][i][r]&&(t[i+n.pos_y][r+n.pos_x]=1);return t}},{key:"scaleBoard",value:function(){var e=document.getElementById("scaler"),t=_.GAME_WIDTH/_.GAME_HEIGHT;e.style.width=e.offsetHeight*t+"px"}}]),e}(),k=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"drawCol",value:function(e){return 0===e?o.a.createElement("div",{className:"col empty"}):o.a.createElement("div",{className:"col filled"})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"table"},this.props.state.map(function(t){return o.a.createElement("div",{className:"row",key:t.id},t.map(function(t){return e.drawCol(t)}))}))}}]),t}(n.Component),x=(a(16),function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"paused",value:function(){if(this.props.state.paused)return o.a.createElement("span",{className:"blink"},"||")}},{key:"render",value:function(){return o.a.createElement("div",{className:"info"},this.paused(),o.a.createElement("span",{className:"score"},"Score: ",this.props.state.score,"    Lines: ",this.props.state.linesCleared))}}]),t}(n.Component)),N=(a(17),function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"buttons"},o.a.createElement("div",{className:"button"},o.a.createElement("button",{onClick:function(){return e.props.setStateVariable({paused:g.pause(e.props.state)})}}),o.a.createElement("div",null,"Pause")),o.a.createElement("div",{className:"button"},o.a.createElement("button",null),o.a.createElement("div",null,"Reset"))),o.a.createElement("div",{className:"arrows"},o.a.createElement("center",null,o.a.createElement("div",{className:"up"},o.a.createElement("button",{className:"arrow-up",onClick:function(){return e.props.movePiece(g.rotate(e.props.state))}})),o.a.createElement("div",{className:"left-right"},o.a.createElement("button",{className:"arrow-left",onClick:function(){return e.props.movePiece(g.moveLeft(e.props.state))}}),o.a.createElement("span",{className:"spacer"},o.a.createElement("i",{className:"up"}),o.a.createElement("i",{className:"left"}),o.a.createElement("i",{className:"right"}),o.a.createElement("i",{className:"down"})),o.a.createElement("button",{className:"arrow-right",onClick:function(){return e.props.movePiece(g.moveRight(e.props.state))}})),o.a.createElement("div",{className:"down"},o.a.createElement("button",{className:"arrow-down",onClick:function(){return e.props.movePiece(g.moveDown(e.props.state))}})))))}}]),t}(n.Component)),P=(a(18),function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"menu-container"},o.a.createElement("div",{className:"menu"},o.a.createElement("h1",null,"Paused"),o.a.createElement("div",{className:"body"},"width: ",_.GAME_WIDTH,o.a.createElement("br",null),"height: ",_.GAME_HEIGHT)))}}]),t}(n.Component)),O=[[[1,1],[1,1]]],j=[[[0,1,1],[0,1,0],[0,1,0]],[[0,0,0],[1,1,1],[0,0,1]],[[0,1,0],[0,1,0],[1,1,0]],[[1,0,0],[1,1,1],[0,0,0]]],S=[[[1,1,0],[0,1,0],[0,1,0]],[[0,0,1],[1,1,1],[0,0,0]],[[0,1,0],[0,1,0],[0,1,1]],[[0,0,0],[1,1,1],[1,0,0]]],M=[[[0,1,0],[1,1,1],[0,0,0]],[[0,1,0],[0,1,1],[0,1,0]],[[0,0,0],[1,1,1],[0,1,0]],[[0,1,0],[1,1,0],[0,1,0]]],A=[[[0,0,1,0],[0,0,1,0],[0,0,1,0],[0,0,1,0]],[[0,0,0,0],[0,0,0,0],[1,1,1,1],[0,0,0,0]],[[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0]],[[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]]],D=[[[0,1,0],[0,1,1],[0,0,1]],[[0,0,0],[0,1,1],[1,1,0]],[[1,0,0],[1,1,0],[0,1,0]],[[0,1,1],[1,1,0],[0,0,0]]],B=[[[0,0,1],[0,1,1],[0,1,0]],[[0,0,0],[1,1,0],[0,1,1]],[[0,1,0],[1,1,0],[1,0,0]],[[1,1,0],[0,1,1],[0,0,0]]],L={getPiece:function(e,t){var a;switch(console.log("getPiece("+e+","+t+")"),e){case"O":a=O;break;case"J":a=j;break;case"L":a=S;break;case"I":a=A;break;case"T":a=M;break;case"Z":a=D;break;case"S":a=B}return a.length>=t?a[t]:a[0]},getPieces:function(){return[]}},I=function(){function e(t,a){Object(r.a)(this,e),this._shape=L.getPiece(t,a),this._rotation=a,this._pos_y=0,this._pos_x=4,this._potential_pos_y=0,this._potential_pos_x=Math.round(_.GAME_WIDTH/2-1),this._potential_rotation=0}return Object(c.a)(e,[{key:"Log",value:function(){console.log(this)}},{key:"shape",get:function(){return this._shape},set:function(e){this._shape=L.getPiece(e[0],e[1])}},{key:"rotation",get:function(){return this._rotation},set:function(e){this._rotation=e}},{key:"pos_y",get:function(){return this._pos_y},set:function(e){this._pos_y=e}},{key:"pos_x",get:function(){return this._pos_x},set:function(e){this._pos_x=e}},{key:"potential_pos_y",get:function(){return this._potential_pos_y},set:function(e){this._potential_pos_y=e}},{key:"potential_Pos_x",get:function(){return this._potential_pos_x},set:function(e){this._potential_pos_x=e}},{key:"potential_rotation",get:function(){return this._potential_rotation},set:function(e){this._potential_rotation=e}}]),e}(),C=function(e){function t(e){var a;Object(r.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={score:0,linesCleared:0,paused:!1,board:w.getNewBoard(),landed:w.getNewBoard(),piece:E.getPiece("T",0)},a.state.board=w.drawBoard(a.state);var n=new I("Z",1),o=L.getPiece("Z",1);return console.log(n),console.log(o),n.pos_y=4,a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.attachEventListeners()}},{key:"componentDidUpdate",value:function(){}},{key:"drawBoard",value:function(){console.log("drawboard"),this.setState({board:w.drawBoard(this.state)})}},{key:"setPieceState",value:function(e){this.setState({piece:e}),this.drawBoard()}},{key:"setStateVariable",value:function(e){this.setState(e)}},{key:"setLanded",value:function(e){this.setState({landed:e.landed,piece:e.piece,score:e.score})}},{key:"paused",value:function(){if(this.state.paused)return o.a.createElement(P,null)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"main-container"},o.a.createElement("div",{className:"gameboy"},o.a.createElement("div",{className:"reactris-container"},o.a.createElement("div",{className:"screen"},this.paused(),o.a.createElement("div",{id:"scaler"},o.a.createElement(k,{state:this.state.board})),o.a.createElement(x,{state:this.state})),o.a.createElement("div",{className:"controls"},o.a.createElement(N,{state:this.state,movePiece:function(t){e.setPieceState(t)},setStateVariable:function(t){e.setStateVariable(t)}})))),o.a.createElement("div",{className:"debug-container"},o.a.createElement("div",{className:"debug-board"},"Landed Debug",o.a.createElement(k,{state:this.state.landed})),o.a.createElement("div",{className:"debug-board"},"Piece Debug",o.a.createElement(k,{state:this.state.piece.shapes[this.state.piece.rotation]}))))}},{key:"attachEventListeners",value:function(){var e=this;window.onload=function(){w.scaleBoard()},window.addEventListener("resize",w.scaleBoard.bind(this)),document.addEventListener("keydown",function(t){if(e.state.piece){switch(t.code){case"ArrowUp":e.setPieceState(g.rotate(e.state));break;case"ArrowDown":e.setState(g.moveDown(e.state));break;case"ArrowLeft":e.setPieceState(g.moveLeft(e.state));break;case"ArrowRight":e.setPieceState(g.moveRight(e.state));break;case"Space":e.setPieceState(g.hardDrop(e.state));break;case"Enter":e.setPieceState(g.spawnPiece(e.state));break;case"Escape":e.setState({paused:g.pause(e.state)})}e.drawBoard()}})}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.e81918a3.chunk.js.map