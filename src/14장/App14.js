import React, { useState, useCallback } from 'react';
import axios from 'axios';
import NewsList from './NewsList';
import Categories from './Categories';
import NewsPage from './NewsPage';
import { Routes, Route } from 'react-router-dom';

const App14 = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=0a8c4202385d4ec1bb93b7e277b3c51f',
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const [category, setCategory] = useState('all');
  const onSelect = useCallback((category) => setCategory(category), []);
  return (
    // <>
    //   <Categories category={category} onSelect={onSelect} />
    //   <NewsList category={category} />
    // </>
    <Routes>
      <Route path="/" component={NewsPage} />
      <Route path="/:category?" component={NewsPage} />
    </Routes>
  );
};

export default App14;
