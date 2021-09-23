import React, { useEffect, useState } from 'react';
import { ColorfulMessage } from './components/ColorfulMessage';
import FaceType from './components/FaceType';

const App = () => {
  console.log('最初');
  const [num, setNum] = useState(0);//分割代入　[1つ目＝stateの変数名　, 2つ目＝stateを更新していく関数名] useState(初期値)
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  
  const onClickSwitchShowFlag = () => {
      setFaceShowFlag(!faceShowFlag);
  }

useEffect(() => {
  // console.log('useEffect');

  if (num > 0) {
    if(num % 3 === 0){
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
    
  }
// eslint-dosable-next-line react-hooks/exhaustive-deps
},[num, faceShowFlag]);//[]空の配列を設定すればレンダリング最初の１回のみ走り、あとはここを通らない

  return (
        <>
          <h1 style={{ color: 'red' }}>こんにちは！</h1>
          {/* <ColorfulMessage color='blue'>お元気ですか？</ColorfulMessage>
          <ColorfulMessage color='pink'>元気</ColorfulMessage> */}
          <button onClick={onClickCountUp}>カウントアップ</button>
          <ColorfulMessage color='brown'>{num}</ColorfulMessage>
          <button onClick={onClickSwitchShowFlag}>顔表示</button>
          <ColorfulMessage color='brown'>{faceShowFlag && <FaceType>{}</FaceType>}</ColorfulMessage>
          
        </>
    );
};

export default App;
