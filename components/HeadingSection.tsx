import React from "react";
import styled from "styled-components";

type Props = {
  title?: string;
};

const Container = styled.div`
  position: relative;
  background-image: url("/static/images/img-01-bg.png");
  background-size: 100% 100%;
  overflow: hidden;
`;
const Layout = styled.div`
  ${props => props.theme.responsiveLayout};
  height: 860px;
`;
const HeadingContent = styled.div`
  position: absolute;
  top: 220px;
`;
const Heading = styled.h1`
  font-size: 100px;
  line-height: 1.1;
  letter-spacing: -3px;
  font-weight: bold;
  color: white;
  margin: 0px 0px 0px -4px;
`;
const SubHeading = styled.p`
  font-size: 17px;
  line-height: 2;
  margin: 18px 0px 0px 1px;
  color: white;
  strong {
    font-weight: bold;
  }
`;
const AppButton = styled.a`
  ${props => props.theme.whiteLinkButton};
  margin: 76px 0px 0px;
`;

const PhoneFrame = styled.div`
  background-color: rgb(250, 250, 250);
  position: absolute;
  top: 229px;
  right: 0px;
  padding: 15px;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 13px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px -6px 9px 0px inset;
  border-radius: 48px;
  &::after {
    position: absolute;
    top: 0;
    width: 162px;
    height: 38px;
    left: 50%;
    margin-left: -81px;
    border-radius: 18px;
    background-color: rgb(250, 250, 250);
    content: '';
  }
`;
const PhoneScreen = styled.div`
  background-image: url("/static/images/img-01-screen.jpg");
  width: 300px;
  height: 650px;
  background-size: cover;
  border-radius: 33px;
`;

const HeadingSection: React.FunctionComponent<Props> = () => {
  return (
    <Container>
      <Layout>
        <HeadingContent>
          <Heading>
            어디로
            <br />
            떠나시나요?
          </Heading>
          <SubHeading>
            여행을 도와드리는 일은 <strong>트리플</strong>이 가장 잘합니다.
          </SubHeading>
          <AppButton
            href="https://triple.onelink.me/aZP6?pid=intro_web&af_dp=triple%3A%2F%2F%2Fmy%2Fmileage%2Fintro&af_web_dp=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.titicacacorp.triple"
            target="_blank"
          >
            앱 설치하기
          </AppButton>
        </HeadingContent>
        <PhoneFrame><PhoneScreen/></PhoneFrame>
      </Layout>
    </Container>
  );
};

export default HeadingSection;