import ResumData from '../../Data/ResumData'
const experienceContent = [
  {
    year: '   2018 - Present',
    position: ' Web Developer, Marketing Team Manager',
    compnayName: 'Private Entrepreneur',
    details: `  Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore
        adipisicing elit`,
  },
  {
    year: '2017 - 2018',
    position: ' Tech Support',
    compnayName: 'Aurora Technologies',
    details: `Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol
        elit, tempor incididunt`,
  },
  {
    year: '2015 - 2017',
    position: 'Private Entrepreneur',
    compnayName: 'Private Entrepreneur',
    details: `Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur
        elit, sed do eiusmod tempor duntt`,
  },
];

const Experience = () => {
  return (
    <ul className=''>
      {ResumData.map((value, i) => (
        <li key={i}>
          <div className='icon'>
            <i className='fa fa-briefcase'></i>
          </div>
          <p className='time changaFont  text-uppercase'>
            {value.Start} - {value.EndJob}
          </p>
          <h2 className='changaFont'>
            {value.position}
            
          </h2>
          <p className='place text-2xl ibmfont'>{value.Place} - {value.Description}</p>
          <p className='open-sans-font'>{value.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
