import styled from "@emotion/styled";

const size = {
  mobile: '320px',
  tablet: '768px',
};

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
};

export const Container = styled.div`
margin: 40px auto;
  padding: 20px;
  max-width: 650px;
  text-align: center;
  box-shadow: var(--main-shadow);
  border-radius: 10px;
  background-color: #bbff00;
  `;

  export const Wrapper = styled.div`
  display: flex;
`;


export const Title = styled.h1`
 margin-bottom: 20px;
  padding: 5px;
  font-size: 44px;
  color: var(--primary);
  text-shadow: var(--main-shadow);
  box-shadow: var(--main-shadow);
  border-radius: 10px;
  `;


export const Subtitle = styled.h2`
margin-bottom: 20px;
  padding: 5px;
  font-size: 32px;
  color: var(--primary);
  text-shadow: var(--main-shadow);
  box-shadow: var(--main-shadow);
  border-radius: 10px;
  `;

  export const Text = styled.p`
  margin-bottom: 25px;

  font-size: 18px;
  line-height: 1.8;
  color: rgba(47, 47, 47, 0.6);
`;


