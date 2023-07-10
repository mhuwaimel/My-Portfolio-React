import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeDark from '../views/HomeDark';
import NotFound from '../views/NotFound';
import SmoothScroll from './../utils/SmoothScroll';
import ImageSlider from '../components/portfolio/modal/ImageSlider';

const Routing = () => {
  return (
    <>
      <Router>
        <SmoothScroll>
          <Routes>
            <Route path='/' element={<HomeDark />} />
            <Route path='*' element={<NotFound />} />
          
          </Routes>
        </SmoothScroll>
      </Router>
    </>
  );
};

export default Routing;
