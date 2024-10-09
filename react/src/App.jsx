import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

function App() {

    return (
        <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
            <Header />
            <div className="flex-1 p-2 min-h-0 overflow-auto">
                <Outlet />
            </div>
            <footer />
        </div>
    );
}

export default App
