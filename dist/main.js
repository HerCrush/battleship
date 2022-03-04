(()=>{"use strict";var e={434:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]);const c=i},890:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,":root {\n  --cell-size: 50px;\n}\n\nh1{\n  width: fit-content;\n  margin: auto;\n  font-size: 48pt;\n}\n\n#gameboard-container {\n  display: flex;\n  width: fit-content;\n  margin: auto;\n}\n\n.board-frame {\n  margin: 50px;\n  width: fit-content;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n}\n\n.board-grid {\n  width: var(--cell-size);\n  height: var(--cell-size);\n  border: solid grey 1px;\n}\n\n.ship {\n  background-color: rgb(200, 200, 200);\n  border-color: black;\n}\n\n.hit {\n  background-color: rgb(255, 145, 145);\n  border-color: red;\n}\n\n.miss {\n  background-color: rgb(145, 145, 255);\n  border-color: blue;\n}\n\n.self-hit {\n  background-color: rgb(180, 128, 128);\n  border-color: rgb(230, 128, 128);\n}\n\n.self-miss {\n  background-color: rgb(128, 128, 180);\n  border-color: rgb(128, 128, 230);\n}\n\n#blocking-screen {\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#game-over-sign {\n  width: 300px;\n  height: 300px;\n  color: white;\n  background-color: black;\n  text-align: center;\n}\n",""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=n(u),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(h);else{var f=o(h,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),c=n(565),s=n.n(c),d=n(216),l=n.n(d),u=n(589),p=n.n(u),h=n(434),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),t()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;var m=n(890),b={};b.styleTagTransform=p(),b.setAttributes=s(),b.insert=i().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=l(),t()(m.Z,b),m.Z&&m.Z.locals&&m.Z.locals;class v{constructor(e){this.size=e,this.damage=[],this.damage.length=e,this.damage.fill(!1)}hit(e){this.damage[e]=!0}isSunk(){return!!this.damage.every((function(e){return e}))}}const g=function(e=null){let t=[];for(let n=0;n<10;n++){t.push([]);for(let r=0;r<10;r++)t[n].push(e)}return t};class y{constructor(){this.layout=g("water"),this.record=g(),this.ships=[]}placeShip(e,t,n,r){try{!function(e,t,n,r,o){if("horizontal"===o){if(t>10-n)throw"Ship overflows the gameboard.";for(let o=0;o<t;o++)if("water"!==e[n+o][r])throw"Ship overlaps with other ship."}else if("vertical"===o){if(t>10-r)throw"Ship overflows the gameboard.";for(let o=0;o<t;o++)if("water"!==e[n][r+o])throw"Ship overlaps with other ship."}}(this.layout,r,e,t,n)}catch(e){return e}this.ships.push(new v(r));const o=this.ships.length-1;if("horizontal"===n)for(let a=0;a<r;a++)this.layout[e+a][t]={id:o,orientation:n,part:a};else if("vertical"===n)for(let a=0;a<r;a++)this.layout[e][t+a]={id:o,orientation:n,part:a}}removeShip(e,t){}receiveAttack(e,t){try{!function(e,t,n){if("hit"===n.record[e][t]||"miss"===n.record[e][t])throw"Repeated attack."}(e,t,this)}catch(e){return e}const n=this.layout[e][t];"water"===n?this.record[e][t]="miss":(this.ships[n.id].hit(n.part),this.record[e][t]="hit")}areAllShipsSunk(){return this.ships.every((function(e){return e.isSunk()}))}}class k{constructor(){this.gameboard=new y}attack(e){let t=Math.round(9*Math.random()),n=Math.round(9*Math.random());for(;"Repeated attack."===e.gameboard.receiveAttack(t,n);)t=Math.round(9*Math.random()),n=Math.round(9*Math.random())}}const w=(()=>{const e=new k,t=new k;return{player1:e,computer1:t,start:function(){e.gameboard.placeShip(1,1,"horizontal",3),t.gameboard.placeShip(0,0,"vertical",4)},doPcTurn:function(){t.attack(e)},doPlayerTurn:function(e,n){return"Repeated attack."!==t.gameboard.receiveAttack(e,n)},checkStatus:function(){return e.gameboard.areAllShipsSunk()?"pc wins":t.gameboard.areAllShipsSunk()?"player wins":void 0}}})(),S={playButton:document.querySelector("#play-button")},x=function(){const e=document.querySelector("main");for(;e.firstChild;)e.removeChild(e.lastChild)},E=(()=>{const e=document.createElement("button");return e.id="one-player-button",e.textContent="ONE PLAYER",{onePlayerButton:e,load:function(){x(),document.querySelector("main").appendChild(e)}}})(),L=(()=>{const e=(()=>{const e=document.createElement("div");e.classList.add("board-frame");const t=[];for(let e=0;e<10;e++){t.push([]);for(let n=0;n<10;n++)t[e].push(document.createElement("div")),t[e][n].classList.add("board-grid"),t[e][n].dataset.x=e,t[e][n].dataset.y=n}for(let n=0;n<10;n++)for(let r=0;r<10;r++)e.appendChild(t[r][n]);return{frame:e,grid:t}})(),t=document.createElement("button");return{load:function(){x();const n=document.createElement("div");n.id="gameboard-container",n.append(e.frame),t.textContent="READY",document.querySelector("main").append(n,t)},addReadyHandler:function(e){t.addEventListener("click",(function(){e(),t.remove()}))}}})(),C=(()=>{const e=function(){const e=document.createElement("div");e.classList.add("board-frame");const t=[];for(let e=0;e<10;e++){t.push([]);for(let n=0;n<10;n++)t[e].push(document.createElement("div")),t[e][n].classList.add("board-grid"),t[e][n].dataset.x=e,t[e][n].dataset.y=n}for(let n=0;n<10;n++)for(let r=0;r<10;r++)e.appendChild(t[r][n]);return{frame:e,grid:t}},t=e(),n=e();return{load:function(){x();const e=document.createElement("div");e.id="gameboard-container",e.append(t.frame,n.frame),document.querySelector("main").appendChild(e)},addReadyHandler:function(e){readyButton.addEventListener("click",(function(){e(),readyButton.remove()}))},updateLayout:function(e){for(let n=0;n<10;n++)for(let r=0;r<10;r++){const o=e[n][r],a=t.grid[n][r];"hit"===o?a.classList.add("self-hit"):"miss"===o?a.classList.add("self-miss"):"water"!==o&&null!==o&&a.classList.add("ship")}},updateRecord:function(e){for(let t=0;t<10;t++)for(let r=0;r<10;r++){const o=e[t][r],a=n.grid[t][r];"hit"===o?a.classList.add("hit"):"miss"===o&&a.classList.add("miss")}},addRecordHandler:function(e){n.grid.forEach((t=>{t.forEach((t=>{t.addEventListener("click",(function(t){const n=t.target.dataset.x,r=t.target.dataset.y;e(n,r)}))}))}))},loadGameOverScreen:function(e){const t=document.createElement("div");t.id="blocking-screen";const n=document.createElement("div");n.id="game-over-sign",n.textContent=`GAME OVER: ${e} wins!`,t.appendChild(n),document.querySelector("main").appendChild(t)}}})();S.playButton.addEventListener("click",E.load),E.onePlayerButton.addEventListener("click",(function(){L.load(),L.addReadyHandler((function(){C.load(),w.start(),C.updateLayout(w.player1.gameboard.layout),C.addRecordHandler((function(e,t){w.doPlayerTurn(e,t)&&(C.updateRecord(w.computer1.gameboard.record),"player wins"===w.checkStatus()?C.loadGameOverScreen("player"):(w.doPcTurn(),C.updateLayout(w.player1.gameboard.record),"pc wins"===w.checkStatus()&&C.loadGameOverScreen("pc")))}))}))}))})()})();