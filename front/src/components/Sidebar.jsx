import * as React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';
import '../App.css';
import './sidebar.css';
import {
  UserCircleIcon,
  CalendarIcon,
  HomeIcon
} from '@heroicons/react/24/outline'

export default function Sidebar({caseId}){
    const [menuExtended, setMenuExtended]= useState(false);
    const handleOpenMenu = () => setMenuExtended(true);
    const handleCloseMenu = () => setMenuExtended(false);
    const menuVisibility = (menuExtended) ? "block" : "hidden";
    return (
        <>
        <div className='sidebar flex flex-row w-fit py-1 h-dvh space-y-1'>
            <div>
                <ul onMouseEnter={handleOpenMenu} onMouseLeave={handleCloseMenu}>
                    <li>
                        <Link className='sideLink flex flex-row items-center space-x-2 text-decoration-none' to={`/lawyer/case-info/${caseId}`}>
                            {(menuExtended)? <Icon.FolderFill className='h-4 w-4 inline-block'/>
                            : <Icon.Folder2Open className='h-4 w-4 inline-block'/>
                            }
                            <p className={`${menuVisibility}`}>Proceso</p>
                        </Link>
                    </li>
                    <li>
                        <Link className='sideLink flex flex-row items-center space-x-2 text-decoration-none' to={`/lawyer/event-dashboard/${caseId}`}>
                            {(menuExtended)? <Icon.Grid3x2GapFill className='h-4 w-4 inline-block'/>
                            : <Icon.Grid3x2Gap className='h-4 w-4 inline-block'/>
                            }
                            <p className={`${menuVisibility}`}>Eventos</p>
                        </Link>
                    </li>
                    <li>
                        <Link className='sideLink flex flex-row items-center space-x-2 text-decoration-none' to={`/lawyer/evidence-dashboard/${caseId}`}>
                                {(menuExtended)? <Icon.FileMedicalFill className='h-4 w-4 inline-block'/>
                            : <Icon.FileMedical className='h-4 w-4 inline-block'/>
                            }
                            <p className={`${menuVisibility}`}>Evidencias</p>
                        </Link>
                    </li>
                    <li>
                        <Link className='sideLink flex flex-row items-center space-x-2 text-decoration-none' to={`/lawyer/observation-dashboard/${caseId}`}>
                            {(menuExtended)? <Icon.JournalBookmarkFill className='h-4 w-4 inline-block'/>
                            : <Icon.Journal className='h-4 w-4 inline-block'/>
                            }
                            <p className={`${menuVisibility}`}>Observaciones</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}