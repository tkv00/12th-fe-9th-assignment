import { Link } from "react-router-dom";
import styled from "styled-components";

const BannerContainer = styled.div`
  display: flex;
  height: 300px;
  flex-direction: column;
  background-image: url("../img/support_back.jpg");
  background-size: cover;
  text-align: center;
`;

const Title = styled.h2`
  color: white;
  text-align: center;
  font-size: 34px;
  font-weight: 500;
`;
const RedLine = styled.hr`
  height: 5px;
  width: 20px;
  background-color: red;
  border: none;
`;
const SubTitle = styled.p`
  color: white;
  text-align: center;
  font-size: 15px;
  font-weight: 300;
`;

const SubNavBar = styled.ul`
  display: flex;
  justify-content: center;
  width: 80%;
  height: 150px;
  align-items: center;
  margin: -70px auto;
  list-style: none;
`;

const Li = styled.li`
  height: 38px;
  width: 300px;
  background-color: white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: black;
  padding: 10px;
  cursor: pointer;
  border: solid 1px #6666;
  &:hover {
    color: white;
    background-color: #c40f39;
  }
`;

export function Banner() {
  return (
    <BannerContainer>
      <Title>고객지원</Title>
      <RedLine />
      <SubTitle>모나미는 언제나 소중한 의견에 귀 기울이겠습니다.</SubTitle>
    </BannerContainer>
  );
}

export function NavigationBar() {
  return (
    <SubNavBar>
      {itemArray.map((item) => (
        <Link key={item.path} to={item.path}>
          <Li>{item.name}</Li>
        </Link>
      ))}
    </SubNavBar>
  );
}
const itemArray = [
  { name: "자주하는 질문", path: "/support" },
  { name: "공지사항", path: "/support/notification" },
  { name: "이벤트", path: "/support/event" },

];