# Learning JavaScript

현재 '한빛미디어'에서 출판한 'Learning JavaScript'를 보며 JavaScript 기초 역량을 쌓고 있습니다.  
궁금한점이 있으시다면 'taylous99@gmail.com'으로 문의 메일 주세요.


## 개발환경 Setting

해당 책의 내용 중 개발환경을 설정하는 부분이 있는데 지금 현재 version과 많은 차이가 있습니다. 그 중 babel설정이 6이하 version으로 작성이 된거 같아 Google을 통해 7 version으로 진행하였습니다.

### 순서

1. npm init을 통하여 package.json을 만들어 줍니다.

```
npm init
```

2. @babel/core와 @babel/cli를 설치합니다. 

```
npm install --save-dev @babel/core @babel/cli
```

​	책에 있는 내용대로 진행할 경우 '@babel/core'가 없다는 error가 계속 발생합니다. 여러 community를 찾아본 결과 babel7으로 오면서 설치하는 방법이 바뀌어서 그런 것 같습니다.

3. @preset-env를 설치합니다.

```
npm install --save-dev @babel/preset-env
```

​	설치한 후 '.babelrc' 파일을 생성하고 아래와 같이 코드를 작성합니다.

```
{
    "presets": ["@babel/preset-env"]
}
```

​	이 부분도 babel7로 넘어오면서 바뀐 부분으로 알고있습니다.

4. gulp를 설치합니다.

```
npm install -g gulp
```

​	'-g' option은 전역으로 설치한다는 의미입니다.

5. babel과 gulp를 같이 사용할 수 있게 합니다.

```
npm install --save-dev gulp gulp-babel
```

6. eslint를 설치하여 줍니다.

```
npm install -g eslint
```

7. 마지막으로 gulp와 eslint를 같이 사용할 수 있게 합니다.

```
npm install --save-dev gulp-eslint
```



babel과 gulp, eslint의 설치 순서는 상관없는 것 같습니다.