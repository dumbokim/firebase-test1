import React, { useEffect, useState } from 'react';
import db from '../firebase';

export default function Board() {

  const [boardList, setBoardList] = useState([]);

  const writeRef = db.collection('testcol1')

  useEffect(() => {
    writeRef.onSnapshot((snapshot) => {
        setBoardList(snapshot.docs.map((doc) => ({ 
          id: doc.id, 
          title: doc.data().title, 
          desc: doc.data().desc 
        })))
      });

    /*
    .get().then((querySnapshot) => {
      // console.log(querySnapshot);
      querySnapshot.onSnapshot((doc) => {
          // doc.data() is never undefined for query doc snapshots
          // setBoardList(...boardList, doc.data())
          console.log(doc.data());
          // console.log(doc);
      });
      // console.log(boardList);
    });
    */
  }, [])
  

  return (
    <div>
      {/* {boardList.map((write) => (
          <div>
            <div>제목: {write.title}</div>
            <div>내용: {write.desc}</div>
          </div>
        ))} */}
        <button onClick={() => console.log(boardList)}>버튼</button>
    </div>
  )
}
