import {Fragment, useState, useEffect} from 'react';
import Form from './components/Form';
import axios from 'axios';
import Lyric from './components/Lyric';
import Bio from './components/Bio';

function App() {
  const [searchInfo, setSearchInfo] = useState({});
  const {artist, title} = searchInfo;
  const [lyrics, setLyrics] = useState('');
  const [bio, setBio] = useState('');
  useEffect(() => {
    if(Object.keys(searchInfo).length === 0) return;
    const getSearchInfo = async () => {
      const URL_title = `https://api.lyrics.ovh/v1/${artist}/${title}`;
      const URL_bio =`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
      const [titleRes, bioRes] = await Promise.all([
        axios.get(URL_title),
        axios.get(URL_bio)
      ]);
      setLyrics(titleRes.data.lyrics);
      setBio(bioRes.data.artists[0]);
    }
    getSearchInfo();
  },[searchInfo, artist, title, bio]);

  return (
    <Fragment>
      <Form 
        setSearchInfo={setSearchInfo}
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Bio 
              bio={bio}
            />
          </div>
          <div className="col-md-6">
            <Lyric
                lyrics={lyrics}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
