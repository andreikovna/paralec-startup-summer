import axios from 'axios';
import React, { useEffect } from 'react';

export function MainPage() {
  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function loadData() {
    const username = 'gaearon';
    const url = `https://api.github.com/users/${username}`;
    const url2 = `https://api.github.com/users/${username}/repos?q=&per_page=4&page=1`;
    try {
      const response = await axios.get(url);
      const response2 = await axios.get(url2);
      console.log(response.data);
      console.log(response2.data);
    } catch {}
  }

  return <></>;
}
