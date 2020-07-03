import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../images/LogoIcon';
import Button from '../Button';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <AnchorLink href="#intro">
        <div className="w-12 mr-3">
          <LogoIcon />
        </div>
        </AnchorLink>
        Friends of Gordon Cottage
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#about">
          About Us
        </AnchorLink>
        <AnchorLink className="px-4" href="#getinvolved">
          Get Involved
        </AnchorLink>
        <AnchorLink className="px-4" href="#feedback">
          Feedback
        </AnchorLink>
        <AnchorLink className="px-4" href="#contact">
          Contact
        </AnchorLink>
      </div>
      <div className="hidden md:block">
        <Button className="text-sm">Donate</Button>
      </div>
    </div>
  </header>
);

export default Header;
