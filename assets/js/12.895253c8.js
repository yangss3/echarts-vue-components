(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{328:function(t,e,a){"use strict";a.r(e);var c=a(33),i=Object(c.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ratiochart"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ratiochart"}},[t._v("#")]),t._v(" RatioChart")]),t._v(" "),a("p",[t._v("这个组件用于需要展示百分比的需求，提供了圆环，圆弧和水波三种类型的配置。")]),t._v(" "),a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),a("h2",{attrs:{id:"props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[t._v("#")]),t._v(" Props")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Default")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("width")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("图表容器的宽度，可以是绝对像素值或父元素宽度的百分比等")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("string")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v('"100%"')])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("height")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("图表容器的高度，可以是绝对像素值或父元素高度的百分比等")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("string")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v('"100%"')])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("adaptive")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("当窗口 resize 时，是否让图表重绘以自适应窗口大小")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("boolean")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("false")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("type")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("类型，内置提供 ring, arc, liquid 三种简单的类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v('"ring" | "arc" | "liquid"')])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v('"ring"')])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("value")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0 到 1 之间的数值，默认会以百分比的形式展示在图表中心。组件内部监听了这个值的变动，更改这个属性的值会触发视图更新")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("number")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("label")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("描述文本，默认展示在图表中心")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("string")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("color")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("图表 body 块的主色")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("string")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v('"#387adf"')])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("bgColor")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("type")]),t._v(" 为"),a("code",[t._v('"ring"')]),t._v("时，为圆环的填充底色，"),a("code",[t._v("type")]),t._v(" 为"),a("code",[t._v('"liquid"')]),t._v("时，为水波的背景色，"),a("code",[t._v("type")]),t._v(" 为"),a("code",[t._v('"arc"')]),t._v("时无效")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("string")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("ring: 根据 "),a("code",[t._v("color")]),t._v(" 的值自动生成; liquid: "),a("code",[t._v('"transparent"')])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("labelColor")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("本文的颜色")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("string")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("默认取"),a("code",[t._v("color")]),t._v("的值")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("labelSize")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("文本字体大小，像素值")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("number")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("默认根据容器尺寸自动计算字体大小")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("formatter")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("图表中心默认会显示 "),a("code",[t._v("label")]),t._v(" 和 "),a("code",[t._v("value")]),t._v(" 的百分比，如果这不满足你的需求，可以通过这个属性来定制你要显示的内容")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("string")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("round")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是否显示圆角，"),a("code",[t._v("type")]),t._v(" 为 "),a("code",[t._v("'ring")]),t._v(" 和 "),a("code",[t._v("'arc'")]),t._v(" 时有效")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("boolean")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("false")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("outline")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("水波图是否显示 outline， "),a("code",[t._v("type")]),t._v(" 为 "),a("code",[t._v("'liquid'")]),t._v(" 时有效")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("boolean")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("true")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("gradient")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是否显示渐变色，"),a("code",[t._v("type")]),t._v(" 为 "),a("code",[t._v("'ring")]),t._v(" 和 "),a("code",[t._v("'arc'")]),t._v(" 时有效。可以提供一个起始颜色和终止颜色组成的数组，或设置为 "),a("code",[t._v("true")]),t._v("，这样默认会使用 "),a("code",[t._v("color")]),t._v(" 的值来产生渐变")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("boolean | [string, string]")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("false")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("chartBgColor")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("图表容器的背景色")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("string")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v('"transparent"')])])])])]),t._v(" "),a("h3",{attrs:{id:"methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Parameters")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("renderChart")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("调用该方法会触发图表重绘，"),a("strong",[t._v("RatioChart")]),t._v(" 内部只监听了"),a("code",[t._v("value")]),t._v("属性的变化，如果你动态修改了其它属性的值，可以手动调用这个方法来触发图表重绘")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")])])])]),t._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("div",{staticStyle:{height:"20px"}}),t._v(" "),a("p",{staticClass:"codepen",staticStyle:{height:"303px","box-sizing":"border-box",display:"flex","align-items":"center","justify-content":"center",border:"2px solid",margin:"1em 0",padding:"1em"},attrs:{"data-height":"303","data-theme-id":"dark","data-default-tab":"js,result","data-user":"yshushan","data-slug-hash":"dyYmWaX","data-preview":"true","data-pen-title":"ratio-chart"}},[a("span",[t._v("See the Pen "),a("a",{attrs:{href:"https://codepen.io/yshushan/pen/dyYmWaX"}},[t._v("\n  ratio-chart")]),t._v(" by Shushan Yang ("),a("a",{attrs:{href:"https://codepen.io/yshushan"}},[t._v("@yshushan")]),t._v(")\n  on "),a("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".")])]),t._v(" "),a("script",{attrs:{async:"",src:"https://static.codepen.io/assets/embed/ei.js"}})])}),[],!1,null,null,null);e.default=i.exports}}]);