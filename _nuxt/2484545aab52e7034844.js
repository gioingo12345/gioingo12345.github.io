(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{266:function(e,t,n){var content=n(288);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(13).default)("090880f7",content,!0,{sourceMap:!1})},287:function(e,t,n){"use strict";var r=n(266);n.n(r).a},288:function(e,t,n){(e.exports=n(12)(!1)).push([e.i,"#interactive.viewport>canvas[data-v-332f68be],#interactive.viewport>video[data-v-332f68be]{max-width:100%;width:100%}.viewport[data-v-332f68be]{position:relative}.viewport canvas[data-v-332f68be],.viewport video[data-v-332f68be]{position:absolute;left:0;top:0}",""])},292:function(e,t,n){"use strict";n.r(t);var r=n(283),o=n(286),c=n.n(o),d={name:"QuaggaScanner",props:{onDetected:{type:Function,default:function(e){console.log("detected: ",e)}},onProcessed:{type:Function,default:function(e){var t=c.a.canvas.ctx.overlay,n=c.a.canvas.dom.overlay;e&&(e.boxes&&(t.clearRect(0,0,parseInt(n.getAttribute("width")),parseInt(n.getAttribute("height"))),e.boxes.filter(function(t){return t!==e.box}).forEach(function(e){return c.a.ImageDebug.drawPath(e,{x:0,y:1},t,{color:"green",lineWidth:2})})),e.box&&c.a.ImageDebug.drawPath(e.box,{x:0,y:1},t,{color:"#00F",lineWidth:2}),e.codeResult&&e.codeResult.code&&c.a.ImageDebug.drawPath(e.line,{x:"x",y:"y"},t,{color:"red",lineWidth:3}))}},readerTypes:{type:Array,default:function(){return["code_128_reader"]}},readerSize:{type:Object,default:function(){return{width:640,height:480}},validator:function(e){return"number"==typeof e.width&&"number"==typeof e.height}},aspectRatio:{type:Object,default:function(){return{min:1,max:2}},validator:function(e){return"number"==typeof e.min&&"number"==typeof e.max}}},data:function(){return{quaggaState:{inputStream:{type:"LiveStream",constraints:{width:{min:this.readerSize.width},height:{min:this.readerSize.height},facingMode:"environment",aspectRatio:{min:1,max:2}}},locator:{patchSize:"medium",halfSample:!0},numOfWorkers:2,frequency:10,decoder:{readers:this.readerTypes},locate:!0}}},mounted:function(){c.a.init(this.quaggaState,function(e){if(e)return console.error(e);c.a.start()}),c.a.onDetected(this.onDetected),c.a.onProcessed(this.onProcessed)},destroyed:function(){c.a.stop()}},l=(n(287),n(43)),f=Object(l.a)(d,function(){var e=this.$createElement;this._self._c;return this._m(0)},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"viewport scanner",attrs:{id:"interactive"}},[t("video"),this._v(" "),t("canvas",{staticClass:"drawingBuffer"})])}],!1,null,"332f68be",null).exports,v={data:function(){return{decodeVal:"-",type:"1"}},methods:{onQRDecode:function(e){this.decodeVal=e},onBarDecode:function(data){this.decodeVal=data}},components:{QrcodeStream:r.QrcodeStream,barCode:f}},h=n(112),m=n.n(h),y=n(297),w=n(291),x=Object(l.a)(v,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{attrs:{align:"center"}},[n("v-radio-group",{attrs:{row:""},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[n("v-radio",{attrs:{label:"QR code",value:"1"}}),e._v(" "),n("v-radio",{attrs:{label:"Bar code",value:"2"}})],1)],1),e._v(" "),"1"===e.type?n("div",[n("qrcode-stream",{on:{decode:e.onQRDecode}})],1):n("div",[n("bar-code",{attrs:{onDetected:e.onBarDecode,readerTypes:["ean_reader"]}})],1),e._v(" "),n("div",{attrs:{align:"center"}},[e._v("\n    Result: "+e._s(e.decodeVal)+"\n  ")])])},[],!1,null,null,null);t.default=x.exports;m()(x,{VRadio:y.a,VRadioGroup:w.a})}}]);