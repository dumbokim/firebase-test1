import React, { useState } from 'react'
import firebase from 'firebase';

export default function Login() {

  const [inputId, setInputId] = useState('');
  const [inputPwd, setInputPwd] = useState('');

  const loginBtn = () => {
    firebase.auth().signInWithEmailAndPassword(inputId, inputPwd)
      .then((userCredential) => {
        console.log(userCredential);
        console.log('로그인이 완료되었습니다.');
        document.location.href = '/home'
      }).catch((err) => {
        let errCode = err.code;
        let errMsg = err.message;
        console.log(errCode);
        console.log(errMsg);
      })
  }

  return (
    <div>
      <h5>로그인을 해봅시당</h5>
      <input type="email" onChange={(e) => setInputId(e.target.value)} />
      <input type="password" onChange={(e) => setInputPwd(e.target.value)} />
      <button onClick={loginBtn}>로그인</button>
    </div>
  )
}
