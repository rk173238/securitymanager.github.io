import React,{Component} from 'react';
import ReactEcharts from 'echarts-for-react';
import classes from './Donut.css';
import {Card,CardHeader} from 'material-ui/Card';
import Typography from '@material-ui/core/Typography';
import InfoButton from '../../InfoButton/InfoButton'

export default class Donut extends Component {
  getOption = ()=>{
    
    var placeHolderStyle = {
        normal:{
            label:{formatter: function (params){
                return params.name!=='other'?'\n'+(params.value).toFixed(0)+'%':''
                },
                position:'center',
                textStyle:{
                    fontWeight:400,
                    fontSize:30,
                    color:"white",
                },
                padding:[40,0,0,0]   
            },
            labelLine: {show:false},
            
            color: function(params) {
                // build a color map as your need.
                // console.log('asjdgajhsgdjha')
                var finalList=params.name==='other'?'rgba(255,255,255,0.2)':params.value<30?'rgb(205, 24, 24)':params.value<60?'yellow':'rgba(36, 176, 44,1)';
                return finalList;
            },
            
        },
        
        
    };
    return {
            tooltip:{
                trigger:'item'
            },
           
            calculable:true,
            series:
                {
                    type:'pie',
                    center:['50%', '50%'],
                    selectedMode:'single',
                    // label:{normal: {
                    //     show: false,
                    //     position: 'center'
                    // },},
                    itemStyle:placeHolderStyle,
                    // textColor:'red  ',
                    //itemStyle:labelShow,
                    data:[
                        {name:'Leakage', value:26},
                        {name:'other', value:74},
                        
                    ]
                },
                
                
                
            
        };
}
    getOpts = () => {
        // console.log(this.props.radius)
        let option= this.getOption();
        option.series.radius=this.props.radius
        option.series.data[0]=this.props.data
        option.series.data[1]={name:"other",value:100-this.props.data.value}
        //option.series.name=this.props.name;
        // option.series.data=this.props.dat;
        // option.tooltip.formatter= "{b} : {c}% devices "
        //option.toolbox.feature.saveAsImage.name=this.props.name;
        // console.log(option.series)
        return option;
      };
      onChartClick=(param, echarts) => {
        // console.log(param);
        //const categoryList=['opris','oprel','opeff'];
        //this.props.donutClick(this.props.mainName,this.props.subCatName,this.props.techName,param.seriesName,param.name,param);
        //this.props.clickHandler(categoryList[param.dataIndex])
    }
    render(){
        let onEvents = {
        'click': this.onChartClick
        
        }
        //console.log(this.getOpts())
        return (
  
            <div style={{width:"100%",marginLeft:"0%",backgroundColor:'transparent'}}>
                {/* <InfoButton description={this.props.data.name}></InfoButton> */}
                <ReactEcharts
                    option={this.getOpts()}
                    //className={classes.gauge}
                    className={classes.donut}
                    //onEvents={onEvents}
                    //opts={{renderer: 'svg'}}
                    
                    />
                <Typography style={{color:'#fff',fontSize:19,marginTop:'-10px',textAlign:'center'}}>{this.props.data.name}</Typography>                
             </div>
                
                 
        );
      }
    }
        