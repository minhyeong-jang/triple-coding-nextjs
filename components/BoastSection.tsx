import React from "react";
import styled from "styled-components";
import CountUp from "react-countup";
import ScrollAnimation from "react-animate-on-scroll";

const Container = styled.div`
  ${props => props.theme.container};
  .example-enter {
    opacity: 0.01;
  }

  .example-enter.example-enter-active {
    opacity: 1;
    transition: opacity 2000ms ease-in;
  }

  .example-leave {
    opacity: 1;
  }

  .example-leave.example-leave-active {
    opacity: 0.01;
    transition: opacity 2000ms ease-in;
  }
`;
const Layout = styled.div`
  ${props => props.theme.responsiveLayout};
  height: 573px;
`;
const ContentLogo = styled.div`
  position: absolute;
  top: 150px;
  width: 400px;
  height: 338px;
  background-size: 400px 338px;
  padding-top: 280px;
  font-size: 15px;
  background-image: url("/static/images/img-02-triple@3x.png");
  text-align: center;
  font-family: sans-serif;
  color: rgba(58, 58, 58, 0.7);
  background-repeat: no-repeat;
`;
const MetricsContainer = styled.div`
  margin-left: 623px;
  padding-top: 150px;
`;
const MetricItem = styled.div`
  font-size: 36px;
  letter-spacing: -1px;
  margin-bottom: 20px;
  color: rgb(58, 58, 58);
`;
const AwardsContainer = styled.div`
  margin: 50px 0px 140px 623px;
  white-space: nowrap;
`;
const AwardItem = styled.div`
  display: inline-block;
  font-family: sans-serif;
  color: rgba(58, 58, 58, 0.8);
  font-weight: bold;
  background-position: left top;
  background-repeat: no-repeat;
  background-size: 54px 54px;
  height: 54px;
  font-size: 14px;
  line-height: 22px;
  margin-right: 39px;
  padding: 5px 0px 5px 62px;
`;

type Props = {};
const BoastSection: React.FunctionComponent<Props> = () => {
  return (
    <Container>
      <Layout>
        
      <ScrollAnimation animateIn="fadeIn" duration={0.7} animateOnce={true}>
          <ContentLogo>2019년 4월 기준</ContentLogo>
        </ScrollAnimation>
        <MetricsContainer>
          <MetricItem>
            <strong>
              <CountUp start={1} end={360} separator="," />만 명
            </strong>
            의 사용자
          </MetricItem>
          <MetricItem>
            <strong>
              <CountUp start={1} end={35} separator="," />만 명
            </strong>
            의 리뷰
          </MetricItem>
          <MetricItem>
            <strong>
              <CountUp start={1} end={1100} separator="," />만 명
            </strong>
            의 저장
          </MetricItem>
        </MetricsContainer>
        <AwardsContainer>
          <AwardItem
            style={{
              backgroundImage: "url(/static/images/img-02-badge-google@3x.png)"
            }}
          >
            2018 구글 플레이스토어
            <br />
            올해의 앱 최우수상 수상
          </AwardItem>
          <AwardItem
            style={{
              backgroundImage: "url(/static/images/img-02-badge-apple@4x.png)"
            }}
          >
            2018 애플 앱스토어
            <br />
            오늘의 여행앱 선정
          </AwardItem>
        </AwardsContainer>
      </Layout>
    </Container>
  );
};

export default BoastSection;
