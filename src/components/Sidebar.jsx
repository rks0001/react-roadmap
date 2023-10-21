import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  const [show, setShow] = useState(null);

  const handleShowClick = (links) => {
    setShow(links);
  };

  const sidelinks = [
    {
      id: 1,
      title: 'Beginner',
      url: '/react-roadmap/beginner',
    },
    {
      id: 2,
      title: 'Intermediate',
      url: '/react-roadmap/intermediate',
    },
    {
      id: 3,
      title: 'Advanced',
      url: '/react-roadmap/advanced',
    },
  ];

  const beginnerlinks = [
    {
      id: 1,
      title: 'Introduction to React',
      url: '/react-roadmap/beginner/intro-to-react',
    },
    {
      id: 2,
      title: 'JSX',
      url: '/react-roadmap/beginner/jsx',
    },
    {
      id: 3,
      title: 'Components',
      url: '/react-roadmap/beginner/components',
    },
    {
      id: 4,
      title: 'Props',
      url: '/react-roadmap/beginner/props',
    },
    {
      id: 5,
      title: 'State',
      url: '/react-roadmap/beginner/state',
    },
    {
      id: 6,
      title: 'Conditional Rendering',
      url: '/react-roadmap/beginner/conditional-rendering',
    },
  ];

  const interlinks = [
    {
      id: 1,
      title: 'Event Handling',
      url: '/react-roadmap/intermediate/event-handling',
    },
    {
      id: 2,
      title: 'Forms and Controlled Components',
      url: '/react-roadmap/intermediate/form-and-controlled-components',
    },
    {
      id: 3,
      title: 'Lists and Keys',
      url: '/react-roadmap/intermediate/list-and-keys',
    },
    {
      id: 4,
      title: 'Component Composition',
      url: '/react-roadmap/intermediate/component-composition',
    },
    {
      id: 5,
      title: 'React Router',
      url: '/react-roadmap/intermediate/react-router',
    },
  ];

  const advancedlinks = [
    {
      id: 1,
      title: 'Hooks',
      url: '/react-roadmap/advanced/hooks',
    },
    {
      id: 2,
      title: 'Context API',
      url: '/react-roadmap/advanced/context-api',
    },
    {
      id: 3,
      title: 'Redux',
      url: '/react-roadmap/advanced/redux',
    },
    {
      id: 4,
      title: 'API Integration',
      url: '/react-roadmap/advanced/api-integration',
    },
    {
      id: 5,
      title: 'Authentication and Authorization',
      url: '/react-roadmap/advanced/authentication-and-authorization',
    },
  ];

  return (
    <div className="  text-[#f0f0f0] bg-gradient-to-br from-blue-500 via-blue-400 to-blue-400  min-h-screen p-4 rounded-sm ">
      <ul>
        {sidelinks.map((link) => (
          <li key={link.id}>
            <Link
            className='text-[#f0f0f0]'
              to={link.url}
              onClick={() => {
                navigate(link.url);
                handleShowClick(link.title); // Set show to the title
              }}
            >
              {link.title}
            </Link>
            {show === link.title ? (
              <ul>
                {link.title === 'Beginner' ? (
                  beginnerlinks.map((sublink) => (
                    <li  className='px-3 text-sm' key={sublink.id}>
                      <Link to={sublink.url}>{"> " + sublink.title}</Link>
                    </li>
                  ))
                ) : link.title === 'Intermediate' ? (
                  interlinks.map((sublink) => (
                    <li className='px-3 text-sm' key={sublink.id}>
                      <Link to={sublink.url}>{"> " + sublink.title}</Link>
                    </li>
                  ))
                ) : link.title === 'Advanced' ? (
                  advancedlinks.map((sublink) => (
                    <li className='px-3 text-sm' key={sublink.id}>
                      <Link to={sublink.url}>{"> " + sublink.title}</Link>
                    </li>
                  ))
                ) : null}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
