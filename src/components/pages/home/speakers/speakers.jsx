import React, { useEffect, useState } from 'react';
import Person from '../../../shared/person';

const Speakers = () => {
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

  return (
    <section className="safe-paddings container-md">
      <h1 id="speakers">Speakers</h1>
      {getSpeakers()}
    </section>
  );
};

export default Speakers;
