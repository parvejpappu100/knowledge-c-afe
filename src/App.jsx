import React from 'react';
import Header from './components/Header/Header';
import Blogs from './components/Blogs/Blogs';
import Question from './components/Question/Question';

const App = () => {
  return (
    <div>
        <Header></Header>
        <Blogs></Blogs>
        <Question></Question>
    </div>
  );
};

export default App;