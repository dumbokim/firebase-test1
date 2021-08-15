import React, { useState } from 'react';
import firebase from 'firebase';
import { Link } from 'react-router-dom';

export default function AddAuth() {

  const [ inputId, setInputId ] = useState('');
  const [ inputPwd, setInputPwd ] = useState('');

  const addAuth = () => {
    firebase.auth().createUserWithEmailAndPassword(inputId, inputPwd)
      .then((userCredential) => {
        console.log(userCredential);
        setInputId('');
        setInputPwd('');
      }).catch((err) => {
        let errCode = err.code;
        let errMsg = err.message;
        console.log(errCode);
        console.log(errMsg);
      })
  }


  return (
    <div>
      <h5>아디를 만들어 봅시당</h5>
      <div> 
        <input type="email" placeholder="id" onChange={(e) => setInputId(e.target.value)} />
        <input type="password" placeholder="pwd" onChange={(e) => setInputPwd(e.target.value)} />
        <button onClick={addAuth}>아이디 생성</button>
        <Link to="/login"><button>바로 로그인하기</button></Link>
      </div>
    </div>
  )
}
