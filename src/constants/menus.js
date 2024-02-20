import LINKS from 'constants/links.js';

const MENUS = {
  header: [{ text: 'Sponsors', ...LINKS.sponsors }],
  footer: [
    { text: 'Code of Conduct', ...LINKS.conduct },
    { text: 'Team', ...LINKS.team },
    { text: 'Impressum & Data Privacy', ...LINKS.privacy },
  ],
  mobile: [
    { text: 'Speakers', ...LINKS.speakers },
    { text: 'Sponsors', ...LINKS.sponsors },
  ],
};

export default MENUS;
