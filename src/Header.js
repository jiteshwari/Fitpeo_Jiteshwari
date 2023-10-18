import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            Hello Shahrukh
           
        </div>
        <div className='header-right'>




<div class="input-group">
      <div class="input-group-prepend">     
      
      {/* <span className="input-group-text"  > <BsSearch  className='icon'/></span> */}
      {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" />   */}

      <lable>
              <AiOutlineSearch  /> <input   className='search' placeholder="Search" style={{ border: "none"}}   />
            </lable>

        </div>
            {/* <BsFillBellFill className='icon'/>
            <BsFillEnvelopeFill className='icon'/>
            <BsPersonCircle className='icon'/> */}
             </div>
        </div>
    </header>
  )
}

export default Header
