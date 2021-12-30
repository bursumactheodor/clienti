import React from "react";
import './ClientAddForm.css';

export default
class ClientAddForm extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
            firstName:'',
            lastName:'',
            email:'',
            amount:'',
            picture:'',
            isGoldClient:true
        };

    }
    handleFirstNameChange(event)
    {
        const inputValue = event.target.value;
        this.setState({firstName:inputValue});
        
    }
    handleLastNameChange(event)
    {
        const inputValue = event.target.value;
        this.setState({lastName:inputValue});
    }
    handleEmailChange(event)
    {
        const inputValue = event.target.value;
        this.setState({email:inputValue});
    }
    handleAmountChange(event)
    {
        const inputValue = event.target.value;
        this.setState({amount:inputValue});
    }
    handlePictureChange(event)
    {
        const inputValue = event.target.value;
        this.setState({picture:inputValue});
    }
    handleGoldClientChange(event)
    {
        const inputValue = event.target.checked;
        this.setState({isGoldClient:inputValue});
    }
    handleFormSubmit(event)
    {
        event.preventDefault();
        const newClient=
        {
            firstName: this.state.firstName,
            lastName:this.state.lastName,
            email:this.state.email,
            amount:this.state.amount,
            picture:this.state.picture,
            isGoldClient:this.state.isGoldClient             
        }
        this.props.updateClientsList(newClient);
    }
    render()
    {
        return (
            <form className="client-add-form" onSubmit={ (event)=>{this.handleFormSubmit(event)}}>
                <h2>Client nou:</h2>
            
                <label htmlFor="firstname" >Prenume:</label>
                <input type="text" name="firstname" value={this.state.firstName} required  onChange={(event)=>{this.handleFirstNameChange(event,'test')}}/>
               
                <label htmlFor="lastname" >Nume:</label>
                <input type="text" name="lastname" value={this.state.lastName} required onChange={(event)=>{this.handleLastNameChange(event)}}/>
              
                <label htmlFor="email" >Email:</label>
                <input type="email" name="email"  value={this.state.email} required onChange={(event)=>{this.handleEmailChange(event)}}/>
               
                <label htmlFor="amount" >Total vanzari:</label>
                <input type="text" name="amount" value={this.state.amount} required onChange={(event)=>{this.handleAmountChange(event)}}/>
                
                <label htmlFor="picture">Link poza profil:</label>
                <input type="text" name="picture" value={this.state.picture} onChange={(event)=>{this.handlePictureChange(event)}}/>
                
                <label htmlFor="gold-client" >Este Client Gold</label>
                <input type="checkbox" name="gold-client" checked={this.state.isGoldClient} onChange={(event)=>{this.handleGoldClientChange(event)}}/>
                
                <input type="submit" value="Adauga client" />
                


            </form>

        )

    }


}