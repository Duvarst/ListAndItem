(function(t){function e(e){for(var n,o,a=e[0],l=e[1],u=e[2],s=0,f=[];s<a.length;s++)o=a[s],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),c()}function c(){for(var t,e=0;e<r.length;e++){for(var c=r[e],n=!0,a=1;a<c.length;a++){var l=c[a];0!==i[l]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=c[0]))}return t}var n={},i={app:0},r=[];function o(e){if(n[e])return n[e].exports;var c=n[e]={i:e,l:!1,exports:{}};return t[e].call(c.exports,c,c.exports,o),c.l=!0,c.exports}o.m=t,o.c=n,o.d=function(t,e,c){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:c})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var c=Object.create(null);if(o.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(c,n,function(e){return t[e]}.bind(null,n));return c},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var d=l;r.push([0,"chunk-vendors"]),c()})({0:function(t,e,c){t.exports=c("56d7")},"05e6":function(t,e,c){"use strict";c("481f")},"475e":function(t,e,c){},"481f":function(t,e,c){},"56d7":function(t,e,c){"use strict";c.r(e);c("e260"),c("e6cf"),c("cca6"),c("a79d");var n=c("7a23"),i={id:"app"},r={class:"main-block"},o={class:"left-block"},a={class:"right-block"};function l(t,e,c,l,u,d){var s=Object(n["p"])("listleft"),f=Object(n["p"])("listright"),b=Object(n["p"])("edititem");return Object(n["k"])(),Object(n["e"])("div",i,[Object(n["f"])("main",r,[Object(n["f"])("div",o,[(Object(n["k"])(!0),Object(n["e"])(n["a"],null,Object(n["o"])(t.prodData,(function(t){return Object(n["k"])(),Object(n["e"])("div",{class:"list-block",key:t.idList},[Object(n["h"])(s,{arr:t,checkedList:t.checked,onListcheck:function(e){return d.callItemCheck(t.idList,e)},onEdit:function(e){return d.callEditItemWindow(t.idList,e)},onClickcheckbox:function(e){return d.callFncheckOperation(t.idList,e)}},null,8,["arr","checkedList","onListcheck","onEdit","onClickcheckbox"])])})),128))]),Object(n["f"])("div",a,[(Object(n["k"])(!0),Object(n["e"])(n["a"],null,Object(n["o"])(t.prodData,(function(t){return Object(n["k"])(),Object(n["e"])("div",{class:"list-block",key:t.idList},[Object(n["h"])(f,{arr:t,onClickOnSquare:function(e){return d.deleteEl(t.idList,e)}},null,8,["arr","onClickOnSquare"])])})),128))]),t.editWindFlag?(Object(n["k"])(),Object(n["c"])(b,{key:0,onNewvalue:e[0]||(e[0]=function(t){return d.newItemVal(t)}),onClosewindowedit:e[1]||(e[1]=function(t){return d.closeEditItemWind()})})):Object(n["d"])("",!0)])])}var u=c("5530"),d=c("5502"),s=(c("5377"),{class:"list-block"}),f={class:"block-list-title"},b={key:0,class:"items-list-wrap"},m={class:"title"},h=["onUpdate:modelValue"],O=["onClick"],k={class:"quantity"};function j(t,e,c,i,r,o){return Object(n["k"])(),Object(n["e"])("div",s,[Object(n["f"])("div",f,[Object(n["f"])("div",{class:"block-list-title__mark",onClick:e[0]||(e[0]=function(){return o.flags&&o.flags.apply(o,arguments)}),style:Object(n["j"])(o.styleobj)},null,4),Object(n["u"])(Object(n["f"])("input",{type:"checkbox",id:"checkList","onUpdate:modelValue":e[1]||(e[1]=function(t){return o.overwriteArr.checked=t}),onInput:e[2]||(e[2]=function(){return o.checkedVals&&o.checkedVals.apply(o,arguments)})},null,544),[[n["r"],o.overwriteArr.checked]]),Object(n["g"])(Object(n["q"])(o.overwriteArr.titleList),1)]),t.flag?(Object(n["k"])(),Object(n["e"])("div",b,[(Object(n["k"])(!0),Object(n["e"])(n["a"],null,Object(n["o"])(o.overwriteArr.data,(function(t){return Object(n["k"])(),Object(n["e"])("div",{class:"item-block",key:t.idItem},[Object(n["f"])("div",m,[Object(n["u"])(Object(n["f"])("input",{type:"checkbox",id:"checkItem",onChange:e[3]||(e[3]=function(){return o.check&&o.check.apply(o,arguments)}),"onUpdate:modelValue":function(e){return t.checked=e},ref:"inputCheck"},null,40,h),[[n["r"],t.checked]]),Object(n["f"])("span",null,Object(n["q"])(t.titleItem),1)]),Object(n["f"])("div",{class:"item-block__color-quantity",onClick:function(e){return o.edit(t.idItem)}},[Object(n["f"])("div",k,Object(n["q"])(t.quantity),1),Object(n["f"])("div",{class:"square",style:Object(n["j"])({background:t.color})},null,4)],8,O)])})),128))])):Object(n["d"])("",!0)])}c("d3b7");var p={props:{checkedList:Boolean,arr:Object},data:function(){return{flag:!1}},methods:{edit:function(t){this.$emit("edit",t)},check:function(){this.arr.data.some((function(t){return!0===t.checked}))?this.$emit("listcheck","checked"):this.$emit("listcheck","nochecked")},checkedVals:function(){this.arr.checked?this.$emit("clickcheckbox","checktrue"):this.$emit("clickcheckbox","checkfalse")},flags:function(){this.flag=!this.flag}},computed:{overwriteArr:function(){var t=this.arr;return t},styleobj:function(){var t=this.flag?"transform: rotate(45deg)":"transform: rotate(-45deg)";return t}},mounted:function(){this.check()}},v=(c("e934"),c("6b0d")),I=c.n(v);const y=I()(p,[["render",j],["__scopeId","data-v-61b0b26a"]]);var w=y,g={class:"list-block"},L={key:0,class:"item-block"},q={class:"title"},C={class:"item-block__color-quantity"},x=["onClick"];function _(t,e,c,i,r,o){return Object(n["k"])(),Object(n["e"])("div",g,[Object(n["f"])("div",null,Object(n["q"])(c.arr.titleList),1),(Object(n["k"])(!0),Object(n["e"])(n["a"],null,Object(n["o"])(c.arr.data,(function(t){return Object(n["k"])(),Object(n["e"])("div",{class:"items-list-wrap",key:t.idItem},[t.checked?(Object(n["k"])(),Object(n["e"])("div",L,[Object(n["f"])("div",q,Object(n["q"])(t.titleItem),1),Object(n["f"])("div",C,[(Object(n["k"])(!0),Object(n["e"])(n["a"],null,Object(n["o"])(o.quantityInArr(t.quantity),(function(e,c){return Object(n["k"])(),Object(n["e"])("div",{class:"square",key:c,onClick:function(e){return o.delEl(t.idItem)},style:Object(n["j"])({background:t.color})},null,12,x)})),128))])])):Object(n["d"])("",!0)])})),128))])}var E={props:{arr:Object},methods:{quantityInArr:function(t){for(var e=[],c=0;c<t;c++)e.push(c);return e},delEl:function(t){this.$emit("clickOnSquare",t)}},computed:{}};c("83a5");const D=I()(E,[["render",_],["__scopeId","data-v-9035c004"]]);var V=D,A=function(t){return Object(n["m"])("data-v-004066a1"),t=t(),Object(n["l"])(),t},Q={class:"window-edit"},S={class:"window-edit-wrap"},N=A((function(){return Object(n["f"])("label",{for:"textInp",id:"title"},"Enter a new value",-1)})),W=A((function(){return Object(n["f"])("label",{for:"colorInp",id:"title"},"Сhoose a new color",-1)})),$=["value"],P={class:"block-btn"};function F(t,e,c,i,r,o){return Object(n["k"])(),Object(n["e"])("div",Q,[Object(n["f"])("div",{class:"window-edit-bg",onClick:e[0]||(e[0]=function(){return o.windclose&&o.windclose.apply(o,arguments)})}),Object(n["f"])("div",S,[N,Object(n["u"])(Object(n["f"])("input",{type:"number",id:"textInp","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.newQuantity=e}),onChange:e[2]||(e[2]=function(t){return o.writNewQuant(t)})},null,544),[[n["s"],t.newQuantity]]),W,Object(n["f"])("input",{type:"color",id:"colorInp",value:t.newColor,onChange:e[3]||(e[3]=function(t){return o.writNewColor(t)})},null,40,$),Object(n["f"])("div",P,[Object(n["f"])("div",{class:"add-new-value",onClick:e[4]||(e[4]=function(){return o.addNewValue&&o.addNewValue.apply(o,arguments)})},"Edit")])])])}var R=c("1da1"),M=(c("96cf"),{props:{},data:function(){return{newQuantity:null,newColor:""}},methods:{windclose:function(){this.$emit("closewindowedit")},writNewQuant:function(t){var e=t.target.value;this.newQuantity=Math.max(e,0)},writNewColor:function(t){this.newColor=t.target.value},addNewValue:function(){null!==this.newQuantity&&""!==this.newColor&&this.$emit("newvalue",[this.newQuantity,this.newColor])}},computed:Object(u["a"])({},Object(d["c"])("mainstore",{itemObj:"itemObj"})),mounted:function(){var t=this;return Object(R["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick((function(){t.newQuantity=t.itemObj.quantity,t.newColor=t.itemObj.color}));case 2:case"end":return e.stop()}}),e)})))()}});c("05e6");const U=I()(M,[["render",F],["__scopeId","data-v-004066a1"]]);var J=U,T={components:{listleft:w,listright:V,edititem:J},data:function(){return{editWindFlag:!1,quantity:null,color:""}},methods:Object(u["a"])(Object(u["a"])(Object(u["a"])(Object(u["a"])(Object(u["a"])(Object(u["a"])({},Object(d["b"])("mainstore",{findItem:"findItem"})),Object(d["d"])("mainstore",{delELInQuan:"deleteELementInQuantity"})),Object(d["d"])("mainstore",{editItemValue:"editItemValue"})),Object(d["d"])("mainstore",{checkedOperation:"checkedOperation"})),Object(d["b"])("mainstore",{listChecked:"listChecked"})),{},{deleteEl:function(t,e){this.delELInQuan([t,e])},callEditItemWindow:function(t,e){this.editWindFlag=!0,this.findItem([t,e])},closeEditItemWind:function(){this.editWindFlag=!1},newItemVal:function(t){t&&(this.editItemValue(t),this.closeEditItemWind())},callFncheckOperation:function(t,e){"checkfalse"===e?this.checkedOperation({idList:t,bool:!0}):this.checkedOperation({idList:t,bool:!1})},callItemCheck:function(t,e){"checked"===e?this.listChecked({idList:t,bool:!0}):this.listChecked({idList:t,bool:!1})}}),computed:Object(u["a"])({},Object(d["c"])("mainstore",{prodData:"prodData"}))};c("ad15");const B=I()(T,[["render",l],["__scopeId","data-v-06597f7c"]]);var z=B,G=c("2909"),H=(c("159b"),c("7db0"),[{idList:1,titleList:"List 1",checked:!1,data:[{idItem:1,titleItem:"item 1",color:"#905151",checked:!1,quantity:10},{idItem:2,titleItem:"item 2",color:"#ba3b3b",checked:!1,quantity:20},{idItem:3,titleItem:"item 3",color:"#7f7288",checked:!1,quantity:40},{idItem:4,titleItem:"item 4",color:"#3c78b9",checked:!1,quantity:15}]},{idList:2,titleList:"List 2",checked:!1,data:[{idItem:1,titleItem:"item 1",color:"#25a5a7",checked:!0,quantity:10},{idItem:2,titleItem:"item 2",color:"#31af18",checked:!1,quantity:20},{idItem:3,titleItem:"item 3",color:"#b8c294",checked:!0,quantity:40},{idItem:4,titleItem:"item 4",color:"#ebc505",checked:!1,quantity:15}]},{idList:3,titleList:"List 3",checked:!1,data:[{idItem:1,titleItem:"item 1",color:"#c3c5e5",checked:!0,quantity:10},{idItem:2,titleItem:"item 2",color:"#7c727e",checked:!1,quantity:20},{idItem:3,titleItem:"item 3",color:"#738c17",checked:!0,quantity:40},{idItem:4,titleItem:"item 4",color:"#76088c",checked:!1,quantity:15}]},{idList:4,titleList:"List 4",checked:!1,data:[{idItem:1,titleItem:"item 1",color:"#a72552",checked:!1,quantity:10},{idItem:2,titleItem:"item 2",color:"#249957",checked:!1,quantity:20},{idItem:3,titleItem:"item 3",color:"#80b762",checked:!1,quantity:40},{idItem:4,titleItem:"item 4",color:"#c6c25d",checked:!1,quantity:15}]}]);function K(){return H}function X(t,e){var c=t.find((function(t){return t.idList===e[0]})),n=c.data.find((function(t){return t.idItem===e[1]}));return n}var Y={namespaced:!0,state:{prodDataArr:[],globalId:0,itemObj:{}},getters:{prodData:function(t){return t.prodDataArr},itemObj:function(t){return t.itemObj}},mutations:{setData:function(t,e){var c=[];e.forEach((function(t){c.push(t)})),t.prodDataArr=e},findItem:function(t,e){t.itemObj=X(t.prodDataArr,Object(G["a"])(e))},setId:function(t,e){t.globalId=e},checkedOperation:function(t,e){var c=t.prodDataArr.find((function(t){return t.idList===e.idList}));c.checked=e.bool,c.data.forEach((function(t){t.checked=e.bool}))},listChecked:function(t,e){var c=t.prodDataArr.find((function(t){return t.idList===e.idList}));c.checked=e.bool},editItemValue:function(t,e){t.itemObj.color=e[1],t.itemObj.quantity=e[0]},deleteELementInQuantity:function(t,e){var c=X(t.prodDataArr,Object(G["a"])(e));c.quantity-=1},extractData:function(t,e){this.replaceState(Object.assign(t,e))}},actions:{load:function(t){return Object(R["a"])(regeneratorRuntime.mark((function e(){var c,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:c=t.commit,n=K(),c("setData",n);case 3:case"end":return e.stop()}}),e)})))()},setId:function(t,e){var c=t.commit;c("setId",e)},listChecked:function(t,e){var c=t.commit;c("listChecked",e)},findItem:function(t,e){var c=t.commit;c("findItem",e)},extractData:function(t){return Object(R["a"])(regeneratorRuntime.mark((function e(){var c,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(c=t.commit,!localStorage.getItem("fulldata")){e.next=6;break}return e.next=4,JSON.parse(localStorage.getItem("fulldata"));case 4:n=e.sent,c("extractData",n);case 6:case"end":return e.stop()}}),e)})))()}},watch:{prodDataArr:function(){console.log(1111)},deep:!0}},Z=Object(d["a"])({modules:{mainstore:Y}}),tt=Z,et=Object(n["b"])(z);et.use(tt),tt.dispatch("mainstore/load").then((function(){et.mount("#app")}))},"83a5":function(t,e,c){"use strict";c("475e")},ad15:function(t,e,c){"use strict";c("ff59")},e3d8:function(t,e,c){},e934:function(t,e,c){"use strict";c("e3d8")},ff59:function(t,e,c){}});