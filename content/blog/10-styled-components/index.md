---
title: ลองใช้ styled-components สิ…แล้วคุณจะลืมการเขียน CSS แบบเดิมๆ ไปเลย
date: '2017-08-26T10:00:00.000Z'
slug: ลองใช้-styled-components-สิ-แล้วคุณจะลืมการเขียน-css-แบบเดิมๆ-ไปเลย-e310f5c7cf33
featuredImage: './cover.jpg'
tags: ['JavaScript', 'Coding', 'React']
---

ผมเชื่อว่าหลายๆ คนที่เริ่มมาเขียน React จะพบกับความปวดหัวในเรื่องของการทำ styling พอสมควร เพราะถ้าเอาด้วยตัว React เพียวๆ นั้นคุณจะพบว่าคุณจะต้องทำ styling ด้วย CSS-in-JS แบบนี้

```html
<div style={{ backgroundColor: 'red', width: '200px' }} />
```

แล้วคุณก็จะค้นพบว่า เชี่ย แม่งทำ hover ไม่ได้เว้ยเฮ้ย คุณก็เลยต้องกลับสู่อ้อมอก CSS แบบเดิม แต่ก็ต้องไปตบตีกับ Webpack เพื่อให้เราสามารถ import CSS เข้ามาใช้ได้ ก็จะเป็นแบบนี้แทน

```javascript
// ใน App.css
.dummyDiv {
  background-color: red;
  width: 200px;
}

// ใน App.js
import style from './App.css'

render() {
  return <div className={style.dummyDiv} />;
}
```

