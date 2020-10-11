import React from 'react';
import {
  Tab, Tabs, TabList, TabPanel,
} from 'react-tabs';
import './AboutMe.scss';

const AboutMe = () => {
  const tabStyle = 'tab-styles';
  const tab1 = 'Experience';
  const tab2 = 'Education & Certification';
  return (
    <div>
      <div className="tabs-area">
        <div className="section-title text-center">
          <h2>About Me</h2>
          <p>
            Experienced Full Stack Software Engineer with a focus in React (redux, redux-saga) and Node.js (MongoDB, SQL,
            <br />
            microservices, express) development. I am closely tied to planning, architectural design, and application development
            within the team.
          </p>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Tabs>
                <TabList className={`${tabStyle}`}>
                  <Tab>{tab1}</Tab>
                  <Tab>{tab2}</Tab>
                </TabList>

                <TabPanel>
                  <div className="single-tab-content">
                    <ul>
                      <li>
                        <a>
                          Full Stack Engineer
                          <span> - Wizer</span>
                        </a>
                        {' '}
                        FEB 2019 - PRESENT TIME
                      </li>
                      <li>
                        <a>
                          Full Stack Engineer
                          <span> - Easier Chef (SpaceStep agency)</span>
                        </a>
                        {' '}
                        MAY 2019 - JUNE 2019
                      </li>
                      <li>
                        <a>
                          Full Stack Engineer
                          <span> - Tabnex (SpaceStep agency)</span>
                        </a>
                        {' '}
                        AUG 2018 - FEB 2019
                      </li>
                    </ul>
                  </div>
                </TabPanel>

                <TabPanel>
                  <div className="single-tab-content">
                    <ul>
                      <li>
                        <a>
                          BSc In Mechanical Engineering
                          <span> - Ufa State Petroleum Technological University</span>
                        </a>
                        {' '}
                        2011 - 2015
                      </li>
                    </ul>
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
