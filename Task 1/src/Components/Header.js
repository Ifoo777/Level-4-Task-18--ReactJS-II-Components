import logo from '../images/suitelogoOnly.png';

function Header () {
    return(
    
        <div>
        <header>
          <div className="gridHeader" >
            <div className="headerH3">
              <h2> BEST MENS CLOTHING </h2>
            </div>
            <div className="gridHeaderLogoButtons">
              <img src={logo} className="headerLogo" alt="logo" /> <button>TIES</button> <button>SUITS</button> <button className="rightButtonHeader">BELTS</button>
            </div>
            
          </div>
        </header>
      </div>
    
    )
    }

    export default Header