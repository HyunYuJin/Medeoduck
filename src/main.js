// webpack + Babel
// 작성한 파일들을 하나의 app.js 파일로 묶어준다.
// 묶어주는 과정에서 Babel을 통해 ES6 -> ES5로 바꿔준다.

// 이 라이브러리가 잘 작동하기 위해 Node.js가 필요하다.

// npm init: node.js를 이용하는 프로젝트를 초기화
// 그럼 packeage.json 생성

// npm install -g webpack webpack-cli: webpack 설치
// npm install --save-dev @babel/core @babel/preset-env babel-loader: Babel 설치

// npx webpack

import { sayHello } from "./util";

function myFunc() {
  sayHello("mike");
  console.log("myFunc");
}
myFunc();