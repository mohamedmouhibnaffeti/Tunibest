import './nav.css'
import { NavLink } from 'react-router-dom';
import {useRef, useEffect, useState} from 'react';
function Nav(props) {
  const NavLinkStyles = ({isActive}) =>{
    return{
      fontWeight : isActive ? 'normal' : 'bold',
      textDecoration : isActive ? 'underline' : 'none',
      color : 'antiquewhite',
      transition: '0.8s'
    }
    };
  const ref = useRef(null);
  const ref1 = useRef(null);
  const [btnstate, setBtnState] = useState("");
  function handleClick (){
      btnstate ? setBtnState("") : setBtnState("active");
      return btnstate;
  }
  useEffect(() => {
    // 👇️ use a ref (best)

    // 👇️ use document.querySelector()
    // should only be used when you can't set a ref prop on the element
    // (you don't have access to the element)
    const element = ref1.current;
    const element2 = ref.current;
    element.onclick = function(){
      if(handleClick()==="active"){
        element2.className = "change";
        console.log(element2.className);
      }
      else{
        element2.className = "nav-bar";
        console.log(element2.className);
      }
    }
  },);

  return (
    <div className="App">
      <header>
        <div className ="logo">Tunibest</div>
        <input type='text' placeholder='Search a movie by name...' id='s2'/>
        <div className="Films" ref={ref1}>  
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <nav className="nav-bar" ref={ref}>
          <ul>
            <li>
              <div className='h'>
                <i id='h1' className="fa fa-home" aria-hidden="true"></i>
                <NavLink style={NavLinkStyles} to='/'><b>Home</b></NavLink>
              </div>
            </li>
            <li>
            <i id='l1'className="fa fa-film" aria-hidden="true"></i>
            <NavLink style={NavLinkStyles} to='/Movies'><b>Movies</b></NavLink>
            </li>
            <li>
              <i id='l1' className="fa fa-envelope" aria-hidden="true"></i>
              <NavLink style={NavLinkStyles} to='/Contact'><b>Contact</b></NavLink>
            </li>
            <li>
              <div className='h'>
              {props.loggedin ? (<div><p style={{fontSize:'19px', cursor:'pointer',}}><i id='l1' class="fa fa-sign-out" aria-hidden="true"></i><b>Logout</b></p></div>) : (<div> <i id='l1' className="fa fa-user" aria-hidden="true"></i><NavLink style={NavLinkStyles} to='/Login'><b>Login</b></NavLink> </div>)}
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
  }
export default Nav;






