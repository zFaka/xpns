import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { startLogout } from '../../actions/auth';

export const Navbar = () => {

    const dispatch = useDispatch();
    const { name } = useSelector( state => state.auth );

    const handleLogout = () => {
        dispatch( startLogout() );
    }

    return (
        <div>
            <span>
                { name }
            </span>
            
            <button 
                onClick={ handleLogout }
            >
                <span> Salir</span>
            </button>

        </div>
    )
}
