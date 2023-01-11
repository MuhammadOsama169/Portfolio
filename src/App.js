import { useEffect, useState } from 'react';
import useMediaQuery from './hooks/useMediaQuery';
import { Navbar } from './scenes/Navbar';
import { DotGroup } from './scenes/DotGroup';
import { Landing } from './scenes/Landing';
import { LineGradient } from './components/LineGradient';
import { MySkills } from './scenes/MySkills';

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const isAboveMediumScreens = useMediaQuery('(min-width:1080px)');

  const [IsTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage('home');
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        IsTopOfPage={IsTopOfPage}
      />
      <div className=" w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={selectedPage} />
      </div>
      <LineGradient />
      <div className=" w-5/6 mx-auto md:h-full">
        <MySkills />
      </div>
    </div>
  );
}

export default App;
