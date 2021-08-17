import React, { useState } from 'react';
import firebase from 'firebase';
import db from '../firebase';

export default function Writing() {

  const [inputTitle, setInputTitle] = useState('');
  const [inputDesc, setInputDesc] = useState('');

  const addWrite = (event) => {
    db.collection('testcol1').add({
      title: inputTitle,
      desc: inputDesc,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).then(console.log)

    setInputTitle('');
    setInputDesc('');
  }

  return (
    <div>
      <div>
        <label>제목</label>
        <input placeholder="제목" id="titleInput"
        onChange={(e) => {
          console.log(e.target);
          setInputTitle(e.target.value)
          }}/>
      </div>
      <div> 
        <label>내용</label>
        <input placeholder="내용" onChange={(e) => setInputDesc(e.target.value)} />
      </div>
      <button onClick={(e) => {
        if(window.confirm('ㄱㄱ?')) addWrite(e);
        }}>등록하기</button>
    </div>
  )
}
