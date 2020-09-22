import React, { useState } from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';

const App = () => {
  // const [data, setData] = useState(null);
  // const onClick = async () => {
  //   try {
  //     const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=d16d55112de249f9aef6a162ff89d709',);
  //     setData(response.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // return (
  //   <div>
  //     <div>
  //       <button onClick={onClick}>불러오기</button>
  //     </div>
  //     {data && <textarea rows={20} cols={50} value={JSON.stringify(data, null, 2)} readOnly={true} />}
  //   </div>
  // );
  return <NewsList />
};

export default App;