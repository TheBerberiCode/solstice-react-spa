import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './Chart';

class App extends Component {
  constructor() {
    super();
    this.state = {
      bills: [],
        savings: [],
      currentPage: 1,
      billsPerPage: 1,
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    };
      
    fetch('https://api.myjson.com/bins/125dgk')
        .then(response => response.json())
        .then(data =>  this.setState({"bills":data})).catch(error => console.log(error))
      
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }
    
    
        
    sortData(){
        let data = this.state.bills;
        let arrangedSavings = [];
        let amountPaid = [];
        
        for(let i=data.length-1;i>=0;i--){
            if(data[i].savings !== null){
                arrangedSavings.push(data[i].savings)
                amountPaid.push(data[i].bill)
            }
                
        }
        this.state.savings = arrangedSavings;
        this.state.billsPaid = amountPaid;
        
    }
        

  render() {
      this.sortData();

    const { bills, currentPage, billsPerPage } = this.state;
    const indexOfLastBill = currentPage * billsPerPage;
    const indexOfFirstBill = indexOfLastBill - billsPerPage;
    const currentBills = bills.slice(indexOfFirstBill, indexOfLastBill);

    const renderBills = currentBills.map((bill) => {
      return [
          
          
        <div className="row">
    <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title"><b>Name</b></h4>
            <p className="card-text">John Doe</p>
          </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h4 className="card-title"><b>Year</b></h4>
        <p className="card-text">{bill.year}</p>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h4 className="card-title"><b>Month</b></h4>
        <p className="card-text">{this.state.months[bill.month-1]}</p>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h4 className="card-title"><b>KWH</b></h4>
        <p className="card-text"> {bill.kwh}</p>
      </div>
    </div>
  </div>
    <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h4 className="card-title"><b>Amount due</b></h4>
        <p className="card-text">{bill.bill}</p>
      </div>
    </div>
  </div>
    <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title"><b>Savings this month</b></h4>
            <p className="card-text">{bill.savings}</p>
          </div>
    </div>
  </div>

</div>
    ]});

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(bills.length / billsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
            className="page-link"
        >
          {number}
        </li>
      );
    });

    return (
      <div>
            
        <ul>
        <nav className="navbar navbar-light bg-light">
  <a className="navbar-brand" href="#"> <h2>Solstice Utility Bill</h2></a>
</nav>
          {renderBills}
            <br></br>
        </ul>
        <ul id="page-numbers">
          {renderPageNumbers}
        </ul>
        
        <Chart billData={this.state.bills} savings={this.state.savings} billsPaid={this.state.billsPaid} />
      </div>
    );
  }
}

 export default App;