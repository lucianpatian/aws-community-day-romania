import React from 'react';

import Person from '../../../shared/person';

import RaulGeana from './images/raul_geana.jpg';
import AlexandruBotici from './images/alexandru_botici.jpg';
import RobertColca from './images/robert_colca.jpg';

const Speakers = () => {
/* This is the initial implementation used for integration with sessionize.com

  const [speakers, setSpeakers] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('https://sessionize.com/api/v2/0vfanw5s/view/Speakers')
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setSpeakers(data);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, []);

  const getSpeakers = () => {
    if (error) {
      return <p>Failed to load speakers</p>;
    }

    if (loading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="flex flex-row flex-wrap gap-10 justify-center pt-4">
        {speakers.map(({ profilePicture, fullName, tagLine }, index) => (
          <Person name={fullName} tagLine={tagLine} picture={profilePicture} key={index} />
        ))}
      </div>
    );
  };
  */

  const speakers = [
    {
      fullName: 'Raul Geana',
      tagLine: 'Managing Director @ Haufe Group & Community Leader AWS User Group Timisoara',
      profilePicture: RaulGeana,
    },
    {
      fullName: 'Alexandru Botici',
      tagLine: 'Software Developer @ Tazz',
      profilePicture: AlexandruBotici,
    },
    {
      fullName: 'Robert Colca',
      tagLine: 'Algorithms & ML Lead @ Tazz',
      profilePicture: RobertColca,
    }
  ];

  return (
    <section className="safe-paddings container-md text-center">
      <h1 id="speakers">Speakers</h1>
      <p>Full list of speakers will be available soon.<br/>
        Here are some names that already confirmed their presence.</p>
      <div className="flex flex-row flex-wrap gap-10 justify-center pt-4">
        {speakers.map(({ profilePicture, fullName, tagLine }, index) => (
          <Person name={fullName} tagLine={tagLine} picture={profilePicture} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Speakers;
