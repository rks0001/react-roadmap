import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Hooks from './advanced/Hooks';
import ContextAPI from './advanced/ContextAPI';
import Redux from './advanced/Redux';
import Advanced from './advanced/Advanced';
import APIIntegration from './advanced/APIIntegration';
import Authentication from './advanced/Authentication';
import EventHandling from './intermediate/EventHandling';
import Intermediate from './intermediate/Intermediate';
import FormsandOther from './intermediate/FormsandOther';
import ListsandKeys from './intermediate/ListsandKeys';
import ComponentComposition from './intermediate/ComponentComposition';
import ReactRouter from './intermediate/ReactRouter';
import Beginner from './beginner/Beginner';
import Dropdown from '../components/Dropdown';
import LearnReact from './beginner/LearnReact';
import LearnJSX from './beginner/LearnJSX';
import Components from './beginner/Components';
import Props from './beginner/Props';
import State from './beginner/State';
import ConditionalRendering from './beginner/ConditionalRendering';
import ReactZeroToHundred from './ReactZeroToHundred';

const ReactRoadmap = () => {
  return (
    <div className='dark'>
<div className='dark w-10/12 mx-auto min-h-screen flex flex-col md:flex-row md:px-10'>
      <div className='hidden md:block w-full md:w-3/12 h-max md:h-full'>
        <Sidebar />
      </div>
      <div className='md:hidden ' >
        <Dropdown/>
      </div>
      
      <div className='w-full md:w-9/12 h-full'>
        <Routes>
          <Route path='/' element={<div><ReactZeroToHundred/></div>} />
          <Route path='beginner' element={<div><Beginner/></div>} />
          <Route path='beginner/intro-to-react' element={<div><LearnReact/></div>} />
          <Route path='beginner/jsx' element={<div><LearnJSX/></div>} />
          <Route path='beginner/components' element={<div><Components/></div>} />
          <Route path='beginner/props' element={<div><Props/></div>} />
          <Route path='beginner/state' element={<div><State/></div>} />
          <Route path='beginner/conditional-rendering' element={<div><ConditionalRendering/></div>} />
          <Route path='intermediate' element={<div><Intermediate/></div>} />
          <Route path='intermediate/event-handling' element={<div><EventHandling/></div>} />
          <Route path='intermediate/form-and-controlled-components' element={<div><FormsandOther/></div>} />
          <Route path='intermediate/list-and-keys' element={<div><ListsandKeys/></div>} />
          <Route path='intermediate/component-composition' element={<div><ComponentComposition/></div>} />
          <Route path='intermediate/react-router' element={<div><ReactRouter/></div>} />
          <Route path='advanced' element={<div className=''><Advanced/></div>} />
          <Route path='advanced/hooks' element={<div ><Hooks/></div>} />
          <Route path='advanced/context-api' element={<div ><ContextAPI/></div>} />
          <Route path='advanced/redux' element={<div ><Redux/></div>} />
          <Route path='advanced/api-integration' element={<div ><APIIntegration/></div>} />
          <Route path='advanced/authentication-and-authorization' element={<div ><Authentication/></div>} />
        </Routes>
      </div>
    </div>
    </div>
    
  );
};

export default ReactRoadmap;