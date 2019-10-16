import React, {Component} from 'react';
import axios from 'axios';
import {BootstrapTable, 
  TableHeaderColumn} from 'react-bootstrap-table';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  state = {
    customers:[]
  }
  componentDidMount(){
    this.getCustomers();
  }

  getCustomers = _ => {
      // fetch('http://localhost:3001')
      // .then(response => console.log(response))
      // .then(({response}) => this.setState({customers: 'response.customers'}))
      // .catch(error => console.log(error));
      axios.get('http://localhost:3001/')
      .then((data) => {
        console.log(data.data.customers);
        this.setState({customers: data.data.customers});
      })
      // .then(({response}) => this.setState({users: response.users}))
      .catch(error => console.log(error));
  }
  showCustomers = customer => <div key={customer.customer_id}>{customer.first_name}</div>;
  render() {
    const {customers} = this.state;
    return (
      <div className="App">
        {/* {customers.map(this.showCustomers)} */}
        <p className="Table-header">Customers List</p>
        <BootstrapTable data={this.state.customers}>
          <TableHeaderColumn isKey dataField='customer_id'>
            ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField='first_name'>
            First Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='last_name'>
            Last Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='email'>
            Email
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default App;
