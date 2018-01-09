/**
 * Created by liulingli on 2017/7/4.
 * desc : 体温单
 */
import React, {Component} from "react";
import qs from "qs";
import {TemperatureChart} from "./temperatureChart";
import axios from "axios";



export class Temperature extends Component {
    componentWillMount() {
        this.state = {
            data: {hspName: "苏州科技城医院"},
            beginDate: "2017-06-28",
            patientList: {
                patientName: "xmy", //姓名
                sex: "男", //性别
                age: "25", //年龄
                admissionDateTime: "2017-06-27", //入院时间
                endemicName: "心内科", //科室
                bedNo: "123", //床号
                inpNo: "Z23456", //住院号
                medicalHao: "Z23456" //病案号
            },
            dayOps: ['10', '20', '30', '40', '50', '60', '70'], //产后/术后天数
            breathingList: ['60', '70', '65', '66', '56', '60', '70', '60', '70', '65', '66', '56', '60', '70', '60', '70', '65', '66', '56', '60', '70', '60', '70', '65', '66', '56', '60', '70', '60', '70', '65', '66', '56', '60', '70', '60', '70', '65', '66', '56', '60', '70'], //呼吸数据
            dayList: ['1', '2', '3', '4', '5', '6', '7'], //住院天数
            dayMap: {
                "{name:'大便次数',units:''}": ["", "", "", "", "", "44", ""],
                "{name:'小便',units:'ml'}": ["", "", "", "", "", "47.5", ""],
                "{name:'引流',units:'ml'}": ["", "", "", "", "", "44", ""],
                "{name:'其他',units:'ml'}": ["", "", "", "", "", "47.5", ""],
                "{name:'补液',units:'ml'}": ["", "", "", "", "", "44", ""],
                "{name:'饮食',units:'g'}": ["", "", "", "", "", "47.5", ""],
                "{name:'体重',units:'kg'}": ["", "", "", "", "", "44", ""],
                "{name:'身高',units:'cm'}": ["", "", "", "", "", "47.5", ""],
                "{name:'血压',units:'mmHg'}": ["", "", "", "", "", "44", ""],
                "{name:'特别药物',units:''}": ["", "", "", "", "", "47.5", ""],
            }, //每日录入信息
            pointTime: {
                //疼痛暂未用到
                "tt": [{"dataTime": "2017-06-29 02:00:00", "value": "9"}, {
                    "dataTime": "2017-06-29 06:00:00",
                    "value": "8"
                }, {"dataTime": "2017-06-29 10:00:00", "value": "7"}],
                // 心率数据
                "xl": [{
                    "dataTime": "2017-06-29 02:00:00",
                    "date": "2017-06-29",
                    "hour": 2,
                    "mbValue": "",
                    "phValue": "",
                    "type": "",
                    "value": "88",
                    "xlValue": ""
                }, {
                    "dataTime": "2017-06-29 06:00:00",
                    "date": "2017-06-29",
                    "hour": 6,
                    "mbValue": "",
                    "phValue": "",
                    "type": "",
                    "value": "90",
                    "xlValue": ""
                }, {
                    "dataTime": "2017-06-29 14:00:00",
                    "date": "2017-06-29",
                    "hour": 14,
                    "mbValue": "",
                    "phValue": "",
                    "type": "",
                    "value": "88",
                    "xlValue": ""
                }, {
                    "dataTime": "2017-06-29 18:00:00",
                    "date": "2017-06-29",
                    "hour": 18,
                    "mbValue": "",
                    "phValue": "",
                    "type": "",
                    "value": "98",
                    "xlValue": ""
                }, {
                    "dataTime": "2017-06-29 22:00:00",
                    "date": "2017-06-29",
                    "hour": 22,
                    "mbValue": "",
                    "phValue": "",
                    "type": "",
                    "value": "90",
                    "xlValue": ""
                }],
                // 脉搏数据
                "mb": [{
                    "dataTime": "2017-06-29 02:00:00",
                    "date": "2017-06-29",
                    "hour": 2,
                    "mbValue": "",
                    "phValue": "",
                    "type": "",
                    "value": "98",
                    "xlValue": ""
                }, {
                    "dataTime": "2017-06-29 06:00:00",
                    "date": "2017-06-29",
                    "hour": 6,
                    "mbValue": "",
                    "phValue": "",
                    "type": "",
                    "value": "80",
                    "xlValue": ""
                }, {
                    "dataTime": "2017-06-29 14:00:00",
                    "date": "2017-06-29",
                    "hour": 14,
                    "mbValue": "",
                    "phValue": "",
                    "type": "",
                    "value": "100",
                    "xlValue": ""
                }, {
                    "dataTime": "2017-06-29 18:00:00",
                    "date": "2017-06-29",
                    "hour": 18,
                    "mbValue": "",
                    "phValue": "",
                    "type": "",
                    "value": "98",
                    "xlValue": ""
                }, {
                    "dataTime": "2017-06-29 22:00:00",
                    "date": "2017-06-29",
                    "hour": 22,
                    "mbValue": "",
                    "phValue": "",
                    "type": "",
                    "value": "120",
                    "xlValue": ""
                }
                ],
                // 图章数据
                "eventDatas": [{                      
                    "dataTime": "2017-06-29 14:30:00", // 图章时间
                    "date": "2017-06-30",    // 日期
                    "hour": 2,               // 时间点
                    "mbValue": "", // 未用到
                    "phValue": "",  // 物理降温
                    "type": "",      // 温度形式 腋 口 刚
                    "value": "呼吸心跳停止", // 图章文字
                    "xlValue": "" // 未用到
                }, 
                {
                    "dataTime": "2017-06-29 14:00:00",
                    "date": "2017-06-30",
                    "hour": 2,
                    "mbValue": "",
                    "phValue": "",
                    "type": "",
                    "value": "请假",
                    "xlValue": ""
                }, {
                    "dataTime": "2017-06-30 02:00:00",
                    "date": "2017-06-30",
                    "hour": 4,
                    "mbValue": "",
                    "phValue": "",
                    "type": "",
                    "value": "不升",
                    "xlValue": ""
                }, 
                {
                    "dataTime": "2017-06-29 02:00:00",
                    "date": "2017-06-29",
                    "hour": 2,
                    "mbValue": "",
                    "phValue": "",
                    "type": "",
                    "value": "入院",
                    "xlValue": ""
                }, {
                    "dataTime": "2017-06-29 14:00:00",
                    "date": "2017-06-29",
                    "hour": 14,
                    "mbValue": "",
                    "phValue": "",
                    "type": "",
                    "value": "开呼吸机",   // 根据文字判断 呼吸箭头
                    "xlValue": ""
                }, {
                    "dataTime": "2017-06-29 22:00:00",
                    "date": "2017-06-29",
                    "hour": 22,
                    "mbValue": "",
                    "phValue": "",
                    "type": "",
                    "value": "关呼吸机",
                    "xlValue": ""
                }],
                // 温度数据
                "wd": [{
                    "dataTime": "2017-06-29 02:00:00",
                    "date": "2017-06-29",
                    "hour": 2,
                    "mbValue": "",
                    "phValue": "36.5",  // 物理降温
                    "type": "gw",      // 温度形式 腋 口 刚
                    "value": "37.2",  // 温度值
                    "xlValue": ""
                }, {
                    "dataTime": "2017-06-29 06:00:00",
                    "date": "2017-06-29",
                    "hour": 6,
                    "mbValue": "",
                    "phValue": "",
                    "type": "yw",
                    "value": "37",
                    "xlValue": ""
                }, {
                    "dataTime": "2017-06-29 14:00:00",
                    "date": "2017-06-29",
                    "hour": 14,
                    "mbValue": "",
                    "phValue": "",
                    "type": "gw",
                    "value": "37.5",
                    "xlValue": ""
                }, {
                    "dataTime": "2017-06-29 18:00:00",
                    "date": "2017-06-29",
                    "hour": 18,
                    "mbValue": "",
                    "phValue": "",
                    "type": "kw",
                    "value": "37.4",
                    "xlValue": ""
                }, {
                    "dataTime": "2017-06-29 22:00:00",
                    "date": "2017-06-29",
                    "hour": 22,
                    "mbValue": "",
                    "phValue": "",
                    "type": "kw",
                    "value": "36.8",
                    "xlValue": ""
                }],

                // 呼吸数据
                "hzfx": [
                    {
                        "dataTime": "2017-06-29 14:00:00", // 位置根据此时间
                        "date": "2017-06-29",
                        "hour": 14,
                        "mbValue": "",
                        "phValue": "",
                        "type": "",
                        "value": "66",
                        "xlValue": ""
                    }, {
                        "dataTime": "2017-06-29 18:00:00",
                        "date": "2017-06-29",
                        "hour": 18,
                        "mbValue": "",
                        "phValue": "",
                        "type": "",
                        "value": "66",
                        "xlValue": ""
                    },{
                        "dataTime": "2017-06-29 22:00:00",
                        "date": "2017-06-29",
                        "hour": 22,
                        "mbValue": "",
                        "phValue": "",
                        "type": "",
                        "value": "68",
                        "xlValue": ""
                    }],
                // 未用到
                "respiratorDatas": [{
                    "dataTime": "2017-06-29 14:00:00",
                    "date": "2017-06-29",
                    "hour": 14,
                    "mbValue": "",
                    "phValue": "",
                    "type": "",
                    "value": "66",
                    "xlValue": ""
                }, {
                    "dataTime": "2017-06-29 18:00:00",
                    "date": "2017-06-29",
                    "hour": 18,
                    "mbValue": "",
                    "phValue": "",
                    "type": "",
                    "value": "66",
                    "xlValue": ""
                }
                ]
            },// 时间段录入信息
            loading: false,
            PageCount: 0,
            PageIndex: 0
        }
    }
    getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    };

    componentDidMount() {
        let {PageIndex, PageCount} = this.state;
        let IsLast7Days = 1;
        this.fetchData(PageIndex, IsLast7Days);
    }

    //componentWillReceiveProps(nextProps, nextState) {
    //    if (nextProps.data !== nextState.data) {
    //        this.setState({
    //            data: nextProps.data,
    //            beginDate: nextProps.data.clinicDate,
    //        })
    //    }
    //    let {beginDate, data} = this.state;
    //    this.fetchData(data, beginDate);
    //}

    formatJson(data) {
        if(data){
            data.pointTime.hzfx.forEach((el) => {
                            el.value = parseInt(el.value) + ''
                    })
        }
        return data;
    }

    /* 请求患者体温单数据 */
    fetchData = (PageIndex,IsLast7Days) => {
        let VisitNumber = this.getUrlParam('VisitNumber');
        axios("http://localhost:10574/Temperatrue/GetThermometerByPage", {
            method: "POST",
            params:{
                VisitNumber:VisitNumber || '100001',
                IsLast7Days: 0,
                PageIndex:PageIndex
            }
        }).then(response => {
            if (response) {
                response = response.data;
                let data = this.formatJson(response.AppendData);
                this.setState({
                    patientList: data.patientList || {},
                    beginDate: data.beginDate,
                    dayOps: data.dayOps || [],
                    dayList: data.dayList || [],
                    breathingList: data.breathingList || [],
                    dayMap: data.dayMap || {},
                    pointTime: data.pointTime || {},
                    loading: false,
                    PageCount: data.PageCount,
                    PageIndex: data.PageIndex
                })
            } else {
                this.setState({
                    loading: false
                });
                throw new Error(response.message);
            }
        }).catch((err) =>{
            console.log(err)
        });
    }
    /**
     * 改变开始时间
     */
    changeBeginDay = (PageIndex,IsLast7Days) => {
        this.fetchData(PageIndex, IsLast7Days);
    }

    render() {
        let {loading, data, beginDate, patientList, dayOps, breathingList, dayList, dayMap, pointTime, PageCount,
       PageIndex} = this.state;
        return (
            <TemperatureChart
                beginDate={beginDate}
    hospital={data.hspName}
    patientList={patientList}
    dayOps={dayOps}
    breathingList={breathingList}
    dayList={dayList}
    dayMap={dayMap}
    pointTime={pointTime}
    changeBeginDay={this.changeBeginDay}
    loading={loading}
    PageCount={PageCount}
    PageIndex={PageIndex}
    />
    )
    }
    }