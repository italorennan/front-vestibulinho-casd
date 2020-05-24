import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;
  margin-top: 300px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`; 

export const ErrorMessage = styled.label`
	color: palevioletred;
    display: block;
`;
