//import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import MovieList from './Components/MovieList';
//import Filter from './Components/Filter';
import Search from './Components/Search';

fetch('https://jsonplaceholder.typicode.com/posts').then((response) =>{
  response = response.json()
  response.then((result) => {
    console.log(result)
  })
})
class App extends Component {
  state = {
    post: {}
  }

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/posts').then((response) =>{
  response = response.json()
  response.then((result) => {
    this.setState({post : result})
     
  })  
})
}



  render() {
    return(
      <div className="App">
        
        <h1 
        style= {{backgroundColor:"#333",  color: "crimson"}}>Toutes les series senegalaises</h1>
        {(this.state.post.title)? this.state.post.title : <p>Chargement...</p>}
        <Search/>
        <MovieList/>
        
        
        
        
      </div>
    )
  }
}


export default App;
