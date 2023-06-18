import styled from "@emotion/styled";
// style={{width: '80%', maxWidth: '1200px', margin: '0 auto'}}
// style={{width: '20%'}}
export const HomeFrame = styled.div`
  position: relative;
  display: flex;
  //max-width: 1400px;
  //margin: 0 auto;
`

export const FirstHomeFrame = styled.div`
  width: 80%;
`

export const SecondHomeFrame = styled.div`
  padding-left: 36px;
  width: 20%;
`

export const OverlayFrame = styled.div`
  position: fixed; /* Sit on top of the page content */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5); /* Black background with opacity */
  z-index: 301; /* Specify a stack order in case you're using a different order for other elements */
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CacheBlock = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  margin-bottom: 10px;
  >div:nth-of-type(1) {
    margin-right: 10px;
    
    img {
      height: 73px;
    }
  }
`

export const CacheTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  line-height: 1;
  margin-bottom: 12px;
  letter-spacing: 0.4px;
`

export const CacheAd = styled.div`
`

export const CacheAdTitle = styled.div`
  color: #00aaff;
  font-weight: bold;
  max-width: 138px;
  max-height: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const CacheAdPrice = styled.div`
  font-weight: bold;
  font-size: 15px;
`
