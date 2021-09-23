React 초기화 방법
링크 : https://flamingotiger.github.io/frontend/ReactNative/react-native-reset/

Android studio INSTALL_FAILED_INSUFFICIENT_STORAGE(용량 부족 문제)
링크 : https://daldalhanstory.tistory.com/140?category=963034

iOS AppDelegate.m code_push 에러
#ifdef FB_SONARKIT_ENABLED 보다 밑에 import 할때 문제가 인식이 안될수 있음.
링크 : https://velog.io/@hojin9622/Use-of-undeclared-identifier-CodePush-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0

AsyncStorage - 앱 내에 로그인 정보를 저장하는 라이브러리
npm install --save @react-native-community/async-storage
↓ 로 변경 되었다고 함.
npm install --save @react-native-async-storage/async-storage

[NPM] npm install 할 때 --save 옵션을 함께 입력하는 이유?
하지만 npm5 부터는 --save 옵션을 사용하지 않아도 dependencies에 항목을 추가할 수 있도록 했습니다.

react-native-reanimated 는 더이상 npm으로 설치되지 않습니다.
yarn add react-native-reanimated

Emmet 꺼둔 상태임..
Emmet: Show Expanded Abbreviation (always —> never)
링크 : https://oddcode.tistory.com/107

📌 @types/index.d.ts 설명 — 설명이 부족함 추가 필요
링크 : https://www.slideshare.net/gloridea/dts-74589285

📌 jsx 부분의 컨테이너들을 쓸때 마다 interface 로 정의해줘야하는지??

useEffect vs useLayoutEffect

Hook(useEffect)과 클래스형 컴포넌트의 생명주기(didMount, didUpdate, WillUnmount)는 유사하지만, 동일하진 않다.

    			동기(Synchronous)	동작 순서												장점									  단점						  	   사용 예시

useEffect 비동기적 DOM의 레이아웃 배치(render) 와 페인트가 끝난 후 실행 useLayoutEffect에 비해 레이아웃을 빨리 그린다. 업데이트 되기 전 상태를 보게된다. 데이터 fetch, event handler, state reset
useLayoutEffect 동기적 DOM의 레이아웃 배치(render)가 실행된 후 paint가 되기 전에 실행 사용자가 업데이트 되기 전의 화면을 보지 않게된다. 로직이 복잡할 경우 사용자가 레이아웃을
보는데 까지 시간이 오래걸린다. 그외의 상황(화면이 깜박거릴때)

결론(사용 상황)
useEffect - DOM을 변형시키지 않는 대부분의 경우에 사용한다.
useLayoutEffect - 사용자에게 노출되는 DOM을 변형시킬 때 사용하면 효율적이다.
