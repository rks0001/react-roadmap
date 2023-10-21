import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('/react-roadmap/beginner');
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    const newRoute = event.target.value;
    setSelectedOption(newRoute);
    navigate(newRoute);
  };

  return (
    <div>
      <select  className=' focus:outline-none font-bold text-lg bg-sky-200 p-2 my-2' value={selectedOption} onChange={handleSelectChange} >
        
        <option value='/' >React Zero to Hero</option>
          <option value='beginner'  >Beginner</option>
          <option value='beginner/intro-to-react'  >Intro to React</option>
          <option value='beginner/jsx'  >JSX</option>
          <option value='beginner/components'  >Components</option>
          <option value='beginner/props'  >Props</option>
          <option value='beginner/state'  >State</option>
          <option value='beginner/conditional-rendering'  >Conditional Rendering</option>
          <option value='intermediate' >Intermediate</option>
          <option value='intermediate/event-handling'  >Event Handling</option>
          <option value='intermediate/form-and-controlled-components'  >Form and Controlled Components</option>
          <option value='intermediate/list-and-keys'  >Lists and Keys</option>
          <option value='intermediate/component-composition'  >Component Composition</option>
          <option value='intermediate/react-router' >React Router</option>
          <option value='advanced'  >Advanced</option>
          <option value='advanced/hooks' >Hooks</option>
          <option value='advanced/context-api'  >Context API</option>
          <option value='advanced/redux'  >Redux</option>
          <option value='advanced/api-integration'  >API Integration</option>
          <option value='advanced/authentication-and-authorization'  >Authentication and Authorization</option>
      </select>
    </div>
  );
}

export default Dropdown;
