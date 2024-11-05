import React, { useState, useRef, FormEvent } from 'react'
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser'
import { styles } from '../../style';
import { SectionWrapper } from '../../hoc';
import { slideIn } from '../../utils/motion';
import { EarthCanvas } from './canvas';
import { toast } from 'react-toastify';


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target
    if (form)
      setForm({ ...form, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // emailjs.send('service_i00xyaq', 'template_02s13wj', {
    //   from_name: form?.name,
    //   to_name: 'vishnu',
    //   from_email: form?.email,
    //   to_email: 'vishnush326@gmail.com',
    //   message: form?.message
    // }, '9bZikacQzSpQ5oOVA'
    // ).then(() => {
    //   setLoading(false);
    //   alert('Thank You');
    //   setForm({
    //     name: '',
    //     email: '',
    //     message: ''
    //   })
    //   window.location.href = '/';

    // }).catch(() => {
    //   setLoading(false)
    //   setForm({
    //     name: '',
    //     email: '',
    //     message: ''
    //   })
    //   alert('something went wrong , sorry for the trouble')
    //   window.location.href = '/';
    // })
    toast.success('Message sent');
    setTimeout(() => {
      setTimeout(() => {
        setLoading(false);
      }, 2500)
    }, 2000)
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left', "tween", 0.25, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <p className={styles.sectionHeadText}>Contact.</p>
        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input type='text' name='name' placeholder="What's your name?" value={form?.name} className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg font-medium border-none outline-none' onChange={handleChange} />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input type='text' name='email' placeholder="What's your email?" value={form?.email} className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg font-medium border-none outline-none' onChange={handleChange} />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea rows={7} name='message' placeholder="What do want to say?" value={form?.message} className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg font-medium border-none outline-none' onChange={handleChange} />
          </label>
          <button type='submit' className=' bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl-4 rounded-md' >
            {loading ? 'sending' : 'send'}
          </button>
        </form>
      </motion.div>
      <motion.div variants={slideIn('right', "tween", 0.25, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact');