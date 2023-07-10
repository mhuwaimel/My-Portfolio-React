const SocialShare = [
  {
    iconName: 'fa fa-github',
    link: 'https://github.com/mhuwaimel',
  },
  { iconName: 'fa fa-linkedin', link: 'https://sa.linkedin.com/in/mohammed-alhuwaimel' },
  { iconName: 'fa fa-instagram', link: 'http://instagram.com/mhuwaimel' },
  { iconName: 'fa fa-whatsapp', link: 'https://api.whatsapp.com/send?phone=+966505436532' },
];

const Social = () => {
  return (
    <ul className='social list-unstyled pt-1 mb-5'>
      {SocialShare.map((value, i) => (
        <li key={i}>
          <a href={value.link} target='_blank' rel='noreferrer'>
            <i className={value.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
