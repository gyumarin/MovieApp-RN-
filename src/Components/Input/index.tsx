import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
    width :100%;
    height : 40px;
    padding-left : 16px;
    padding-right : 16px;
    border-radius : 4px;
    background-color : #333333;
`;

const InputField = Styled.TextInput`
    flex : 1;
    color : #FFFFFF;
`;

interface Props {
  placeholder?: string;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  secureTextEntry?: boolean;
  style?: Object;
  clearMode?: boolean;
  onChangeText?: (text: string) => void;
}

const Input = ({
  placeholder,
  keyboardType,
  secureTextEntry,
  style,
  clearMode,
  onChangeText,
}: Props) => {
  return (
    <Container style={style}>
      <InputField
        selectionColor="#FFFFFF"
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType ? keyboardType : 'default'}
        autoCapitalize="none" //영어 입력시 첫 문자를 대문자로 변경할 것인지
        autoCorrect={false} //입력 내용 중 철자가 틀린것을 자동으로 수정할 것인지
        allowFontScaling={false} //사용자 단말기의 폰트를 적용할 것인지
        placeholderTextColor="#FFFFFF"
        placeholder={placeholder}
        clearButtonMode={clearMode ? 'while-editing' : 'never'} //사용자의 입력 내용이 있을 때 전체 삭제 버튼을 표시 할 것인지.
        onChangeText={onChangeText}
      />
    </Container>
  );
};

export default Input;
