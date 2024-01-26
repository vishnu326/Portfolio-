import React, { useRef, useEffect, useState } from 'react'
import Typed from 'typed.js'
import Header from './Header';

const Landinpage: React.FunctionComponent = () => {
    const el = useRef(null)
    const [status, setStatus] = useState(true)
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [`Hi 👋, I'm Vishnu Sankar`, "I'm FullStack Developer"],
            typeSpeed: 100,
            backSpeed: 50,
            cursorChar: '|',
            onComplete: (self) => { setStatus(self.typingComplete) }
        });

        return () => {
            typed.destroy();
        };
    }, []);


    return (
        <div className='EntryContainer px-5'>
            {!status && <Header />}
            <div className='profilePic-container'>
                <div className='RoleContainer'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex  align-items-center'>
                            <main className='Role' ref={el}></main>
                        </div>
                    </div>
                </div>
                <div className='profilePic'></div>
            </div>
        </div>
    )
}

export default Landinpage
