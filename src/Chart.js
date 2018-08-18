import React, {Component} from 'react';
import {Bar,Line} from 'react-chartjs-2';

class Chart extends Component {

    constructor(props){
        super(props);
        this.state= {

    }
    
    }
    render(){

        return(
            <div className="chart">
                
                <div >
                
                <Bar data={{labels: ['December 2016','January 2017','February 2017 ','March 2017','April 2017'],
                            datasets:[{
                                label:'Savings Over Time',
                                data:this.props.savings,
                                backgroundColor:[
                                    'rgba(255,99,132,0.6)',
                                    'rgba(255,99,132,0.6)',
                                    'rgba(255,99,132,0.6)',
                                    'rgba(255,99,132,0.6)',
                                    'rgba(255,99,132,0.6)'
                                ]}]}}
                options={{
                    maintainAspectRatio: false,
                    responsive : true
                    }}
                    
                />

                <Line
                    data={{labels: ['December 2016','January 2017','February 2017 ','March 2017','April 2017'],
                            datasets:[{
                                label:'Amount paid over time',
                                data:this.props.billsPaid,
                                backgroundColor:[
                                        'rgba(0, 255, 0, 0.3)'   
                                    ]}]}}
                    options={{maintainAspectRatio: false,
                        responsive : true}}
                    
                />
                
                </div>
            </div>
        )
    }


}

export default Chart;