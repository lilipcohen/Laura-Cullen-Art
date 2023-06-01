import React from 'react';
import FooterIcons from './FooterIcons';
import FooterCopyright from './FooterCopyright';
import FooterNav from './FooterNav';
import FooterRows from './FooterRows';
import FooterContainer from './FooterContainer';
import FooterClass from './FooterClass';
import '../../styles/Footer.css';

const Footer = (props) => {

  return (
    <div>
      <FooterClass>
        <FooterContainer>
          <FooterRows>
            <FooterNav />
            <FooterIcons />
          </FooterRows>
          <FooterCopyright />
        </FooterContainer>
      </FooterClass>
    </div>
  );
};

export default Footer;
