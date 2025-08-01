import { useEffect, useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import Navbar from '../../components/NavBarReader.jsx';
import ReaderFooter from '../../components/readerFooter.jsx';

import '../../App.css'
export default function ReaderLayout()
{

    return (
        <>
            <div className="min-h-screen bg-blue-950 text-white py-10 px-4">
              <Navbar />
                <main>
                    <Outlet />
                </main>
                <footer>
                    <ReaderFooter/>
                </footer>
            </div>
        </>
    );
}