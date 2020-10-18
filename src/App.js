import React from 'react';
import logo from './logo.svg';
import './App.css';
import background from './img/background-pic.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha2/css/bootstrap.min.css" integrity="sha384-DhY6onE6f3zzKbjUPRc2hOzGAdEf4/Dz+WJwBvEYL/lkkIsI3ihufq9hk9K4lVoK" crossorigin="anonymous"></link>
        </header>
        <div className="container">
        <div className="title">
          <p className="h4 first">太陽光のような</p>
          <p className="h1 second">植物用<span className="big">LED</span></p>
        
        <div className="note">
          <p className="wow">室内の植物からいちごまで</p>
          <p className="wow">いろんなとこに使える賢いLED</p>
          <p className="wow">MARS HYDRO LEDを紹介します！</p>
        </div>
        <div className="functions">
          <p className="text">家庭</p>
          <p className="text2">農家</p>
          <p className="text2">多肉植物</p>
          <p className="text">ハーブ</p>
          <p className="text2">花</p>
          <p className="text2">いちご</p>
        </div>
        <div className="h6 recomend">
        <p className="title2">&lt;こんな問題で悩んでる方におすすめします&gt;</p>
        </div>

        <div className="list">
        <p className="reason">光の量が足りなくて植物の成長が止まってる</p>
        <p className="reason2">花屋さんやカフェの中をもっと生き生きにしたい</p>
        <p className="reason">ビニールハウスでの日照量が足りてない</p>
        <p className="reason">怪しい紫色のライトが嫌い</p>
        </div>
        </div>


        </div>
        
      
      
      
    </div>


   


  );
}

export default App;
