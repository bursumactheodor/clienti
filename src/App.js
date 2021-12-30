
import './App.css';
import React from 'react';
import ClientsList from './components/ClientsList.jsx'
import PostsList from './components/PostsList';
import ClientAddForm from './components/ClientAddForm';

export default 
class App extends React.Component 
{
  constructor(props) 
  {
   // console.log('App costructor');
    super(props);
    this.state = {
      showClients:true,
      posts:[],
      clients:[],
      backgroundcolor:'white',
      fontcolor:'black'
    }

  }
  getMaxId2()
  {
    if(this.state.clients.length === 0)
          return 0;
    
    let max=0;  
    this.state.clients.forEach(client => {
          if(client.id >  max)
            max=client.id;
      });
    return max;
  }
  
  getMaxId()
  { 
      if(this.state.clients.length === 0)
          return 0;         
     const elem = this.state.clients.reduce( (x, y) =>  x.id > y.id ? x : y);       
     return elem.id; 
  }
  deleteClientById(id)
  {
    //console.log(id);
   const newClients = this.state.clients.filter((client) => {
     return Number(client.id) !== Number(id)});
  //console.log(newClients);
    this.setState((previousState) => {
     return {clients : newClients}
     });
 }
  updateClientsList(client)
  {  
   const maxid= this.getMaxId2();
   client.id = maxid+1;  
  
   this.setState((previousState) => {
       return { clients:[...previousState.clients,client]}
  });
  
  }
  componentDidMount()
  {
    //console.log('App ComponentDidMount');

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then( (response) => { 
          return response.json()  } )
    .then( (posts) => {
            const filteredPosts = posts.filter( (post) => post.id < 5)    
            this.setState({posts:filteredPosts});
           })

    fetch('https://jsonplaceholder.typicode.com/users')
    .then( (response) => {
        return response.json()} )
    .then((users) => {
      //console.log(users);
          const clienti = users.filter((user) => user.id < 5 )
          clienti.forEach( (client) => {
        client.isGoldClient=false;
        return client;
        })
      this.setState({clients:clienti});
    })
   
    
  }
  componentDidUpdate()
  {
   // console.log('App componentDidUpdate');
  }
  handleBackgroundChange(event)
  {
     const userBackground = event.target.value;
     this.setState({backgroundcolor:userBackground});
   
  }
  handleColorChange(event)
  { 
     const userColor = event.target.value;
     this.setState({fontcolor:userColor});
   
  }
  afiseazaClienti()
  {
   
    this.setState({showClients:true});
  }
  afiseazaPostari()
  {
   
    this.setState({showClients:false});
  }
  render()
  {
    //console.log('App Render');
    //console.log(this.state.showClients);
    return (
      <div className="app" style= {{background:this.state.backgroundcolor,color:this.state.fontcolor}}>
       <h1>CLIENTI-POSTARI</h1>

       <button  onClick={() => this.afiseazaClienti()}>Clienti</button>
       <button onClick={() => this.afiseazaPostari()}>Postari</button>

       {
         this.state.showClients 
         ? <ClientsList  deleteClientById={ (id) => {this.deleteClientById(id)}} clients={this.state.clients}/> 
         : <PostsList  posts={this.state.posts}/>  
       }
       
         
       <div  id="culori">
        
          <div>
            <label htmlFor="backColor" >Culoare fundal:</label>
            <input type="color" id="backColor" onChange = { (event) => this.handleBackgroundChange(event) }/> 
          </div>
          <div>
            <label htmlFor="fontColor" >Culoare font:</label>
            <input type="color" id="fontColor" onChange = { (event) => this.handleColorChange(event) }/>
          </div>
        </div>
        
        <ClientAddForm updateClientsList={ (client) => {this.updateClientsList(client)} }/>

      </div> 
      );
  }

}

