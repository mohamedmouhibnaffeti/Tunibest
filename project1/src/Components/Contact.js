import './Contact.css'
function Contact(){
    return(
        <div className='BigContainer'>
            <div className='containerAbout'>
            <h2 id='AboutText'>About Me</h2>
            <p id='AboutMe'>Email Adress :<br></br> ~ mouhamednaffeti77@gmail.com ~</p>
            <p id='AboutMe'>Phone Number :<br></br> ~ 92144354 ~</p>
            <p id='AboutMe'>Fax :<br></br> ~ XXX-XXX-XXXX-XXX ~</p>
            <p id='AboutMe'>You'll find me here :</p>
            <div style={{marginLeft:'27%',marginTop : '10px'}}>
            <a href="https://www.facebook.com" className='h3'><i id='links' class="fa fa-facebook-square" aria-hidden="true"></i></a>
            <a href="https://linkedin.com" className='h4'><i id='links' class="fa fa-linkedin-square" aria-hidden="true"></i></a>
            <a href="https://instagram.com" className='h5'><i id='links' class="fa fa-instagram" aria-hidden="true"></i></a>
            <a href="https://github.com/mohamedmouhibnaffeti/Mohamed_Mouhib_Naffeti" className='h6'><i id='links' class="fa fa-github-square" aria-hidden="true"></i></a>
            </div>
            <div className='vertical-line'></div>
            </div>
            <div className='container12'>
                <div className='Contact'>
                    <h1 id='Con'>Contact Us</h1>
                    <input id='tex' type='email' placeholder='Full Name'/><i id='i' class="fa fa-user" aria-hidden="true"></i><br></br><br></br>
                    <input id='tex' type='email' placeholder='Email Adress'/><i id='i' class="fa fa-envelope" aria-hidden="true"></i><br></br><br></br>
                    <input id='desc' type='text' placeholder='Your Message'/><i id='i' class="fa fa-commenting" aria-hidden="true"></i><br></br><br></br><br></br>
                    <input id='bt' type='button' value='Send'/><br></br><br></br>
                </div>
                <div id='C'></div>
            </div>
        </div>
    );
}
export default Contact;