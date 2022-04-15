import React, { Fragment } from 'react';
import styled from 'styled-components';
import { withPrefix } from 'gatsby';

const CoverContainer = styled.div`
  position: relative;
  margin: -20px -20px 28px -20px;
  background-image: url('${(props) => props.image}');
  background-position: center center;
  background-size: cover;
  height: 360px;
  @media (max-width: 768px) {
    height: 280px;
    background-image: url('${(props) => props.mobileImage}');
  }
`;

const BlackOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  background: linear-gradient(
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.3) 53%,
    rgba(0, 0, 0, 0.43) 71%,
    rgba(0, 0, 0, 0.6)
  );
`;

const CoverImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TitleContainer = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  z-index: 2;
  padding: 0 20px;
`;

const TagTitle = styled.h1`
  margin-bottom: 0.25rem !important;
  @media (max-width: 768px) {
    margin-bottom: 0.25rem !important;
  }
`;

const TagTitleWithImage = styled(TagTitle)`
  color: #ffffff !important;
`;

const TagDescription = styled.p`
  color: #ffffff !important;
`;

const tagMapping = {
  JavaScript: {
    title: 'JavaScript',
    description: 'NaN is a number',
    image: 'desktop/javascript.png',
    mobileImage: 'mobile/javascript.png',
  },
  Coding: {
    title: 'Coding',
    description: 'นอกจากอาชีพเราคือสร้างโค้ด เรายังเป็นนักสร้างบั๊คด้วย',
    image: 'desktop/coding.jpg',
    mobileImage: 'mobile/coding.jpg',
  },
  'Year in Review': {
    title: 'Year in Review',
    description: 'For self reflection',
    // image: 'desktop/year-in-review.jpg',
    // mobileImage: 'mobile/year-in-review.jpg',
  },
  React: {
    title: 'React',
    description: '<AwesomeReactContent {...here} />',
    image: 'desktop/react.png',
    mobileImage: 'mobile/react.png',
  },
  Graduation: {
    title: 'Graduation',
    description: 'One milestone of life.',
  },
  Life: {
    title: 'Life',
    description: 'ขีวิตคือการวิ่งมาราธอน ระยะทางสำคัญกว่าความเร็ว',
  },
  Product: {
    title: 'Product',
    description: '(นานๆ คงเข็นคอนเทนท์จากแท็กนี้ออกมาได้นะ 555)',
  },
  Reading: {
    title: 'Reading',
    description: 'มาอ่านหนังสือกันเกินวันละ 8 บรรทัดกันเถอะครับ',
  },
  Review: {
    title: 'Review',
    description: 'รีวิวทุกสรรพสิ่ง หนัง เกม หนังสือ มือถือ',
  },
  'Self Improvement': {
    title: 'Self Improvement',
    description: 'Being Better เป็น mindset ที่ควรมีถ้าหากเราอยากเติบโตขึ้น',
  },
  'University Life': {
    title: 'University Life',
    description: '4 ปีในมหาลัยมันสั้นจริงๆ',
  },
  YWC: {
    title: 'YWC',
    description: '#ywceverywhere',
    image: 'desktop/ywc.jpg',
    mobileImage: 'mobile/ywc.jpg',
  },
  'Web Performance': {
    title: 'Web Performance',
    description: 'ทำเว็บให้เร็วขึ้น ไม่ยากกว่าที่คิด',
    image: 'desktop/webperf.png',
    mobileImage: 'mobile/webperf.png',
  },
};

interface TagCoverProps {
  tag: string;
}

const TagCover: React.FC<TagCoverProps> = (props) => {
  const { tag } = props;
  const tagContent = {
    title: tag,
    description: '',
    ...(tagMapping[tag] || {}),
  };
  if (!tagContent.image || !tagContent.mobileImage) {
    return (
      <>
        <TagTitle className="title is-3">{tagContent.title}</TagTitle>
        <p>{tagContent.description}</p>
      </>
    );
  }
  return (
    <CoverContainer
      image={withPrefix(`/images/tags/${tagContent.image}`)}
      mobileImage={withPrefix(`/images/tags/${tagContent.mobileImage}`)}
    >
      <TitleContainer>
        <TagTitleWithImage className="title is-3">
          {tagContent.title}
        </TagTitleWithImage>
        <TagDescription>{tagContent.description}</TagDescription>
      </TitleContainer>
      <BlackOverlay />
    </CoverContainer>
  );
};

export default TagCover;
