import styled from "@emotion/styled";

export const RubricatorBlock = styled.div`
  max-width: 1800px;
  width: 95%;
  z-index: 999;
  background-color: #fff;
  border-radius: 0 0 25px 25px;
  padding: 50px 62px;
  display: flex;
  margin: 0 auto;
`

export const RubricatorLeft = styled.div`
  max-height: 300px;
  width: 25%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

export const RubricatorRight = styled.div`
  width: 75%;
`

export const RubricatorOverlay = styled.div`
  z-index: 99;
  position: fixed;
  background-color: rgb(96, 95, 95, .6);
  width: 100vw;
  height: 100vh;
`

export const Item = styled.div`
  margin-bottom: 5px; 
  padding: 10px;
  display: flex;
  justify-content: space-between;
  
  >div:nth-of-type(1) {
    display: flex;
    
    img {
      margin-right: 10px;
    }
  }
  
  &:hover {
    background: #f2f1f0;
    cursor: pointer;
    border-radius: 6px;
  }
`