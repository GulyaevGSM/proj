import styled from "@emotion/styled";

export const CardBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: 100%;
  flex-wrap: wrap;
  margin-bottom: 14px;
`

export const CardFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  background-color: #ebeae8;
  width: fit-content;
  height: 62px;
  color: #000;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  margin: 0 0 10px 0;
  
  div {
    padding: 10px;
  }
`