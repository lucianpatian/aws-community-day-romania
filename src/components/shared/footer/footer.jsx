import React from 'react';
import slugify from 'slugify';

import LINKS from 'constants/links.js';
import MENUS from 'constants/menus';
import GoogleMaps from 'icons/google-maps-icon.inline.svg';
import LinkedIn from 'icons/linkedin-logo.inline.svg';
import Logo from 'icons/logo.inline.svg';
import Youtube from 'icons/youtube.inline.svg';

import Button from '../button';
import Link from '../link';

const socialMediaIcons = [
  { icon: LinkedIn, iconClassName: 'w-4', url: LINKS.linkedin.to },
  { icon: GoogleMaps, iconClassName: 'w-4', url: LINKS.googlemaps.to },
  { icon: Youtube, iconClassName: 'w-4 pt-1', url: LINKS.youtube.to },
];

const Footer = () => {
  const handleAnchorClick = (e) => {
    const getAnchor = (str) => slugify(str).toLocaleLowerCase();

    const id = getAnchor(e.target.firstChild.data);
    const element = document.getElementById(id);

    if (element) {
      const indent = 50;
      const elementTop = element.getBoundingClientRect().top;
      const elementOffset = window.pageYOffset + elementTop - indent;

      window.scrollTo({
        top: elementOffset,
        behavior: 'smooth',
      });
    }
  };
  return (
    <footer className="border-t border-t-gray-10 py-4">
      <div className="container flex items-center justify-between sm:flex-col sm:justify-around sm:gap-6">
        <Link to="/">
          <Logo className="h-8 w-44" />
        </Link>

        <nav className="flex flex-row gap-4 sm:flex-col">
          {MENUS.footer.map(({ text, to, target }, index) => (
            <Button
              key={index}
              className="flex-50"
              theme="link"
              size="xs"
              to={to}
              target={target}
              onClick={handleAnchorClick}
            >
              {text}
            </Button>
          ))}
        </nav>
        <div>
          <a
            href="mailto:organizers@kcdaustria.at"
            className="text-center w-full text-sm hover:scale-105"
          >
            organizers@kcdaustria.at
          </a>

          <div className="flex flex-row gap-4 justify-center items-center">
            {socialMediaIcons.map(({ icon, iconClassName, url }, index) => {
              const Icon = icon;
              return (
                <a key={index} href={url} target="_blank" rel="noreferrer">
                  <Icon className={`${iconClassName} hover:scale-110`} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
