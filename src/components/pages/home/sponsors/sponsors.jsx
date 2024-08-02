import React from 'react';

import Button from 'components/shared/button';

import HaufeGroup from './logos/HGroup.svg';
import AwsCommunityDays from './logos/AwsCommunityDays.png';
// import Cncf from './logos/Cncf.png';
// import KcdMunich from './logos/KcdMunich.svg';
// import KcdZurich from './logos/KcdZurich.png';
// import MeetingDestinationVienna from './logos/MeetingDestinationVienna.svg';
// import KubeCareers from './logos/KubeCareers.webp';
// import KubeEvents from './logos/KubeEvents.webp';
// import RaiffeisenBankInternational from './logos/RaiffeisenBankInternational.png';
// import FullStacks from './logos/FullStacks.png';
// import Cloudpilots from './logos/Cloudpilots.png';
// import CloudWerkstatt from './logos/CloudWerkstatt.png';
// import NextLayer from './logos/NextLayer.webp';
// import NTS from './logos/NTS.png';
// import Exoscale from './logos/Exoscale.png';
// import Dynatrace from './logos/Dynatrace.png';
// import Splunk from './logos/Splunk.png';
// import Tigera from './logos/Tigera.png';
// import PorscheInformatik from './logos/PorscheInformatik.png';
// import Veeam from './logos/Veeam.png';

const sponsors = [
  {
    title: 'Diamond',
    sponsors: [
      { url: 'https://www.haufegroup.com/', logo: HaufeGroup },
    ],
  },
//  {
//    title: 'Silver',
//    sponsors: [
//    ],
//  },
  {
    title: 'Community',
    sponsors: [
      { url: 'https://aws.amazon.com/events/community-day/', logo: AwsCommunityDays },
    ],
  },
//  {
//    title: 'Media Partners',
//    sponsors: [
//    ],
//  },
];

const Sponsors = () => (
  <section className="safe-paddings container-md text-center">
    <h1 id="sponsors">Partners</h1>

    <p>
      Join us in making AWS Community Day Romania a memorable and impactful event for all attendees. To explore
      partnership opportunities, please don't hesitate to get in touch with us today. Your support
      will help us create an unforgettable experience for the community while enhancing your brand's
      visibility. <br />Contact us at{' '}
      <a
        href="mailto:contact@aws-community.ro"
        className="text-orange"
        target="_blank"
        rel="noreferrer"
      >
        {' '}
        contact@aws-community.ro{' '}
      </a>
    </p>
    <div className="mt-6 mb-12 flex flex-row justify-center gap-4 sm:flex-col">
    </div>

    {sponsors.map(({ title, sponsors }, index) => {
      // Randomly sort the sponsors array
      const sortedSponsors = [...sponsors].sort(() => Math.random() - 0.5);

      return (
        <div key={index}>
          <h2>{title}</h2>
          <div className="flex flex-row flex-wrap w-full justify-center mb-12 sm:gap-4">
            {sortedSponsors.map(({ logo, url, background }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                className="w-1/4 hover:scale-105 md:w-1/2 sm:w-5/6 px-6"
                rel="noreferrer"
              >
                <img
                  src={logo}
                  className="w-full h-[100px] object-contain rounded-md p-2"
                  style={{ background }}
                  loading="lazy"
                  alt="sponsor-logo"
                />
              </a>
            ))}
          </div>
        </div>
      );
    })}

  </section>
);
export default Sponsors;
