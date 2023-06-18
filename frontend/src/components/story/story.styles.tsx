import styled from "@emotion/styled";

export const StoryBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 24px;
`

export const StoryFrame = styled.div`
  width: 100px;
  height: auto;
  cursor: pointer;
`

export const Img = styled.div`
  border: 2px solid red;
  border-radius: 50%;
  padding: 3px;
  
  img {
    border-radius: 50%;
  } 
`

export const Text = styled.div`
  width: 90px;
  height: auto;
  white-space: pre-line;
  word-wrap: break-word;
  margin-top: 5px;
  font-size: 14px;
  text-align: left;
  
  &:hover {
    color: red;
  }
`
export const CurrentStory = styled.div`
  width: 450px;
  height: 670px;
  background-color: #e8e6e6;
  position: absolute;
  margin: 0 auto;
  border-radius: 30px;
  z-index: 400;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 30px;

  button {
    background-color: #009CF0;
    margin-right: 15px;
    padding: 0 30px;
    color: #fff;
    margin-top: 20px;
  } 
  
  div {
    font-weight: bold;
    font-size: 25px;
    margin-bottom: 10px;
    white-space: pre-line;
    word-wrap: break-word;
  }
  
  span {
    white-space: pre-line;
    word-wrap: break-word;
  }
`

export const IconClose = styled.div`
  cursor: pointer;
  position: absolute;
  top: -5px;
  right: -40px;
`
