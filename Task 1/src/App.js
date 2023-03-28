import './App.css';
import Header from './Components/Header';
import Landing from './Components/Landing';
import ProductDisplay from './Components/Products';

/*Welcome the user back message */
function UserIsLoggedIn(){
  return <div className="welcomeBackDiv">
    <h2>Welcome back</h2>
  </div>
}

/*Button for user to login */
function UserIsNotLoggedIn(){
  return <div className="loginButtonDiv">
    <button className="loginButton">Click here to Login or Signup</button>
  </div>
}

/* Greeting, based on logged in true or false which item to display using props */

function Greeting(props){
  const login = props.login;
  if (login === true){
    return <UserIsLoggedIn/>
  }else
  return <UserIsNotLoggedIn/>
}


/* App to return functions and variables */
const App = (props) => {
  const login = props.login;
  const products = props.products

  return(
    <div>
    <Header/>
    <Greeting login = {login}/>
    <Landing/>
    <ProductDisplay products = {products}/>
    </div>
  );
}

export default App;

