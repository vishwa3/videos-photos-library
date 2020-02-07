import React from 'react';


const About = () => {
  return (
    <div className="container">
      <h3>REACT CONCEPTS USED TO BUILD THE DEMO POC</h3>
      <ul className="ul-about">
        <li>React Hooks : <span>Hooks used - useRef, useEffect, useDispatch, useSelector.Only functional components used.</span></li>
        <li>Redux-saga : <span>Redux middleware library used to handle side effects.</span></li>
        <li>Testing : <span>Have used <b>JEST, Enzyme, react-test-renderer, and redux-mock-store</b> for testing.JEST to run tests , Enzyme for making assertions, react-test-renderer to create snapshots of the component and redux-mock-store to create fake redux store for testing.Tests are in place for components with both snapshot and functionality testing.Tests are also in place for Actions, Reducers, and Sagas.</span></li>
        <li>API : <span>Have used <b>UNSPLASH</b> for images and <b>SHUTTERSTOCK</b> for videos</span></li>
        <li>Github link : <a href="https://github.com/vishwa3/videos-photos-library-2" target="_blank">https://github.com/vishwa3/videos-photos-library</a></li>
        <li>Application deployed on <b>NETLIFY</b> <a href="https://www.netlify.com/" target="_blank">https://www.netlify.com/</a></li>
      </ul>
    </div>
  )
}

export default About;