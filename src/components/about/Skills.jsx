import React from 'react';

const skillsContent = [
  { skillClass: 'p75', skillPercent: '75', skillName: 'HTML' },
  { skillClass: 'p75', skillPercent: '75', skillName: 'CSS' },
  { skillClass: 'p51', skillPercent: '51', skillName: 'JAVASCRIPT' },
  { skillClass: 'p15', skillPercent: '15', skillName: 'TYPESCRIPT' },
  { skillClass: 'p85', skillPercent: '85', skillName: 'WORDPRESS' },
  { skillClass: 'p15', skillPercent: '15', skillName: 'JQUERY' },
  { skillClass: 'p55', skillPercent: '55', skillName: 'REACT.JS' },
  { skillClass: 'p15', skillPercent: '15', skillName: 'NEXT.JS' },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((value, i) => (
        <div className='col-6 col-md-3 mb-3 mb-sm-5' key={i}>
          <div className={`c100 ${value.skillClass}`}>
            <span>{value.skillPercent}%</span>
            <div className='slice'>
              <div className='bar'></div>
              <div className='fill'></div>
            </div>
          </div>
          <h6 className='text-uppercase open-sans-font text-center mt-2 mt-sm-4'>
            {value.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
