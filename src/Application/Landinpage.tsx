import React, { useContext } from 'react'
import { Context } from '../App'

const root = document.documentElement

const Landinpage: React.FunctionComponent = () => {

    const { ModeState, handleModeStatus } = useContext(Context)

    if (ModeState) {
        root.style.setProperty('--primaryColor', '#F3EFE0')
        root.style.setProperty('--Color', '#222222')
    } else {
        root.style.setProperty('--primaryColor', '#222222')
        root.style.setProperty('--Color', '#f7f7f8')
    }

    const BioContent = ["👋! Welcome to Vishnu's Bio", "I am Frontend Developer"]
    return (
        <div className='container'>
            <div className='headerContainer'>
                <div className={`buttonContainer ${ModeState && 'backgroundGreen'} `}>
                    <button className={`ModeButton ${ModeState && 'ModeButtonPosition'}`} onClick={() => handleModeStatus()}>
                    </button>
                </div>
            </div>
            <div className='contentContainer'>
                <div className='rollerMainContainer'>
                    <div className='RollingTextingContainer'>
                        {
                            BioContent.map((item, index) => (
                                <div className={`RollingText-${index}`}>
                                    <h1>{item}</h1>
                                </div>
                            ))
                        }
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landinpage