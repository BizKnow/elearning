var colors=["#727cf5","#0acf97","#fa5c7c","#ffbc00"],dataColors=$("#sessions-overview-users").data("colors"),options={series:[{name:"Out Patient",type:"bar",data:[16,19,19,16,16,14,15,15,17,17,19,19,18,18,20,20,18,18,22,22,20,20,18,18,20,20,18,20,20,22]},{name:"In Patient",data:[21,24,24,21,21,19,20,20,22,22,24,24,23,23,25,25,23,23,27,27,25,25,23,23,25,25,23,25,25,27]}],chart:{type:"area",height:358,toolbar:{show:!1},offsetX:0,offsetY:2},stroke:{width:[0,2],dashArray:[5,0]},colors:colors=dataColors?dataColors.split(","):colors,grid:{strokeDashArray:7,padding:{top:0,right:-10,bottom:15,left:-10}},zoom:{enabled:!1},xaxis:{type:"string",axisBorder:{show:!1},labels:{offsetY:2}},yaxis:{tickAmount:3,min:0,labels:{formatter:function(o){return o+"k"},offsetX:-15},axisBorder:{show:!1}},legend:{show:!0,horizontalAlign:"center",offsetX:0,offsetY:5,markers:{width:9,height:9,radius:6},itemMargin:{horizontal:5,vertical:0}},dataLabels:{enabled:!1},markers:{size:0},tooltip:{x:{format:"dd MMM yyyy"}},fill:{opacity:[1,.5],type:["solid","gradient"],gradient:{type:"vertical",inverseColors:!1,opacityFrom:.35,opacityTo:0,stops:[0,80]}},plotOptions:{bar:{columnWidth:"50%",barHeight:"70%",borderRadius:3}}},chart=new ApexCharts(document.querySelector("#sessions-overview-users"),options),colors=(chart.render(),["#727cf5","#0acf97","#fa5c7c","#ffbc00"]),dataColors=$("#gender-chart").data("colors"),options={chart:{height:277,type:"donut"},legend:{show:!1},stroke:{width:0},plotOptions:{pie:{donut:{size:"75%",labels:{show:!0,total:{showAlways:!0,show:!0}}}}},series:[159.5,148.56,45.2],labels:["Male","Female","Child"],colors:colors=dataColors?dataColors.split(","):colors,dataLabels:{enabled:!1},responsive:[{breakpoint:480,options:{chart:{width:200}}}]};(chart=new ApexCharts(document.querySelector("#gender-chart"),options)).render();