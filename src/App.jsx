import { BrowserRouter as Router } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from './components/components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <Router>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-center bg-no-repeat'>
          <ToastContainer
            position="bottom-right" // Set position to bottom-center
            autoClose={1000} // Auto close after 5 seconds
            hideProgressBar={true} // Hide progress bar
            closeOnClick={true} // Close on click
            pauseOnHover={false} // Disable pause on hover
            draggable={false} // Disable dragging
            pauseOnFocusLoss={false} // Disable pause on focus loss
            style={{ pointerEvents: 'auto' }} // Ensure toasts can be interacted with
          />
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </Router>
  )
}

export default App
