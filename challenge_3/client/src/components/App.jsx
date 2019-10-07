import React from 'react';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step:0,
      name: '',
      email: '',
      password: '',
      addressLine1:'',
      addressLine2:'',
      city:'',
      state:'',
      zipCode:'',
      creditCardNumber:'',
      expiryDate:'',
      CVV:'',
      billingZipCode:'',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  ComponentDidMount(){

  }
  sendData(){
    Axios.post('/checkoutInfo',{
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      addressLine1: this.state.addressLine1,
      addressLine2: this.state.addressLine2,
      city: this.state.city,
      state: this.state.state,
      zipCode: this.state.zipCode,
      creditCardNumber: this.state.creditCardNumber,
      expiryDate: this.state.expiryDate,
      CVV: this.state.CVV,
      billingZipCode: this.state.billingZipCode
    })
    .then((res)=>{
      console.log(res)
      // this.setState({ step: (this.state.step+1)%3 })
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  handleInputChange(e){
    const field = e.target.name;
    const value = e.target.value;

    this.setState({[field]:value})
  }

  handleSubmit(e) {
    e.preventDefault();
    var step = this.state.step
    if(step === 2){
      this.sendData()
    }else{
      this.setState({ step: (step+1)%3 })
    }
  }


  render() {
    const steps = [
      Login,
      Address,
      CreditCard
    ]
    const Component = steps[this.state.step]

    return (
      <div>
        <Component formValues={this.state} handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}
function Login(props) {
  return (
    <form onSubmit={props.handleSubmit}>
    <label>
      Name:
      <input
        name='name'
        type='text'
        value={props.formValues.name}
        onChange={props.handleInputChange}/>
    </label>
    <br />
    <label>
      Email:
      <input
        name='email'
        type='text'
        value={props.formValues.email}
        onChange={props.handleInputChange}/>
    </label>
    <br />
    <label>
      Password:
      <input
        name='password'
        type='text'
        value={props.formValues.password}
        onChange={props.handleInputChange}/>
    </label>
    <br />
    <input type ='submit' value='Next'/>
  </form>
  )
}

function Address (props){
  return (
    <form onSubmit={props.handleSubmit}>
    <label>
      Address line 1:
      <input
        name='addressLine1'
        type='text'
        value={props.formValues.addressLine1}
        onChange={props.handleInputChange}/>
    </label>
    <br />
    <label>
      Address line 2:
      <input
        name='addressLine2'
        type='text'
        value={props.formValues.addressLine2}
        onChange={props.handleInputChange}/>
    </label>
    <br />
    <label>
      City:
      <input
        name='city'
        type='text'
        value={props.formValues.city}
        onChange={props.handleInputChange}/>
    </label>
    <br />
    <label>
      State:
      <input
        name='state'
        type='text'
        value={props.formValues.state}
        onChange={props.handleInputChange}/>
    </label>
    <br />
    <label>
      Zip Code:
      <input
        name='zipCode'
        type='text'
        value={props.formValues.zipCode}
        onChange={props.handleInputChange}/>
    </label>
    <br />
    <input type ='submit' value='Next'/>
  </form>
  )
}

function CreditCard(props) {
  return (
    <form onSubmit={props.handleSubmit}>
    <label>
      Credit card number:
      <input
        name='creditCardNumber'
        type='text'
        value={props.formValues.creditCardNumber}
        onChange={props.handleInputChange}/>
    </label>
    <br />
    <label>
      Expiration date:
      <input
        name='expiryDate'
        type='text'
        value={props.formValues.expiryDate}
        onChange={props.handleInputChange}/>
    </label>
    <br />
    <label>
      CVV:
      <input
        name='CVV'
        type='text'
        value={props.formValues.CVV}
        onChange={props.handleInputChange}/>
    </label>
    <br />
    <label>
      Billing zipcode:
      <input
        name='billingZipCode'
        type='text'
        value={props.formValues.billingZipCode}
        onChange={props.handleInputChange}/>
    </label>
    <br />
    <input type ='submit' value='Purchase'/>
  </form>
  )
}

export default App;