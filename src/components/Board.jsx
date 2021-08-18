import React, { useEffect, useState } from 'react';
import db from '../firebase';

export default function Board() {


  const [ searchTerm, setSearchTerm ] = useState('');
  const [ boardList, setBoardList ] = useState([]);

  const writeRef = db.collection('testcol1')

  useEffect(() => {
    /*
    // onSnapshot 방식

    writeRef.onSnapshot((snapshot) => {
        setBoardList(snapshot.docs.map((doc) => ({ 
          id: doc.id, 
          title: doc.data().title, 
          desc: doc.data().desc 
        })))
      });
    */


    // get 방식
    writeRef.get().then((querySnapshot) => {
      // console.log(querySnapshot);
      setBoardList(querySnapshot.docs.map((doc) => (
        {
          id: doc.id,
          title: doc.data().title,
          desc: doc.data().desc
        }
      )))

      /*
      .forEach((doc) => (
        console.log(doc.data()
        {
          title: doc.data().title,
          desc: doc.data().desc
        })));
      */
      console.log('업뎃이 됐어요');
      
    })
}, [])
  

  return (
    <div>
      <hr/>
      <input type="text" onChange={(e) => {
        setSearchTerm(e.target.value)
      }} />
      <div className="searchList">
      {boardList.filter((input) => {
        if (searchTerm == '') return ;
        else if (input.title.toLowerCase().includes(searchTerm.toLowerCase())) return input;
      }).map((write) => (
          <div>
            {write.title}
          </div>
      ))}
      </div>
      <hr/>
      <button onClick={(e) => console.log(boardList)}>데이터가 들어오는지 확인</button>
      <hr/>

      {boardList.map((write) => (
        <div key={write.id}>
          <div>제목: {write.title}</div>
          <div>내용: {write.desc}</div>
          <button onClick={(e) => { if(window.confirm('삭제하시겠어요?')) console.log('삭제!!'); }}>삭제</button>
          <hr/>
        </div>
      ))}
    </div>
  )
}


