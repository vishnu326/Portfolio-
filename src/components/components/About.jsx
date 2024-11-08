import { Tilt } from "react-tilt"
import { motion } from 'framer-motion';

import { styles } from "../../style";
import { services } from '../../constants/index'
import { fadeIn, textVariant } from "../../utils/motion";
import { SectionWrapper } from "../../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className=" xs:w-[250px] w-full" options={{
      max: 45,
      scale: 1,
      speed: 450
    }}>
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div
          className=" bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`} >Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className=" mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        I build captivating and user-focused web experiences.  Leveraging my expertise in HTML, CSS, JavaScript, TypeScript, ReactJS, ThreeJS, and Framer Motion, I deliver highly performant and visually stunning interfaces.  As a highly efficient developer with a knack for rapid issue resolution, I ensure your project runs smoothly throughout the development process. <q className=" font-extrabold">Let's Work together to bring your ideas to life</q>.
      </motion.p>
      <div className=" mt-20 flex flex-wrap gap-10">
        {
          services.map((service, index) => {
            return <ServiceCard key={index} {...service} index={index} />
          })
        }
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");