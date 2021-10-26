import styled from 'styled-components/macro';

export const FormStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  width: 100%;
  margin-top: 106px;
  overflow: auto;
`;

export const MainBlock = styled.div`
  width: 616px;
`;

export const TitleStyle = styled.div`
  margin-bottom: 20px;
`;

export const MainBlockInputWrapper = styled.div`
  width: 100%;
  padding: 6px;
  padding-inline: 16;
  border: 1px solid #f1f1f1;
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const MainBlockInputTitle = styled.div`
  color: rgba(17, 17, 17, 0.48);
`;

export const MainBlockInput = styled.input`
  width: 100%;
  font-size: 14px;
  line-height: 24px;
  border: none;
`;

export const ChildrenBlock = styled.div`
  width: 616px;
  margin-top: 44px;
`;

export const ChildrenBlockInputWrapper = styled.div`
  flex: 0.35;
  padding: 6px;
  padding-inline: 16;
  border: 1px solid #f1f1f1;
  border-radius: 4px;
`;

export const ChildrenBlockChildren = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 616px;
  margin-bottom: 10px;
`;

export const ChildrenBlockInput = styled.input`
  width: 100%;
  fontsize: 14px;
  lineheight: 24px;
  border: none;
`;

export const AddButtonStyle = styled.div`
  cursor: pointer;
  margin-bottom: 20px;
  border: 2px solid #01a7fd;
  box-sizing: border-box;
  border-radius: 100px;
  padding: 10px;
  padding-inline: 20px;
  color: #01a7fd;
`;

export const DeleteButton = styled.div`
  cursor: pointer;
  color: #01a7fd;
`;

export const SaveButton = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 118px;
  height: 44px;
  cursor: pointer;
  color: white;
  background-color: #01a7fd;
  border-radius: 100px;
  margin-bottom: 90px;
`;
