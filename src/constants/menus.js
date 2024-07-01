import LINKS from 'constants/links.js';

const MENUS = {
  header: [
    { text: 'Call for Proposals', ...LINKS.cfp },
    { text: 'Tickets', ...LINKS.tickets },
    { text: 'Speakers', ...LINKS.speakers },
    { text: 'Schedule', ...LINKS.schedule },
    { text: 'FAQ', ...LINKS.faq },
    { text: 'Contact', ...LINKS.contact },
  ],
  footer: [
    { text: 'Code of Conduct', ...LINKS.conduct },
    { text: 'Team', ...LINKS.team },
    { text: 'Volunteer', ...LINKS.volunteer },
  ],
  mobile: [
    { text: 'Call for Proposals', ...LINKS.cfp },
    { text: 'Tickets', ...LINKS.tickets },
    { text: 'Speakers', ...LINKS.speakers },
    { text: 'Schedule', ...LINKS.schedule },
    { text: 'FAQ', ...LINKS.faq },
    { text: 'Contact', ...LINKS.contact },
  ],
};

export default MENUS;
