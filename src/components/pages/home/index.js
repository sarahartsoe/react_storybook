import React from 'react';
import logo from './logo.svg';
import { Counter } from '../../features/counter/Counter';
import { NbosHighcharts } from '../../molecules/NbosHighcharts';
import './style.css';
import { Link } from 'react-router-dom';
import { NbosHeader } from '../../atoms/NbosHeader';
import { NbosSideNav } from '../../atoms/NbosSideNav';
import { NbosClientInfo } from '../../molecules/NbosClientInfo';

export function HomePage() {
  return (
    <div className="App">
      <NbosHeader />
      <NbosSideNav />
      <NbosClientInfo />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/components/features/Home/index.js</code> and save to
          reload.
        </p>
        <span>
          <span className="tw-font-bold">Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
      <section>
        <div>
          <Link to="/edit" className="App-link">
            Edit Page
          </Link>
        </div>
        <NbosHighcharts />
      </section>
    </div>
  );
}
