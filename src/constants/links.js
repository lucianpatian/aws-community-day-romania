import slugify from 'slugify';

const getAnchor = (str) => slugify(str).toLocaleLowerCase();

export default {
  // Pages and sections
  home: {
    to: '/',
  },
  whyAttend: { 
    to: `/#${getAnchor('Why Attend')}`, 
    id: `/#${getAnchor('Why Attend')}`, 
    homeTo: '/'
   },
  cfp: {
    to: `/#${getAnchor('Call for Proposals')}`,
    id: `/#${getAnchor('Call for Proposals')}`,
    homeTo: '/',
  },
  tickets: {
    to: `/#${getAnchor('Tickets')}`,
    id: `/#${getAnchor('Tickets')}`,
    homeTo: '/',
  },
  speakers: {
    to: `/#${getAnchor('Speakers')}`,
    id: `/#${getAnchor('Speakers')}`,
    homeTo: '/',
  },
  schedule: {
    to: `/#${getAnchor('Schedule')}`,
    id: `/#${getAnchor('Schedule')}`,
    homeTo: '/',
  },
  faq: {
    to: `/#${getAnchor('FAQ')}`,
    id: `/#${getAnchor('FAQ')}`,
    homeTo: '/',
  },
  contact: {
    to: `/#${getAnchor('Contact')}`,
    id: `/#${getAnchor('Contact')}`,
    homeTo: '/',
  },

  // Footer
  team: {
    to: '/team',
  },
  volunteer: {
    to: '/volunteer',
  },
  privacy: {
    to: '/imprint-and-data-privacy',
    target: '_blank',
  },
  conduct: {
    to: '/code-of-conduct',
  },

  // Social-links
  linkedin: {
    to: 'https://www.linkedin.com/company/103909731',
    target: '_blank',
  },
  googlemaps: {
    to: 'https://maps.app.goo.gl/tQtK4h1DwE6XiuwaA',
    target: '_blank',
  },
  // youtube: {
  //   to: '#',
  //   target: '_blank',
  // },
};
