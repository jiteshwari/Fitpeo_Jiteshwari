import React from 'react'

import { LuBadgePercent } from "react-icons/lu";
import { MdOutlineLiveHelp } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";


import { LiaWalletSolid } from "react-icons/lia";

import {  TbHexagonLetterO, TbSquareKey, TbUserSquareRounded, } from "react-icons/tb";

import { AiFillCodeSandboxSquare } from "react-icons/ai";

 

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <TbHexagonLetterO  className='icon_header'/> Dashboard
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item '>
                <a href="">
                    <TbSquareKey className='icon'/> Dashboard 
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <AiFillCodeSandboxSquare className='icon'/> Products <IoIosArrowForward className='arrow'/>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <TbUserSquareRounded className='icon'/> Customers <IoIosArrowForward className='arrow'/>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <LiaWalletSolid className='icon'/> Income <IoIosArrowForward className='arrow'/>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <LuBadgePercent className='icon'/> Promote  <IoIosArrowForward className='arrow'/>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <MdOutlineLiveHelp className='icon'/> Help  <IoIosArrowForward className='arrow'/>
                </a>
                
            </li>
             
        </ul>
    </aside>
  )
}

export default Sidebar
