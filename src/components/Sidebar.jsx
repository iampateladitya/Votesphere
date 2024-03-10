import React from 'react'

import 
{ BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import { CgLogOut } from "react-icons/cg";
 import { BiHelpCircle } from "react-icons/bi";
 import { FaList } from "react-icons/fa6";

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
            
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <Link to="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/candidate-registration">
                    <BsPeopleFill  className='icon'/> Add Candidate
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/candidate-list">
                    <BsListCheck className='icon'/> Candidate List
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/voters-list">
                    <FaList className='icon'/> Voter List
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/">
                    <BsMenuButtonWideFill className='icon'/> Election Status
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/help">
                    <BiHelpCircle className='icon'/> Help and Support
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/">
                    <BsFillGearFill className='icon'/> Setting
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/">
                    <CgLogOut className='icon'/> Log Out
                </Link>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar