import styled from 'styled-components';

export const Container = styled.div`

`;

export const OpenChatButton = styled.button`
  display:flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 4%;
  right: 2%;

  border: none;
  background: #4b45ff;
  color: #fff;

  padding: 10px;
  border-radius: 50%;

`;

export const ChatContainer = styled.div`
 width: 400px;
 height: 400px;

  position:absolute;
  bottom: 1%;
  right: 1%;

  display: flex;
  align-items: center;
  flex-direction: column;


  box-shadow: 0 0 5px #999;

`;

export const ChatHeader = styled.div`
  width: 100%;
  height: 50px;


  position: relative;
  display: flex;
  padding: 5px 10px;

  svg {
    padding: 5px;
    border-radius: 50%;
    color: #fff;
    background: #4b45ff;
  }

  div {
    margin-left: 20px;

    p {
      color: #17fc2a;
    }
  }

  button {
    border: none;
    background: transparent;

    position: absolute;

    top: 10px;
    left: 90%;

    svg {
      background: #fff;
      color: red;
    }
  }



`;

export const ChatArea = styled.div`
  width: 100%;
  height: 90%;
  padding:0 10px;
  background-color:#f2f5fa;
  overflow-y: scroll;
  scrollbar-width: none;



  p {
    margin: 5px 0;
  }

  &::-webkit-scrollbar {
   display: none;
  }

`;

export const ChatActions = styled.div`
  width: 100%;
  background: #fff;
  height: 50px;
  padding: 0 5px;

  display:flex;

  box-shadow: 0 0 4px #999;

  input {
    height: 100%;
    padding: 0 10px;
    border: none;
    flex: 1;
  }


  button {
    border: none;
    background: transparent;

  }

`;
