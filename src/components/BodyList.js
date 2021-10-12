import React from 'react';
import { NavLink } from 'react-router-dom';


function BodyList() {
    const links = [
        {
          id: 1,
          path: '/',
          text: '<',
        },
        {
          id: 2,
          path: '/tanzania',
          text: 'Tanzania',
        },
        {
          id: 3,
          path: '/kenya',
          text: 'Kenya',
        },
        {
          id: 4,
          path: '/uganda',
          text: 'uganda',
        },
        {
          id: 3,
          path: '/rwanda',
          text: 'rwanda',
        },
      ];
  return (
    <div>
           <ul className="links">
        {links.map((link) => (
          <li key={link.id} className="link-item">
            <NavLink to={link.path}  exact>{link.text}</NavLink>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default BodyList;
