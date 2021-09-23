import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {UserContext} from '~/Context/User';

import Loading from '~/Screens/Loading';

import Login from '~/Screens/Login';
import MovieHome from '~/Screens/MovieHome';
import MovieDetail from '~/Screens/MovieDetail';

const Stack = createStackNavigator();

const LoginNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'MOVIEAPP',
          headerTransparent: true,
          headerTintColor: '#E70915',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
};

// 이 네비게이션은 영화리스트 화면 위에 상세 페이지 화면을 쌓아(stack) 표시한다.

const MovieNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MovieHome"
        component={MovieHome}
        options={{
          title: 'MOVIEAPP',
          headerTintColor: '#E70915',
          headerStyle: {
            backgroundColor: '#141414',
            borderBottomWidth: 0,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="MovieDetail"
        component={MovieDetail}
        options={{
          title: 'MOVIEAPP',
          headerTintColor: '#E70915',
          headerStyle: {
            backgroundColor: '#141414',
            borderBottomWidth: 0,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

//Navigatior.tsx에 처음 들어오게되면, export default 인 해당 무명 함수로 진입힌다.
//여기서 useContext로 가져온 UserContext의 값을 확인하여 유저정보가 있으면 MovieNavigator를 뷰에 mount하고 아닐 시 LoginNavigator를 mount한다.

export default () => {
  const {isLoading, userInfo} = useContext<IUserContext>(UserContext);
  //상태가 로딩 중이라면...
  if (isLoading === false) {
    return <Loading />;
  }
  setTimeout(() => {}, 2000); //2초정도..
  return (
    <NavigationContainer>
      {userInfo ? <MovieNavigator /> : <LoginNavigator />}
    </NavigationContainer>
  );
};
