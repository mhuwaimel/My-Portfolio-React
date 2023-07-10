const achievementsContent = [
  { title: '4', subTitle1: 'years of', subTitle2: 'experience' },
  { title: '97', subTitle1: 'completed', subTitle2: 'projects' },
  { title: '81', subTitle1: 'Happy', subTitle2: 'customers' },
  { title: '53', subTitle1: 'awards', subTitle2: 'won' },
];

const Achievements = () => {
  return (
    <div className='row'>
      {achievementsContent.map((value, i) => (
        <div className='col-6' key={i}>
          <div className='box-stats with-margin'>
            <h3 className='poppins-font position-relative'>{value.title}</h3>
            <p className='open-sans-font m-0 position-relative text-uppercase'>
              {value.subTitle1}{' '}
              <span className='d-block'>{value.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
