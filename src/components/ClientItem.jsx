
import React from 'react';
import './ClientItem.css'

export default 
class ClientItem extends React.Component
{
    constructor(props)
    {
       // console.log('ClientItem constructor');
        super(props);
        this.state={};

    }
    deleteClient(event)
    {
        const id = event.target.id;
      //  alert("ID="+id);
        this.props.deleteClientById(id);

    }
    //const { firstname, lastname, email, amount, picture, isGoldClient } = props;
    componentDidMount()
    {
       // console.log('ClientItem componentDidMount');
    }
    componentDidUpate()
    {
      //  console.log('ClientItem componentDidUpdate');
    }
    render()
    {
        const {id, name, firstName, lastName, email, amount, picture, isGoldClient } = this.props;
       
        return (
            <div className="client-item">
                <h3>{id}</h3>
                {
                   ( name == null) 
                    ? <h2>{firstName +' '+ lastName}</h2>
                    : <h2>{name}</h2>
                   
                }              
                <p>{email}</p>
                <p>{amount}</p>
                <p><img src={picture} alt="poza profil" width="200" height="200"/></p>
                {
                    isGoldClient 
                        ? <p>CLIENT GOLD</p>
                        : null
                }
                <button id={id} onClick={ (event) => { this.deleteClient(event)} }>Sterge Client</button>
            </div>
        );
    }
    
}
