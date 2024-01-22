import React, { useContext } from 'react'
import { Context } from '../App'
import { Outlet } from 'react-router-dom'
const root = document.documentElement

const Header = () => {

    const { ModeState, handleModeStatus } = useContext(Context)
    if (ModeState) {
        root.style.setProperty('--primaryColor', '#DDDDDD')
        root.style.setProperty('--Color', '#DA0037')
    } else {
        root.style.setProperty('--primaryColor', '#171717')
        root.style.setProperty('--Color', '#f7f7f8')
    }
    const HeaderContent = [{ id: 1, content: 'Home' }, { id: 1, content: 'About' }, { id: 1, content: 'Career' }, { id: 1, content: 'Projects' }, { id: 1, content: 'Contact Me' }]
    return (
        <div>
            <div className='headerContainer'>
                <div className='nav-container'>
                    <div className='nav-item-container'>
                        {HeaderContent.map((item, index) => {
                            return (
                                <div className='nav-item' key={`${item.content}-${index}`}>{item.content}</div>
                            )
                        })
                        }
                    </div>
                </div>
                <div className={`buttonContainer ${ModeState && 'backgroundGreen'} `}>
                    <button className={`ModeButton ${ModeState && 'ModeButtonPosition'}`} onClick={() => handleModeStatus()}>
                    </button>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default Header