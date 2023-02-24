// import React, { useState, useEffect } from 'react';
// import { getDataTest } from '../../service/Test.service';

// function MainTest() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     get(10, 1, '');
//   }, []);

//   function get(pagesize, currentpage, search) {
//     let res = getDataTest(pagesize, currentpage, search);
//     setData(res.data);
//     console.log(res);
//   }

//   return <div>{`จำนวนข้อมูล ${data.length} รายการ`}</div>;
// }

// export default MainTest;

import React, { useEffect, useState, Fragment } from 'react';
import Animal from '../../data/animal.json';

function MainTest() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(Animal);
  }, []);

  // console.log('Animal', Animal);

  function addArray(text) {
    // console.log(text);
    Animal.push(text);
    setData(Animal);
    // console.log('Animal', Animal);
  }

  function deleteArray(text) {
    // console.log(text);
    Animal.pop(text);
    // console.log('Animal', Animal);
  }

  function filterArray(text) {
    // console.log(text);
    let array = Animal.filter((a) => a !== text);
    // console.log('Animal', array);
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setData([]);
          addArray('ม้า');
        }}
      >
        Click
      </button>
      {console.log('data', data)}
      <div className="">
        {data.length > 0
          ? data.map((item, index) => (
              <div className="col" key={item}>
                <p>{item}</p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default MainTest;
