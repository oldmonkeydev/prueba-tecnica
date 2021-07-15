import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

const url = "https://localhost:44373/api/Fpt/";

class App extends Component {
  state={
    data : [],
    modalInsert : false,
    modalDelete: false,
  form:{
    id: '',
    name: '',
    email: '',
    notes: '',
    tipoModal: ''
  }
}
  
  GetRequest=()=>{
    axios.get(url).then(response => {
      this.setState({data: response.data});
    }).catch(e => {
      console.log(e.message);
    })
  }
 
  PostRequest=async()=>{
    delete this.state.form.id;
   await axios.post(url,this.state.form).then(response=>{
      this.modalInsertRequest();
      this.GetRequest();
    }).catch(error=>{
      console.log(error.message);
    })
  }
  ModalInsertRequest=()=>{
    this.setState({modalInsert: !this.state.modalInsert});
  }
  DeleteRequest=()=>{
    axios.delete(url+this.state.form.id).then(response=>{
      this.setState({modalDelete: false});
      this.GetRequest();
    })
  }
  

  handleChange=async e=>{
    e.persist();
    await this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
    console.log(this.state.form);
  }

  componentDidMount(){
    this.GetRequest();
  }
  
  render(){
    const {form}=this.state;
  return (
    <div className="App">
      <br /><br /><br />
      <button className="btn btn-success" onClick={()=> this.ModalInsertRequest()}>Add Customer</button>
      <br></br>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map(customer => {
            return(
              <tr>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.notes}</td>
                <td>
                  <button className="btn btn-primary" onClick={() => this.DeleteRequest()}><FontAwesomeIcon icon={faTrashAlt}/></button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
       <Modal isOpen={this.state.modalInsert}>
                <ModalHeader style={{display: 'block'}}>
                  <span style={{float: 'right'}} onClick={()=>this.ModalInsertRequest()}>x</span>
                </ModalHeader>
                <ModalBody>
                  <div className="form-group">
                    <label htmlFor="id">ID</label>
                    <input className="form-control" type="text" name="id" id="id" readOnly onChange={this.handleChange} value={form?form.id: this.state.data.length+1}/>
                    <br />
                    <label htmlFor="name">Name</label>
                    <input className="form-control" type="text" name="name" id="name" onChange={this.handleChange} value={form?form.name: ''}/>
                    <br />
                    <label htmlFor="email">Email</label>
                    <input className="form-control" type="text" name="email" id="email" onChange={this.handleChange} value={form?form.email: ''}/>
                    <br />
                    <label htmlFor="notes">Notes</label>
                    <input className="form-control" type="text" name="notes" id="notes" onChange={this.handleChange} value={form?form.notes:''}/>
                  </div>
                </ModalBody>

                <ModalFooter>
                <button className="btn btn-success" onClick={()=>this.PostRequest()}>
                    Insertar
                  </button>
                    <button className="btn btn-danger" onClick={()=>this.ModalInsertRequest()}>Cancel</button>
                </ModalFooter>
          </Modal>
    </div>
  );
}
}

export default App;
