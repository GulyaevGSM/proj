import styled from "@emotion/styled";
import {MdFavorite} from "react-icons/md";

export const GeneralFrame = styled.div`
  margin: 0 auto;
  color: #FFF;
  font-size: 16px;
  position: sticky;
  top: 0;
  z-index: 200;
  background-color: #fff;
`

export const FirstFrame = styled.div`
  max-width: 1800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 85.600px;
  background-color: #292929;
  margin: 0 auto;
  
  >div:nth-of-type(1) {
    cursor: pointer;
    
    &:hover {
      color: #ff6163;
    }
  }
`

export const SecondBlock = styled.div`
  display: flex;
  align-items: center;
  
  button {
    color: #fff;
    height: 32px;
    background-color: #008aed;
    font-weight: normal;
  }
  
  span {  
    margin: 0 12px;
    cursor: pointer;
    
    &:hover {
      color: #ff6163;
    }
  }
`

export const SecondFrame = styled.div<{shadow: any}>`
  max-width: 1800px;
  display: flex;
  align-items: center;
  color: #FFF;
  padding: 24px 85.600px;
  margin: 0 auto;
  box-shadow: ${(props) => props.shadow === true ? '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)' : 0};
  transition: box-shadow .2s ease-in;

  button {
    color: #fff;
    background-color: #009CF0;
    margin-right: 15px;
    padding: 0 30px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  input {
    color: #000;
    border: 2px solid #00aaff;
  }
`

export const SVGIcon = styled.div`
  margin-right: 24px;
`

export const StyledMdFavorite = styled(MdFavorite)`
  color: #8f8f8f;
  
  &:hover {
    color: #e91f63;
  }
`;