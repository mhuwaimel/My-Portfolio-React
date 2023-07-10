import { useTranslation } from "react-i18next";
import{useState} from'react';
import lightImage from '../../assets/img/arabic.png';
import { t } from "i18next";
import i18n from "../../i18n";
const LanguageSwitcher = () => {

  const { i18n } = useTranslation();
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
   

function changeLanguage(e) {

    i18n.changeLanguage(Language);
    if (language=='arabic') {
     
      setLanguage('arabic');
      console.log(Language);

    } else {
     
      setLanguage('english');
      console.log(Language);
    
    }
  }
  return (
    <>
    <label className={`language-switcher-label d-flex  ${Language ? 'active' : ''}`}>
      <input
        type='checkbox'
        onClick={changeLanguage}
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
}
export default LanguageSwitcher