import React from 'react';
import './App.css';
import Layout from './components/layout';

function App() {
  return (
    <>
      <main>
        <Layout>
          <div>
            <img src="https://avatars.githubusercontent.com/u/33432680?v=4" alt="Avatar of user" />
            <h1>Inglyd Maria Alves</h1>
            <h3>Username:</h3>
            <span>inglyd</span>
            <div>
              <div>
                <h4>Followers</h4>
                <span>5</span>
              </div>
              <div>
                <h4>Repositories</h4>
                <span>5</span>
              </div>
              <div>
                <h4>Starreds</h4>
                <span>5</span>
              </div>
            </div>
          </div>
          <div>Users</div>
          <div>Repositories</div>
          <div>Starred</div>
        </Layout>
      </main>
    </>
  );
}

export default App;
