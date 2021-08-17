import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import fire from "./firebase";
import firebase from 'firebase';
import Main from './pages/Main';
import Home from './pages/Home';


export default function App() {

  /*
  const [writes, setWrites] = useState([]);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  useEffect(() => {
    db.collection('testcol1')
      .orderBy('timestamp')
      .onSnapshot((snapshot) => {
        setWrites( snapshot.docs.map((doc) => ({ id: doc.id, title: doc.data().title, desc: doc.data().desc })))
      });
  }, writes)

  const addWrite = (event) => {
    db.collection('testcol1').add({
      title: title,
      desc: desc,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setTitle('');
    setDesc('');
  }
  */

  return (
    <div>
      {/* 
      <div>
        <h2>글을 봅시당</h2>
      </div>
      <div>
        <h4>글을 적어볼까요</h4>
        <input placeholder='제목' onChange={(e) => {
          setTitle(e.target.value)
          console.log(title);
          }} />
        <input placeholder='내용' onChange={(e) => setDesc(e.target.value)} />
        <button onClick={addWrite} >추가</button>
      </div>
      <div>
        {writes.map((write) => (
          <div>
            <span>{write.title}</span>
            <span> == {write.desc}</span>
          </div>
        )
        )}
      
      </div>

       */}
      <Router>
        <Route path="/" exact render={(props) => <Main />} />
        <Route path="/home" exact render={(props) => <Home />} />
      </Router>
    </div>
  )
}