หรืออยากจะ import เป็น SCSS ก็ได้ ก็ไปเซ็ต Webpack ให้มันใช้ได้…อนิจจา คุณก็พบว่าจริงๆ แล้วโลกของ CSS นั้นเขาชอบใช้คลาสแบบ kebab-case กัน (เช่น dummy-div) คุณก็เลยอาจต้องไปพึ่งพา library อื่นๆ เช่น [react-css-modules](https://github.com/gajus/react-css-modules) ให้เราเขียน class ในแบบนั้นได้ แต่คุณก็ต้องปวดกบาลอีก เมื่อดันต้องไปใส่ชื่อคลาสใน styleName ไม่ใช่ className (เฉยเลย)

แต่แล้วพอได้มาลองแตะ Next.js คุณก็ค้นพบว่า Next.js สนับสนุนให้คุณเขียน CSS-in-JS แบบสุดหัวใจ แต่ก็ทำให้ง่ายขึ้นด้วย [styled-jsx](https://github.com/zeit/styled-jsx) ซึ่งเป็น library ที่ทีมเดียวกันกับที่สร้าง Next.js เป็นคนทำนี่แหละ

```javascript
render() {
  return (
    <div className="dummy-div">
      <style jsx>{`
        .dummy-div {
          background-color: red;
          width: 200px;
        }
      `}</style>
    </div>
  );
}
```

ก็ดูตอบโจทย์หลายอย่างดี แต่เชื่อผมเถอะพอ component ใหญ่ขึ้นนะ ฟังก์ชัน render ของคุณอาจยาวเท่าตึกมหานครได้เลย ก็มีวิธีแก้ปัญหาแบบ workaround คือแยก style ออกมาเป็นอีกไฟล์เลย แต่การแยกออกมาอีกไฟล์นั้นมันก็คือการ export ค่า string ออกไป

## มีอะไรที่มันง่ายกว่านี้ไหมวะ

ผมก็พร่ำบ่นในใจอยู่เหมือนกัน แต่ก็อดทนลงจบกับที่การใช้ react-css-modules ในตอนแรกที่ผมเข้าสู่โลกของ React และพอได้มาจับ Next.js ก็จบลงที่ styled-jsx เหมือนกัน

จนได้รู้จักกับ [**styled-components**](https://www.styled-components.com/) ตอนงาน ReactBKK 2.0 ที่ผ่านมานี่เอง ผมค้นพบว่า เชี่ยแม่งโคตรเจ๋ง

แต่สิบปากว่าไม่เท่าตาเห็น และไม่เท่าได้ลองลงมือทำ ผมเพิ่งมีโอกาสได้เอา styled-components ไปใช้งานจริง และกำลังจะขึ้น production เร็วๆ นี้ด้วย

บอกได้เลยว่า นี่สิสิ่งที่โลกรอคอยมานานแสนนานเหลือเกิน และมันดีจริงๆ

## styled-components = component ที่มี style

ตามชื่อเลยครับ styled-components เป็น library ที่ช่วยให้เราสร้าง component จาก html element ต่างๆ เช่น div, span, a, p หรืออื่นๆ ทั้งหมดที่โลกนี้จะมีให้คุณได้ และใส่ style ให้กับเรา และเราเอาผลลัพธ์ที่ได้ไปใช้เสมือนเป็น React component อันนึงเลย

ฟังดูเหมือนยากๆ งงๆ

สมมติผมอยากได้ปุ่มที่เป็น tag `<button>` โดยปุ่มมีกรอบสีน้ำเงิน พื้นหลังสีขาว และตัวอักษรสีน้ำเงิน ด้วยท่าของ styled-components เราจะทำแบบนี้

```javascript
import styled from 'styled-components';

// สร้าง Component ชื่อ Button โดยมันก็คือ <button> ที่มี style ตามที่เราเขียนลงไป
const Button = styled.button`
  background-color: white;
  color: blue;
  border: 2px solid blue;
`;

// เรียกใช้ Component Button ที่เราสร้างมา
render() {
  return <Button>Normal Button</Button>;
}
```

อยากให้ลองสังเกตตรง `styled.button` ครับ จะเห็นว่าเราใช้ แล้วเขียน style ลงไปในนั้น จริงๆ แล้วสิ่งนี้เหมือนกันการเรียกฟังก์ชันครับ เป็นฟีเจอร์ของภาษา JavaScript ES6 ที่เราสามารถ call function แบบนี้ได้ (เช่น `myFunc()` ก็เรียก ` myFunc`` ` แทน) ฟีเจอร์นี้เรียกว่า [Tagged Template Literals](https://www.styled-components.com/docs/advanced#tagged-template-literals) ครับ อยากอ่านเพิ่มก็กดเข้าไปดูได้เลย

เอาละมาดูกันต่อ **ทีนี้เราจะเปลี่ยนแนวคิดการเขียน CSS ให้กับ Component เราแล้ว โดยเราจะเปลี่ยน mindset เป็น เราจะสร้าง Component ที่มี style มาเลย แล้วเอาไปใช้แทน**

## หากยังจำได้ว่าการทำ dynamic styling มันนรกขนาดไหน จงดู

```javascript
const Button = styled.button`
  background-color: white;
  color: blue;
  border: 2px solid blue;
  ${props => props.primary && `
    background-color: blue
    color: white;
  `}
`;

render() {
  return (
    <div>
      <Button>Normal Button</Button>
      <Button primary>Primary Button</Button>
    </div>
  )
}
```

ใช่ครับ เราสามารถ pass props ลงไปใน Component ที่เรากำลังจะสร้างได้! ให้รำลึกไว้เสมอว่าใน \`\` มันก็คือ string ดีๆ นี่เอง เราก็ใช้ประโยชน์จาก ES6 ที่แทรกตัวแปรด้วย `${}` ได้เลย จะทำอะไรก็ได้หมดครับ

(ไหนใครยังนึกถึงแต่ก่อนที่ต้องนั่ง assign className ใหม่ไหมครับ???)

## แล้ว event หรือ props เดิมๆ ของ HTML element นั้นยังอยู่ไหม

อยู่ครบถ้วนทุกประการ! นี่คือความเจ๋งและโหดสัสของ styled-components ครับ คือหน้าที่มันคือการใส่ style ให้กับ HTML element เดิมครับ แต่มันยังคงให้เราใช้ props เดิมทุกอันไว้ได้ครับ

```javascript
const Button = styled.button`
  background-color: white;
  color: blue;
  border: 2px solid blue;
  ${props => props.primary && `
    background-color: blue
    color: white;
  `}
`;

render() {
  return (
    <div>
      <Button onClick={() => alert('This is Normal Button')}>Normal Button</Button>
      <Button primary onClick={() => alert('This is Primary Button')}>Primary Button</Button>
    </div>
  )
}
```

## เขาเขียน Component มาแต่เราไม่ชอบสไตล์เขาเลยอะ

```javascript
// Component Link สุดโง่...(จริงๆ อาจเป็น Link จาก React-Router ก็ได้)
const Link = ({ className, children }) => (
  <a className={className}>{children}</a>
)

// ก็ style มันซะ
const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`

render(
  <div>
    <Link>Unstyled, boring Link</Link>
    <br />
    <StyledLink>Styled, exciting Link</StyledLink>
  </div>
)
```

หรือถ้า Component นั้นสร้างมาจาก styled-components ก็สามารถ extend style ได้เหมือนกัน!

```javascript
const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

// เอ้ย อยากทำปุ่มสีใหม่เลยอะ
const TomatoButton = Button.extend`
  color: tomato;
  border-color: tomato;
`

render(
  <div>
    <Button>Normal Button</Button>
    <TomatoButton>Tomato Button</TomatoButton>
  </div>
)
```

## อยาก pass props ลงไปให้เลยใน Component ที่เราจะ style มันอะ ทำได้ไหม?

ในหลายเคสเช่น ทำ input form ก็อยากจะใส่ type ให้มันไปเลย ครั้นแค่ style แล้วนั่งใส่ type=“text” ทุกอันคงปวดกบาลน่าดู…styled-components จัดให้พี่ได้ครับ

```javascript
const Input = styled.input.attrs({
  // ระบุ props ให้เลย!!!!!!!!!
  type: 'password',
  // หรือประกาศ props ใหม่ยังได้!!!!!!!
  margin: props => props.size || '1em',
  padding: props => props.size || '1em',
})`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  // เห็น props จากด้านบนไหมจ๊ะ
  margin: ${props => props.margin};
  padding: ${props => props.padding};
`

render(
  <div>
    <Input placeholder="A small text input" size="1em" />
    <br />
    <Input placeholder="A bigger text input" size="2em" />
  </div>
)
```

## แต่ผมเขียนแอพ React Native อะ แฮะๆ

คิดว่ากูทำไม่ได้เหรอจ๊ะ

```javascript
import styled from 'styled-components/native' // v2 or below
import styled from 'styled-components' // v3 or above

const StyledView = styled.View`
  background-color: papayawhip;
`

const StyledText = styled.Text`
  color: palevioletred;
`

class MyReactNativeComponent extends React.Component {
  render() {
    return (
      <StyledView>
        <StyledText>Hello World!</StyledText>
      </StyledView>
    )
  }
}
```

~~แค่เปลี่ยนที่ import แล้วเราเอา concept เดียวกันมาใช้ได้เลย ไม่ต้องเปลี่ยน mindset ใหม่ใดๆ ทั้งสิ้น~~ ใน styled-components version 3 ขึ้นไป มา import จาก styled-components แทนได้เลย

## แต่เรายังติดใจ SCSS อะ มัน nested rule ได้นะ

ถถถถถถถถถถถถถถถถถถถถถถถถถถถถถถถถถถถ

```javascript
const EqualDivider = styled.div`
  display: flex;
  margin: 0.5rem;
  padding: 1rem;
  background: papayawhip;
  ${props => props.vertical && 'flex-direction: column;'}
  > * {
    flex: 1;
    &:not(:first-child) {
      ${props => (props.vertical ? 'margin-top' : 'margin-left')}: 1rem;
    }
  }
`

const Child = styled.div`
  padding: 0.25rem 0.5rem;
  background: palevioletred;
`

render(
  <div>
    <EqualDivider>
      <Child>First</Child>
      <Child>Second</Child>
      <Child>Third</Child>
    </EqualDivider>
    <EqualDivider vertical>
      <Child>First</Child>
      <Child>Second</Child>
      <Child>Third</Child>
    </EqualDivider>
  </div>
)
```

และ media query ก็ใช้ได้เหมือน SCSS เลยขรั่บ

## มันดีจริงๆ นะ เชื่อผม

**ผมกล้าบอกตรงๆ เลยว่า styled-components แม่งดีมากกกกกกๆๆๆ(กอไก่และไม้ยมกล้านตัว)** คือมันตอบโจทย์แทบทุก scenario จริงๆ ทั้งทำให้ reuse ได้ง่ายมากๆ เราสามารถทำ Global component เช่นพวกปุ่ม, Form, Typography มาแล้ว import ไปใช้เป็น Component อันนึงได้เลย แล้วไหนว่ามันจะ extend สไตล์ต่อได้ง่ายอีก เรียกได้ว่าครบเครื่องมากๆ ครับ

และอีกปัจจัยที่มันดีคือ มันไม่ต้อง setup ห่านอะไรเพิ่มเลยครับ npm install หรือ yarn add แล้วก็ใช้เหมือน library ปกติแหละ จบปึ้ง ได้ฟีเจอร์ของ SCSS ด้วย

ใน React-Native ก็ใช้ได้ (คอนเฟิร์มครับ เพราะใช้มาแล้ว และมันดีจริงๆ)

Server-Side Rendering ก็ซัพพอร์ตเหมือนกัน

เป็น Library นึงที่ผมยังสงสัยว่า **“มีห่าอะไรที่มึงยังทำไม่ได้ไหมเนี่ย”**

ผมเลยขอบอกว่า ลองใช้เถอะครับ แล้วคุณจะเริ่มมีความคิดว่า แต่ก่อนกูทำห่าอะไรลงไปเนี่ย

สำหรับบล็อกวันนี้ก็จบลงเพียงเท่านี้ครับผม หลังจากดองไม่เขียนบล็อกมาสองเดือน 5555 มีอะไรก็เหมือนเดิมครับ สามารถติชม หรือ discuss กันได้เลยครับ :D
