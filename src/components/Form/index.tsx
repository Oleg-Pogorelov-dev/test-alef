import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { v4 as uuidv4 } from 'uuid';
import { Children } from '../../types';

import {
  FormStyle,
  MainBlock,
  TitleStyle,
  MainBlockInputWrapper,
  MainBlockInput,
  MainBlockInputTitle,
  ChildrenBlock,
  ChildrenBlockInputWrapper,
  ChildrenBlockChildren,
  AddButtonStyle,
  ChildrenBlockInput,
  SaveButton,
  DeleteButton
} from './style';

const Form = () => {
  const [userName, setUserName] = useState<string>('');
  const [userAge, setUserAge] = useState<string>('');
  const [childrenForm, setChildrenForm] = useState<Children[]>([]);

  const history = useHistory();

  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');

    if (userInfo) {
      const parseInfo = JSON.parse(userInfo);
      setUserName(parseInfo.user.name);
      setUserAge(parseInfo.user.age);
      setChildrenForm(parseInfo.children);
    }
  }, []);

  const addChildren = () => {
    const newChildrenForm = [...childrenForm];

    newChildrenForm.push({
      id: uuidv4(),
      name: '',
      age: ''
    });

    setChildrenForm(newChildrenForm);
  };

  const handleChangeValue = (type: 'name' | 'age', e: any, id: string) => {
    const newChildrenForm = [...childrenForm];
    const newValue = e.target.value;

    newChildrenForm.map((i) => {
      if (i.id === id) {
        i[type] = newValue;
      }
      return i;
    });

    setChildrenForm(newChildrenForm);
  };

  const removeChildren = (id: string) => {
    const newChildrenForm = childrenForm.filter((i) => i.id !== id);

    setChildrenForm(newChildrenForm);
  };

  const handleChangeUserName = (e: any) => {
    setUserName(e.target.value);
  };

  const handleChangeUserAge = (e: any) => {
    setUserAge(e.target.value);
  };

  const onSave = () => {
    const userInfo = JSON.stringify({
      user: {
        name: userName,
        age: userAge
      },
      children: childrenForm
    });

    localStorage.setItem('userInfo', userInfo);

    history.push('/preview');
  };

  return (
    <FormStyle>
      <MainBlock>
        <TitleStyle>Персональные данные</TitleStyle>
        <MainBlockInputWrapper>
          <MainBlockInputTitle>Имя</MainBlockInputTitle>
          <MainBlockInput onChange={(e) => handleChangeUserName(e)} value={userName} />
        </MainBlockInputWrapper>
        <MainBlockInputWrapper>
          <MainBlockInputTitle>Возраст</MainBlockInputTitle>
          <MainBlockInput type="number" onChange={(e) => handleChangeUserAge(e)} value={userAge} />
        </MainBlockInputWrapper>
      </MainBlock>

      <ChildrenBlock>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <TitleStyle>Дети (макс. 5)</TitleStyle>
          {childrenForm.length < 5 && (
            <AddButtonStyle onClick={addChildren}>+ Добавить ребенка</AddButtonStyle>
          )}
        </div>

        {childrenForm.map((item: Children) => {
          const { id, name, age } = item;
          return (
            <ChildrenBlockChildren key={id}>
              <ChildrenBlockInputWrapper>
                <MainBlockInputTitle>Имя</MainBlockInputTitle>
                <ChildrenBlockInput
                  onChange={(e) => handleChangeValue('name', e, id)}
                  value={name}
                />
              </ChildrenBlockInputWrapper>
              <ChildrenBlockInputWrapper>
                <MainBlockInputTitle>Возраст</MainBlockInputTitle>
                <ChildrenBlockInput
                  type="number"
                  onChange={(e) => handleChangeValue('age', e, id)}
                  value={age}
                />
              </ChildrenBlockInputWrapper>
              <DeleteButton onClick={() => removeChildren(id)} style={{ flex: 0.2 }}>
                Удалить
              </DeleteButton>
            </ChildrenBlockChildren>
          );
        })}

        <SaveButton onClick={onSave}>Сохранить</SaveButton>
      </ChildrenBlock>
    </FormStyle>
  );
};

export default Form;
