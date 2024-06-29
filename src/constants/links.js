import slugify from 'slugify';

const getAnchor = (str) => slugify(str).toLocaleLowerCase();

export default {
  // Pages and sections
  home: {
    to: '/',
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
  privacy: {
    to: '/imprint-and-data-privacy',
    target: '_blank',
  },
  conduct: {
    to: '#',
    target: '_blank',
  },

  // Social-links
  linkedin: {
    to: '#',
    target: '_blank',
  },
  googlemaps: {
    to: 'https://maps.app.goo.gl/tQtK4h1DwE6XiuwaA',
    target: '_blank',
  },
  youtube: {
    to: '#',
    target: '_blank',
  },
};
