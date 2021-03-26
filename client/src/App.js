import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
import Navigation from './components/Navigation';
import FaceRecognition from './components/FaceRecognition';
import Logo from './components/Logo';
import ImageLinkForm from './components/ImageLinkForm'
import Rank from './components/Rank';
import './index.css';




class App extends Component {
    
  constructor(){
    super();
    this.state ={
      input: ''

    }
  }


  

 onInputChange = (e) =>{
    console.log(e.target.value);
  }


  onSubmitHandler= () =>{

  }

  
  
  
  render(){

      return (
        <div className="App">
           <Navigation/>
            <Logo/>
            <Rank />
            <ImageLinkForm  onSubmitHandler={this.onSubmitHandler}  onInputChange={this.onInputChange} />
            <FaceRecognition     />

        </div>
       
      
       
      )


    }



}





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

export default App;
