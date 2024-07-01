import clsx from 'clsx';
import { Link as GatsbyLink } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

// Example of the code — https://user-images.githubusercontent.com/20713191/144221096-1939c382-4ab8-4d28-b0e6-7bbe3a8f8556.png
const styles = {
  base: 'font-semibold inline-flex items-baseline leading-none transition-colors duration-200 group relative',
  // TODO: Add sizes. Better to write down all sizes and go from higher to lower, e.g. "xl", "lg", "md", "sm", "xs"
  //       The name of the size cannot be lower than the font size that being used, e.g. "sm" size cannot have font-size "xs"
  //       Check out an example by a link above for better understanding
  size: {},
  // TODO: Add themes. Better to name the theme using this pattern: "${color-name}-${theme-type}", e.g. "black-filled"
  //       If there is no dividing between theme types, then feel free to use just color names, e.g. "black"
  //       Check out an example by a link above for better understanding
  theme: {
    primary: 'text-primary-1 hover:text-blue-1',
    'blue-underlined':
      'text-blue-1 border-b-2 hover:border-blue-1 pb-0.5 border-transparent transition-colors duration-200',
  },
};

const Link = ({ className: additionalClassName, size, theme, to, children, ariaLabel, openInNewTab, ...props }) => {
  const className = clsx(
    size && theme && styles.base,
    styles.size[size],
    styles.theme[theme],
    additionalClassName
  );

  if (to.startsWith('/')) {
    return (
      <GatsbyLink className={className} to={to} {...props} aria-label={ariaLabel}>
        {children}
      </GatsbyLink>
    );
  }

  return (
    <a className={className} href={to} aria-label={ariaLabel} target={openInNewTab ? '_blank' : '_self'} {...props}>
      {children}
    </a>
  );
};

Link.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(styles.size)),
  theme: PropTypes.oneOf(Object.keys(styles.theme)),
  children: PropTypes.node.isRequired,
  ariaLabel: PropTypes.string,
  openInNewTab: PropTypes.bool,
};

Link.defaultProps = {
  className: null,
  to: null,
  size: null,
  theme: null,
  ariaLabel: '',
  openInNewTab: false
};

export default Link;
