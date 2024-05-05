// Style your elements here
import styled from 'styled-components'

export const DivContainer = styled.div`
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  overflow-y: hidden;
  height: 100vh;
  padding: 20px;
`

export const Heading = styled.h1`
  font-size: 25px;
  font-weight: 550;
  color: #1e293b;
  font-family: 'Roboto';
`

export const Hooks = styled.p`
  font-size: 17px;
  font-weight: 500;
  color: #334155;
`

export const Hooks2 = styled.p`
  font-size: 17px;
  font-weight: 500;
  color: #334155;
  width: 550px;
  line-height: 1.5;
`

export const Img = styled.img`
  height: 350px;
  border-radius: 5px;
  margin: 10px;
`

export const Button = styled.button`
  background-color: #1f81ff;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 8px;
  font-size: 15px;
  cursor: pointer;
`
