import styled from 'styled-components';

const NavBarContainer = styled.nav`
  display: flex;
  gap: 10px;
  margin-left: 20px;

  & > div {
    display: flex;
    gap: 10px;
  }

  p {
    font-size: 16px;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
  }

  .nav {
    border: none;
    background: none;
    font-size: 18px;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    cursor: pointer;
  }
`;

export { NavBarContainer };
