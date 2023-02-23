import a from './Movies/a1.jpg'
import b from './Movies/j.jpg'
import c from './Movies/p.jpg'
import d from './Movies/purgeE.jpg'
import './movies.css'
import RatingStars from './Stars'
import './Stars.css'
import Dropdown from './Dropdown.jsx'
import { useState } from 'react'
function Home(){
    const [selected, setSelected] = useState("");
    return(
        <>
        <div className='menuBar'>
            <Dropdown selected={selected} setSelected={setSelected} />
        </div>
            <h1>Featured Movies:</h1>
            <div className="Hom">
     <div class='im'>
        <img src={a} alt='' width='200px'/>
         <div class='txt'>
            <h2>Avengers Endgame</h2>
            <p>Release Year: 2018</p>
            <RatingStars/>
         </div>
    </div>
    <div class='im'>
        <img src={b} alt='' width='200px'/>    
         <h2>John wick</h2>
         <p>Release Year: 2013</p>
         <RatingStars/>
    </div>
    <div class='im'>
        <img src={d} alt=''width='200px'/>
        <h2>The purge</h2>
         <p>Release Year: 2013</p>
         <RatingStars/>
    </div>
    <div class='im'>
        <img src={c} alt=''width='200px'/>
        <h2>The purge</h2>
         <p>Release Year: 2013</p>
         <RatingStars/>
    </div>
    </div>
    <h1 style={{marginTop:'50px',}}>Latest Movies:</h1>
            <div className="Hom">
     <div class='im'>
        <img src={a} alt='' width='200px'/>
         <div class='txt'>
            <h2>Avengers Endgame</h2>
            <p>Release Year: 2018</p>
            <RatingStars/>
         </div>
    </div>
    <div class='im'>
        <img src={b} alt='' width='200px'/>    
         <h2>John wick</h2>
         <p>Release Year: 2013</p>
         <RatingStars/>
    </div>
    <div class='im'>
        <img src={d} alt=''width='200px'/>
        <h2>The purge</h2>
         <p>Release Year: 2013</p>   
         <RatingStars/>
    </div>
    <div class='im'>
        <img src={c} alt=''width='200px'/>
        <h2>The purge</h2>
         <p>Release Year: 2013</p>
         <RatingStars/>
    </div>
    </div>

        </>
    );
}
export default Home;