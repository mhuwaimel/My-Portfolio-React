import React, { useState } from 'react';
import lightImage from '../../assets/img/arabic.png';
const LanguageSwitch = () => {

    
    const [Language, setLanguage] = useState('arabic');
    const language = Language ? 'arabic' : 'english';
    const[Content,setContent]=useState([])
   
    const handleLanguageSwitch = () => {
   

      if (language=='arabic') {
        
        setLanguage('arabic');
        console.log(Language);
      } else {
           setLanguage('english');
           console.log(Language);
        
      }
    
    };
    return (
      <>
      <label className={`language-switcher-label d-flex  ${Language ? 'active' : ''}`}>
        <input
          type='checkbox'
          onClick={handleThemeSwitch}
          className='theme-switcher'
        />
        <div className='switch-handle'>
          <span className='light-text'>
            <img src={lightImage} alt='swicher' className='filter_1' />
          </span>
          <span className='dark-text'>
            <i className='fa fa-language' aria-hidden='true'></i>
          </span>
        </div>
      </label>
   
      
      </>
    );
  };
  
  export default LanguageSwitch;
  