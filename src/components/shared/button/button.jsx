import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';

const styles = {
  base: 'inline-flex items-center justify-center !leading-none text-center whitespace-nowrap rounded transition-[colors, opacity] duration-200 outline-none font-bold text-[18px]',
  size: {
    md: 'h-10 px-6 py-[18px]',
    sm: 'h-8 px-4 py-[8px] text-sm',
    xs: 'text-sm',
  },
  theme: {
    primary:
      'bg-orange hover:bg-gradient-45 hover:from-orange hover:via-pink hover:to-orange text-white hover:text-white hover:scale-105 rounded-full',
    link: 'text-primary-1',
  },
};

const Button = ({ className: additionalClassName, to, size, theme, children, ...otherProps }) => {
  const className = clsx(
    styles.base,
    styles.size[size ?? 'md'],
    styles.theme[theme ?? 'primary'],
    additionalClassName
  );

  const Tag = to ? Link : 'button';

  return (
    <Tag className={className} to={to} {...otherProps}>
      {children}
    </Tag>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(styles.size)),
  theme: PropTypes.oneOf(Object.keys(styles.theme)),
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  className: null,
  to: null,
  size: null,
  theme: null,
};

export default Button;
