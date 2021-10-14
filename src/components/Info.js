import React from 'react';
import { VscGithub } from 'react-icons/vsc';
import { AiOutlineLinkedin } from 'react-icons/ai';
import Nav from './Nav';

function Info() {
  return (
    <div className="info-comp">
      <Nav />
      <p className="title">
        SOURCES
      </p>
      <div className="stats-list">
        <div className="flex stats-list-item">
          <span><a target="blank" href="https://www.worldometers.info/coronavirus/">Worldometers</a></span>
        </div>
        <div className="flex stats-list-item">
          <span><a target="blank" href="https://github.com/disease-sh/API">Disease-sh API</a></span>
        </div>
      </div>
      <p className="title">
        DEVELOPER
      </p>
      <div className="stats-list">
        <div className="flex stats-list-item">
          <span>
            {' '}
            <VscGithub />
            {' '}
            <span><a target="blank" href="https://github.com/blakbox23/">blakbox23</a></span>
          </span>
        </div>
        <div className="flex stats-list-item">
          <span>
            {' '}
            <AiOutlineLinkedin />
            {' '}
            <span><a target="blank" href="https://www.linkedin.com/in/peter-mbuthia/">blakbox23</a></span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Info;
