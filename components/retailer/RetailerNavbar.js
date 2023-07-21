import React, { useState } from 'react';
import Router from 'next/router';
import CreateWarranty from './CreateWarranty';

function Navbar() {
  const [activate, setActivate] = useState('createWarranty');
  const [state, setState] = useState({
    createWarranty: true,
    about: false
  });

  const handleLogout = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/logout`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    Router.push('/login');
  };

  const createWarranty = () => {
    setActivate('createWarranty');
    setState({ createWarranty: true });
  };

  return (
    <div>

      <nav className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className='flex'>
              <button
                className={`menu-item ${
                  activate === 'createWarranty' ? '' : 'font-bold text-gray-400'
                } px-3 py-2 text-sm font-medium`}
                onClick={createWarranty}
              >
                Create Warranty
              </button>
              <button
                className={`menu-item ${
                  activate === 'about' ? '' : 'font-bold text-gray-400'
                } px-3 py-2 text-sm font-medium`}
                onClick={()=>{
                  setActivate('about');
                  // setState({ about: true });
                }}
              >
                About
              </button>
            </div>
            <div className="flex items-center">
              <button
                className="text-gray-400 px-3 py-2 text-sm font-medium"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>



      {state.createWarranty && <CreateWarranty />}
    </div>
  );
}

export default Navbar;
