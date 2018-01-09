/**
 * Created by liulingli on 2017/7/4.
 * desc : 体温单
 */
import React, {Component} from "react";
import axios from "axios";
import Highcharts from 'highcharts/highstock';

import './chart.css';



export default class HighChart extends Component {
    componentWillMount() {

    }
    componentDidMount()    {
        var options = {
            chart: {
            },
            title: {
                text: '图表'                 // 标题
            },
            xAxis: {
                categories: ['2018-08-08 02:00', '2018-08-09 02:00', '2018-08-10 02:00', '2018-08-11 02:00', '2018-08-12 02:00', '2018-08-13 02:00'],
          
            },
            yAxis: {
                title: {
                    text: '温度'                                                        
                }
            },
            series: [{                             
                name: '口温',                      
                data: [37, 38, 39 , 38, 41, 41],
                marker: {
                    symbol: 'circle',
                    fillColor:'blue',
                },
            },
            ],
           
        };
        //Highcharts.wrap(Highcharts.Series.prototype, 'drawLegendSymbol', function (proceed, legend) {
        //    proceed.call(this, legend);
        //    this.legendLine.attr({
        //        d: ['M', 0, 10, 'L', 5, 5, 8, 10]
        //    });
        //    this.negativeLine = this.chart.renderer.path(
        //        ['M', 8, 10, 'L', 11, 15, 16, 10]
        //    ).attr({
        //        stroke: this.options.negativeColor,
        //        'stroke-width': this.options.lineWidth
        //    })
        //        .add(this.legendGroup);
        //});
        // 图表初始化函数
        var chart = Highcharts.chart('container', options, function (chart) {
            console.log(chart)
            var point = chart.series[0].data[1],
                text = chart.renderer.text(
                    'Max',
                    point.plotX + chart.plotLeft + 10,
                    point.plotY + chart.plotTop - 10
                ).attr({
                    zIndex: 5
                }).add(),
                box = text.getBBox();
            chart.renderer.rect(box.x - 5, box.y - 5, box.width + 10, box.height + 10, 5)
                .attr({
                    fill: '#FFFFEF',
                    stroke: 'gray',
                    'stroke-width': 1,
                    zIndex: 4
                })
                .add();
        });
    }
  
   
    render() {
        return (
            <div id="container" style={{width: '600px',height:'400px',margin:'auto'}}></div>
    )
}
}