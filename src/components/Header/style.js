import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: #f7b583;
  background: -webkit-linear-gradient(
    to top,
    #ffffff,
    #f7b583
  );
  background: linear-gradient(
    to top,
    #ffffff,
    #f7b583
  );
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  z-index: 10;
  color: #382B73;

  a {
    color: #382B73;
  }

  div {
    display: flex;
  }

  @media (max-width: 900px) {
    div {
      gap: 0;
    }

    .container {
      gap: 0;
      width: 80%;
      justify-content: space-between;
    }
  }
`;

export { HeaderContainer };
