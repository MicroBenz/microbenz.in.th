import React from 'react'
import styled, { css } from 'styled-components'
import { withPrefix } from 'gatsby'

const FixWidthContainer = styled.div`
  position: relative;
  left: 50%;
  right: 50%;
  width: 100vw;
  margin-left: -50vw;
  margin-right: -50vw;
`
const Container = styled(FixWidthContainer)`

  margin-top: -20px;
  height: 280px;
  background: url('${withPrefix('/images/tags/test.jpg')}');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`

const TagTitle = styled.h2`
  color: white !important;
  margin-bottom: 0.5rem !important;
`

const TagContent = styled.p`
  color: white !important;
`

const BlackOverlay = styled(FixWidthContainer)`
  height: 100%;
  background: linear-gradient(
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.3) 14%,
    rgba(0, 0, 0, 0.43) 28%,
    rgba(0, 0, 0, 0.6)
  );
`

const InnerContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding-bottom: 20px;
  @media (min-width: 1201px) {
    max-width: 960px;
    width: 960px;
    margin: 0 auto;
  }
  @media (max-width: 1200px) {
    padding: 0 5% 20px;
  }
`

const tagMapping = {
  javascript: {
    title: 'JavaScript',
    description: 'NaN is a number',
  },
  developer: {
    title: 'Developer',
    description: 'นอกจากอาชีพเราคือสร้างโค้ด เรายังเป็นนักสร้างบั๊คด้วย',
  },
  'year-in-review': {
    title: 'Year in Review',
    description: '',
  },
  react: {
    title: 'React',
    description: '<AwesomeReactContent {...here} />',
  },
  graduation: {
    title: 'Graduation',
    description: '',
  },
  'life-lesson': {
    title: 'Life Lesson',
    description: 'ขีวิตคือการวิ่งมาราธอน ระยะทางสำคัญกว่าความเร็ว',
  },
  product: {
    title: 'Product',
    description: '(นานๆ คงเข็นคอนเทนท์จากแท็กนี้ออกมาได้นะ 555)',
  },
  reading: {
    title: 'Reading',
    description: 'มาอ่านหนังสือกันเกินวันละ 8 บรรทัดกันเถอะครับ',
  },
  review: {
    title: 'Review',
    description: 'รีวิวทุกสรรสิ่ง หนัง เกม หนังสือ มือถือ',
  },
  'self-improvement': {
    title: 'Self Improvement',
    description: 'Being Better เป็น mindset ที่ควรมีถ้าหากเราอยากเติบโตขึ้น',
  },
  'university-life': {
    title: 'University Life',
    description: '4 ปีในมหาลัยมันสั้นจริงๆ',
  },
  ywc: {
    title: 'YWC',
    description: '#YWCIsEverywhere',
  },
}

const TagCover = props => {
  const { tag } = props
  const tagContent = tagMapping[tag] || { title: tag, description: '' }
  return (
    <Container>
      <BlackOverlay>
        <InnerContainer>
          <TagTitle className="title is-3">{tagContent.title}</TagTitle>
          {tagContent.description.length > 0 && (
            <TagContent>{tagContent.description}</TagContent>
          )}
        </InnerContainer>
      </BlackOverlay>
    </Container>
  )
}

export default TagCover
