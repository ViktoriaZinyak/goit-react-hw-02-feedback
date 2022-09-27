import React from 'react';
import PropTypes from 'prop-types';
import { Sect, Title } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <Sect>
      <Title>{title}</Title>
      {children}
    </Sect>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
