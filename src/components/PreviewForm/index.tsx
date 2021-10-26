import React, { useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router';
import { v4 as uuidv4 } from 'uuid';
import { Children } from '../../types';

import {
  FormStyle,
  MainBlock,
  TitleStyle,
  ChildrenBlockChildren,
  ChildrenBlockWrapper,
  ChildrensStyle,
  InfoStyle
} from './style';

const PreviewForm = () => {
  const userInfo = localStorage.getItem('userInfo');

  if (!userInfo) {
    return <Redirect to="/" />;
  }

  const userInfoParse = JSON.parse(userInfo);
  return (
    <FormStyle>
      <MainBlock>
        <TitleStyle>Персональные данные</TitleStyle>

        <InfoStyle>{`${userInfoParse.user.name}, ${userInfoParse.user.age} лет`}</InfoStyle>
      </MainBlock>

      <ChildrensStyle>
        <div>Дети</div>
        {userInfoParse.children.map((item: Children) => {
          const { id, name, age } = item;
          return (
            <ChildrenBlockChildren key={id}>
              <ChildrenBlockWrapper>
                <InfoStyle>{`${name}, ${age} лет`}</InfoStyle>
              </ChildrenBlockWrapper>
            </ChildrenBlockChildren>
          );
        })}
      </ChildrensStyle>
    </FormStyle>
  );
};

export default PreviewForm;
