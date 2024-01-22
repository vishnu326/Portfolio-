import React, { useRef, useEffect, useState } from 'react'
import { BiRightArrowAlt } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import Typed from 'typed.js'

const Landinpage: React.FunctionComponent = () => {
    const el = useRef(null)
    const [status, setStatus] = useState(true)
    const navigate = useNavigate()
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [`Hi 👋, I'm Vishnu Sankar`, "I'm FullStack Developer"],
            typeSpeed: 100,
            backSpeed: 50,
            cursorChar: '🧹',
            onComplete: (self) => { setStatus(self.typingComplete) }
        });

        return () => {
            typed.destroy();
        };
    }, []);


    return (
        <div className='container'>
            <div className='profilePic-container'>
                <div className='profilePic'></div>
                <div className='RoleContainer'>
                    <main className='Role' ref={el}></main>
                    {!status && <button className='round-Button' onClick={() =>navigate('/Home/main')}><BiRightArrowAlt size={'40px'} /></button>}
                </div>
            </div>
        </div>
    )
}

export default Landinpage