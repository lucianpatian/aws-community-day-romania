import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import slugify from 'slugify';

import MENUS from 'constants/menus';
import LogoAWS from 'icons/community-day-logo.png';

import Burger from '../burger';
import Button from '../button';
import Link from '../link';

const Header = ({ isMobileMenuOpen, onBurgerClick, additionalClassName, homepage }) => {
  const getAnchor = (str) => slugify(str).toLocaleLowerCase();

  const handleAnchorClick = (e) => {
    e.preventDefault();
    document
      .getElementById(getAnchor(e.target.firstChild.data))
      .scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={clsx(
        'safe-paddings transition-200 z-10 transition-colors',
        isMobileMenuOpen ? 'bg-black bg-opacity-100' : '',
        additionalClassName
      )}
    >
      <div className="container flex items-center justify-between py-5">
        <Link className="z-50" to="/" ariaLabel="Go to Homepage">
          <img className="w-44" src={LogoAWS} alt="LogoAWS" />
        </Link>
      
        <nav>
          <ul className="flex md:hidden">
            {MENUS.header.map(({ text, to, homeTo }, index) => (
              <li key={index}>
                {homepage && homeTo ? (
                  <Button to={homeTo} theme="link" onClick={handleAnchorClick}>
                    {text}
                  </Button>
                ) : (
                  <Button to={to} theme="link">
                    {text}
                  </Button>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <Burger
          className={clsx('z-50 hidden md:block', isMobileMenuOpen && 'text-black dark:text-black')}
          isToggled={isMobileMenuOpen}
          onClick={onBurgerClick}
        />
      </div>
    </header>
  );
};

Header.propTypes = {
  isMobileMenuOpen: PropTypes.bool,
  onBurgerClick: PropTypes.func.isRequired,
  additionalClassName: PropTypes.string,
  homepage: PropTypes.bool,
};

Header.defaultProps = {
  isMobileMenuOpen: false,
  additionalClassName: null,
  homepage: false,
};

export default Header;
