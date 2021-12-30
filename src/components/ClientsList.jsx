import React from "react";
import ClientItem from "./ClientItem";

export default 
class ClientsList extends React.Component
{    
  //  const {clients} = props;
  constructor (props)
  {
     // console.log('ClientList constructor');
      super(props);
      this.state={};   
  }
  
  componentDidMount()
  {
     // console.log('ClientList componentDidMount');
  }
  copmponentDidUpdate()
  {
     // console.log('ClientList componentDidUpdate');
  }
    render()
    {
       // console.log('ClientList render');
       // console.log(this.props.clientMaxId(1));
      //  console.log(this.props.clients);
     // console.log(this.getMaxId(this.props.clients));
       
    return (
        <div> 
            <h2>Lista clienti:</h2>        
            {
               this.props.clients.map((client) => {
                    return   <ClientItem
                        id={client.id}
                        name={client.name}
                        firstName={client.firstName}
                        lastName={client.lastName}
                        email={client.email}
                        amount={client.amount}
                        picture={client.picture}
                        isGoldClient = {client.isGoldClient} 
                        key =  {client.id} 
                        deleteClientById={(id) => {this.props.deleteClientById(id)}}                                            
                    />                         
                })
            }
        </div>
        );
    }
}