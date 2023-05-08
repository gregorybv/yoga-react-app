import React from 'react';

const Nav = () => {
  return (
    <nav className='ml-[70px]'>
      <ul className='flex gap-x-[42px]'>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='#courses'>Classes</a>
        </li>
        <li>
          <a href='#features'>Features</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
