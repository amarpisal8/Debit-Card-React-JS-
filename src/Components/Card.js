import React from 'react'
import '../index.css';
import { useState } from 'react';

function Card() {

const[acNumber,setAcNumber]=useState("");
const[acName,setacName]=useState("") ;   
const [exMonth,setExMonth]=useState("12");
const [exYear,setExYear]=useState("2030");
const [cvv,setCvv]=useState("");

 const handleAcName=(e)=>{
    setacName(e.target.value.replace(/[^A-Z] /ig,''));
 }

 const handleAcNum=(e)=>{
    let acNumber = e.target.value;
      setAcNumber(acNumber);
    }

 const handleCvv=(e)=>{
      setCvv(e.target.value); 
    }

 const mouseEnter=()=>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
 }

 const mouseLeave=()=>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
 } 
  
   const handleSubmit=(e)=>{
   console.log(acNumber);
   console.log(acName);
   console.log(exMonth);
   console.log(exYear);
   console.log(cvv);
   e.preventDefault();
   }
   
  return (  
    <div className="container">

    <div className="card-container">

        <div className="front" >
            <div className="image">
                <img src="/Images/chip.png" alt=""/>
                <img src="Images/visa.png" alt=""/>
            </div>
            <div className="card-number-box" >{acNumber}</div>
            <div className="flexbox">
                <div className="box">
                    <span>card holder</span>
                    <div className="card-holder-name" >{acName}</div>
                </div>
                <div className="box">
                    <span>expires</span>
                    <div className="expiration">
                        <span className="exp-month">{exMonth}</span>/
                        <span className="exp-year">{exYear}</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="back">
            <div className="stripe"></div>
            <div className="box">
                <span>cvv</span>
                <div className="cvv-box">{cvv}</div>
                <img src="/images/visa.png" alt=""/>
            </div>
        </div>

    </div>
    <form action="" onSubmit={handleSubmit}>
        <div className="inputBox">
            <span>card number</span>
            <input type="text"  maxlength="16"  className="card-number-input"
             id="inputCardNum" onChange={handleAcNum}  />
        </div>
        <div className="inputBox">
            <span>card holder</span>
            <input type="text" className="card-holder-input" onChange={handleAcName}/>
        </div>
        <div className="flexbox">
            <div className="inputBox">
                <span>expiration mm</span>
                <select name="" id="" className="month-input" onChange={(e)=>setExMonth(e.target.value)}>
                    <option value="month" selected disabled>Month</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                </select>
            </div>
            <div className="inputBox">
                <span>expiration yy</span>
                <select name="" id="" class="year-input" onChange={(e)=>setExYear(e.target.value)}>
                    <option value="year" selected disabled>year</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                </select>
            </div>
            <div className="inputBox">
                <span>cvv</span>
                <input type="text" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} maxlength="3" className="cvv-input" onChange={handleCvv} name="cvv"/>
            </div>
        </div>
        <input type="submit" value="submit" className ="submit-btn"/>
    </form>

</div>   
    
  )
}

export default Card;
