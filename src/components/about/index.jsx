import Achievements from './Achievements';
import Education from './Education';
import Experience from './Experience';
import PersonalInfo from './PersonalInfo';
import Skills from './Skills';
import heroImg from '../../assets/img/hero/hero-1.png';

const index = () => {
  return (
    <section dir='rtl' className='main-content '>
      <div className='container'>
      

  


        {/* Experience & Education Starts */}
        <div className='row'>
         
          <div className='col-lg-12 '>
            <div className='resume-box'>
              <Experience />
            </div>
          </div>
         
        </div>
        {/*  Experience & Education Ends */}
      </div>
    </section>
  );
};

export default index;
