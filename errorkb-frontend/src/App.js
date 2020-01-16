import React,{Component} from 'react';
import './App.css';
import Loginscreen from './components/auth/loginscreen'

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      loginPage:[],
      uploadScreen:[]
    }
  };

  componentWillMount(){
    let loginPage =[];
    loginPage.push(<Loginscreen appContext={this} key={"login-screen"}/>);
    this.setState({
      loginPage:loginPage
    })
  }

  render() {
    return (
        <div className="App">
          {this.state.loginPage}
          {this.state.uploadScreen}
        </div>
    )
  }
}

export default App;
