---
title: สวัสดีครับ ผมมีชื่อว่า “React”
date: '2017-02-10T10:00:00.000Z'
slug: react-101
featuredImage: '/assets/06-react/cover.jpg'
tags: ['JavaScript', 'Coding', 'React']
---

ครั้งก่อนพูดเรื่อง [Redux](/ทำความรู้จักกับ-redux-แบบฉบับย่อยแล้วย่อยอีก-b464808aca12) ไปแล้ว ซึ่งมี feedback ดีพอสมควร (เกินคาดไปเยอะ) ก็เลยเผื่อๆ ว่าบางคนอาจจะแบบ เฮ้ยเราอยากทำความรู้จักกับ React มากกว่านี้อะ หรือบางคนอยากจะลองหัดเขียน React ดู เพราะมันเป็น framework โคตรฮิตประจำค.ศ.นี้เต็มๆ แบบคนใช้ก็เยอะ กองอวยก็เยอะ community ก็โคตรจะใหญ่

แต่ก็มีประเด็นอีกครับสำหรับคนอยากหัด React คือเข้าใจ concept ยากพอตัวในช่วงแรกๆ และมักจะจับต้นชนปลายไม่ค่อยจะถูก จนสุดท้ายก็งงๆ กันไป แถม document หลักของ Facebook แม่งก็อ่านไม่ค่อยจะรู้เรื่องเลย (คหสต. Facebook เป็นคนที่ชอบจะผลิต document อ่านแล้วงงๆ มาหลายอันจริงๆ ตั้งกะ Facebook API ละ -\_-)

วันนี้ก็เลยตามนั้นครับ จะมาเล่าให้ฟังว่า React มันคืออะไร เกิดมาทำไม ทำไมมันถึงมีกองอวยกันเยอะขนาดนั้น (ผมก็กลายเป็นหนึ่งในนั้นไปละ 5555) และสอนพื้นฐานรวมสิ่งที่ควรรู้ไว้ครับ

> อนึ่ง ผมหวังว่าบล็อกนี้จะเป็นเหมือนชี้ทางให้ท่านผู้อ่านที่อยากศึกษาลองเขียน React ได้ไปต่อได้ง่ายขึ้น และเข้าใจโลกของ React มากขึ้นครับ

## ผมชื่อ React และผมเกิดมาเพื่อให้คุณสร้างภาพ (View) ได้ดีขึ้น

**React นั้นเป็นแค่ JavaScript Library ครับ** (เน้นคำว่า Library หนักๆ) และมันเกิดมาเพื่อสิ่งเดียวเท่านั้น คือ

> เพื่อสร้างภาพ (View)

จากแต่ก่อนเวลาเราจะเขียนหน้าตาของเว็บ เราก็จะทำผ่าน HTML ใช่ไหมครับ เช่น

```html
<div class="hello-world-container"><h1>Hello World</h1></div>
```

แต่ใน React การจะสร้างหน้าตาของเว็บขึ้นมาได้นั้น มันมาจากสิ่งที่เรียกว่า **Component** ครับ ให้นึกภาพว่า Component เป็น block ส่วนย่อยของเว็บเราที่จะสร้างออกมา **โดยเราจะเขียนโค้ดภาษา JavaScript เพื่ออธิบายหน้าตา (อาจรวมถึงพฤติกรรม) ของ block นั้นๆ มา** แทนที่เราจะเขียนใน HTML แทน

แบบนี้

```javascript
ReactDOM.render(<h1>Hello, world!</h1>, document.getElementById('root'))
```

ซึ่ง `ReactDOM.render()` เป็นฟังก์ชันที่ตัว React จะทำการ render HTML ที่เขียนมาครับ โดยมีจุดที่จะ render อยู่ที่ DOM ที่มี id เป็น root ครับ

เอ๊ะ ยังไง งง

นั่นหมายความว่า จากตัวอย่างบน ถ้าเรามี HTML

```html
<!DOCTYPE html>
<html>
  <body>
    <div id="root"></div>
  </body>
</html>
```

ตัว React จะทำการ render หน้า HTML ทั้งหมดเป็น

```html
<!DOCTYPE html>
<html>
  <body>
    <div id="root"><h1>Hello, world!</h1></div>
  </body>
</html>
```

อะไรประมาณนี้

นั่นคือเราจะไม่เขียน HTML ใน HTML กันอีกต่อไป ด้วยพลังแห่ง React เราจะเขียนมันใน JavaScript แทน ซึ่งทำให้มีภาษาใหม่เกิดขึ้นมา (ก็ไม่เชิงภาษาใหม่) นั่นคือ **JSX** ครับ ที่ทำให้เรายัด HTML เข้าไปเขียนใน JavaScript ได้

> ดังนั้น React คือการที่เราจะเขียน View ด้วยภาษา JavaScript ที่มี HTML แทรกอยู่ ก็คือ JSX นั่นเอง

ถัดจากนี้ หลายๆ tutorial ที่สอน React ก็จะประดังประเดเรื่องอื่นๆ ที่ชวนปวดหัวเข้ามามากมาย ซึ่งเรื่องอื่นที่ว่าก็คือพวก ecosystem ที่ชาว React มักใช้กันครับ เช่น ES6, Babel ผมเลยจะขออธิบายแบบคร่าวๆ เผื่อให้ผู้อ่านไปตามอ่านได้จากที่อื่นครับ (มายัดทั้งหมดในนี้คงจะยาวมากๆ) เช่น

- **ES6**: ให้เข้าใจว่า มันคือภาษา JavaScript เวอร์ชันใหม่ครับ ที่มีฟีเจอร์มากมาย เช่น ประกาศฟังก์ชันโดยใช้ลูกศร (=>), ประกาศตัวแปรใน block scope ด้วย let, Class และอื่นๆ ครับ ซึ่งใน React หลายๆ คนแนะนำให้เขียน ES6 เพราะฟีเจอร์ใหม่ๆ มันช่วยให้เราเขียนโค้ดได้ง่ายขึ้น และสวยกว่าเดิมมาก เทียบกับเขียน JavaScript เดิมๆ
- **Babel**: คือสืบเนื่องจากเจ้า ES6 เนี่ย browser บางตัวยังไม่รองรับ ถ้าเราอยากเขียน ES6 เนี่ย เราก็ต้องแปลงให้เป็น JavaScript บ้านๆ ที่ browser รองรับได้ ซึ่ง Babel เป็นคนทำส่วนนี้ให้ครับ
- **Webpack**: เวลาเราเขียนโค้ดหลายๆ ไฟล์ เราอาจจะประสบปัญหาหลายๆ อย่าง เช่น เราจะ include script ไหนก่อนดี รวมถึงพอไฟล์เยอะๆ มันก็จะโหลดช้า Webpack ก็จะมัดรวมพวกนี้ให้เป็นไฟล์เดียว พร้อมทั้งจัดลำดับการ include ให้เสร็จสรรพ

ซึ่งในบล็อกนี้จะไม่พูดถึงสามส่วนนี้นะครับ แต่ถ้าให้ดีลองดู syntax ES6 คร่าวๆ มาก่อนก็ได้ครับ (ดู arrow function ออกก็น่าจะพอ) หรือถ้าใครชินกับภาษาที่เป็น OOP ก็อาจจะอ่านบล็อกนี้ได้ไม่ยากมากครับ

อ่อ ก่อนไปไกลกว่านี้ หากใครจะลองเริ่มเขียน React ใช้ create-react-app ก็เป็นตัวเลือกที่ดีครับ ([create-react-app](https://github.com/facebookincubator/create-react-app) เป็น Command Line tools ที่ช่วยให้เราสร้างโปรเจค React ได้โดยไม่ต้องเซ็ตอะไรเองเลย แค่สั่ง create-react-app ก็ได้โปรเจคมาเลย ถือว่าสะดวกมาก)

## ผมชื่อ React และผมขอแนะนำให้ทุกท่านรู้จักกับ Component

**ถ้าพูดถึงว่าเราจะใช้ React เพื่อเขียนอะไร คำตอบคือเรากำลังจะเขียน Component ครับ** แนวคิดของการสร้างหน้าตาเว็บแบบ Component นั้นเราอาจจะผ่านๆ ตามันมาเยอะมาก และเราอาจจะเคยมีความคิดที่อยากจะทำอะไรทำนองนี้มานานแล้ว แต่เราไม่ได้ทำสักที (หรือขี้เกียจทำ) เช่น เราทำ Searchbox ที่แม่งโคตรเทพ ทำอะไรได้เยอะมาก แต่พอจะนั่งแก้ที ถ้ามีใช้ 10 ที่ เราก็ต้องแก้ 10 รอบ 10 จุด

จะดีกว่ามากถ้าเราเขียน Component ของ Searchbox มหาเทพไว้ครั้งเดียว และเมื่อมีใครอยากใช้ Searchbox ก็แค่ไปดึงมาใช้ ถ้าจะแก้ ก็แก้ที่ Searchbox Component อันเดียว ที่เหลือจะเปลี่ยนตาม…นี่แหละครับจุดดีของ Component

> แนวคิดของ Component คือการเขียนองค์ประกอบของ View ให้ย่อยที่สุดเท่าที่จะย่อยได้ และเน้นให้ Reusable ได้เยอะ

ตัวอย่างเช่น รูปด้านล่าง ตัวอย่าง classic จาก Facebook

![](https://cdn-images-1.medium.com/max/1600/1*m2k00x1C__Nbkd2tyemyqw.png)

_ที่มา: <https://facebook.github.io/react/img/blog/thinking-in-react-components.png>_

เราสามารถแบ่งหน้าจอนี้ออกมาได้ 5 Component ด้วยกัน คือ

- **ProductRow (สีแดง)**: แสดงชื่อสินค้า และราคา
- **ProductCategoryRow (สีฟ้าอ่อน)**: แสดงชื่อประเภทสินค้า
- **ProductTable (สีเขียว)**: แสดงรายการสินค้า (ซึ่งจะประกอบด้วย ProductCategoryRow + ProductRow)
- **SearchBar (สีน้ำเงิน):** แสดง Search Box ที่ filter ข้อมูลตาราง พร้อมปุ่ม Option ว่าจะให้โชว์เฉพาะสินค้าที่มีใน stock
- **FilterableProductTable (สีส้ม):** แสดงข้อมูลสินค้า ที่เราสามารถ filter ข้อมูลในตารางได้ ด้วยการพิมพ์ใน search box (เป็นคนครอบทุกอันทั้งหมด)

ซึ่งการแบ่ง Component จะมีข้อดีที่ว่า

- มีการแบ่งส่วนกันเขียน แยกส่วนกันชัดเจน
- สามารถ reuse component ไปใช้ที่อื่นได้ หากต้องการอะไรที่คล้ายๆ กัน
- แก้ไขง่าย เช่น ถ้าเราอยากให้โชว์จำนวนสินค้าเพิ่ม เราแก้แค่ ProductRow อันเดียวพอ

และแน่นอน React เสนอให้ทำแนวทางนี้ และดันกันสุดๆ เลยทีเดียว

โดย Component ใน React นั้นจะเขียนได้หลายท่ามากๆ แต่ท่าที่ใช้กันเยอะมาก และเป็นมาตรฐานสำหรับมือใหม่ คือ extends คลาส Component ของ React มาครับ

```javascript
class HelloComponent extends React.Component {
  render() {
      return <p>Hello World!<p>;
  }
}
```

เวลาข้างนอกเอาไปใช้ ก็จะใช้ประหนึ่งเรามี tag HTML นั้นๆ มาให้ใช้เลย

```javascript
import HelloComponent from './Hello'

class WrapperComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>This is Wrapper Component</h1>
        <HelloComponent />;
      </div>
    )
  }
}
```

และแน่นอนว่า Component นั้นจะซับซ้อนมากขนาดไหนก็ได้ ไม่มีปัญหา แต่อันนี้ยกตัวอย่างให้เห็นภาพก่อน

## ผมชื่อ React และนี่เพื่อนผม JSX

![](https://cdn-images-1.medium.com/max/1600/1*j-27ksc56w9EEcBlyB7QIg.png)

ผมเคยพูดถึง JSX ไปนิดๆ ละ ที่บอกว่าเป็น JavaScript ที่ให้เราแทรก HTML เข้าไปได้ จริงๆ แล้วมันเท่ห์กว่านั้นครับ เพราะมันจะช่วยให้เรา แฝง JavaScript ไปใน HTML ได้เหมือนกัน

เช่น

```javascript
class TodayComponent extends React.Component {
  render() {
    return <p>Today is: {new Date()}</p>
  }
}
```

จะเห็นว่า เราสามารถ wrap โค้ด JavaScript หรือตัวแปร ไว้ใน HTML ได้ ด้วย `{ }` นั่นเอง

นั่นทำให้เราทำท่ายากขึ้นไปได้อีก เช่น ใช้ conditional operator ได้

```javascript
class GreetingComponent extends React.Component {
  render() {
    return <p>Hello {this.props.name ? this.props.name : 'World!'}</p>
  }
}
```

หรือถ้าอยากจะสร้าง element ซ้ำๆ จาก array ก็ใช้ map() ไง

```javascript
class ListComponent extends React.Component {
  render() {
    return (
      <ul>
        {this.props.doctors.map(doctor => (
          <li>
            {doctor.name} {doctor.lastName}
          </li>
        ))}
      </ul>
    )
  }
}
```

(นี่เป็นอีกเหตุผลที่เขาอยากให้เราเขียน ES6 เพราะมีฟีเจอร์ที่ช่วยให้ชีวิตเราง่ายขึ้นมาก)

แต่เอ๊ะ this.props คืออะไรหยอ

## ผมชื่อ React และคุณต้องรู้จักเพื่อนผมที่ชื่อว่า props กับ state

props กับ state ถือเป็นด่านโหดที่ถ้าเข้าใจไอ้สองอย่างนี้ เรื่องอื่นจะเป็นเรื่องขี้ๆ ไปเลย และชีวิตนี้ก็จะเขียน React ได้แบบสบายใจเลย

ให้นึกถึง HTML ธรรมดา อย่างใน tag `<a>` เราสามารถใช้ href เพื่อบอกได้ว่ากดลิ้งแล้วจะไปไหนใช่ไหมครับ โดยการเขียนต่อไปใน tag `<a>` เลย เช่น

```html
<a href=“https://www.google.com”>Go to Google</a>
```

ซึ่งใน React เนี่ย ไอ้การทำอะไรประมาณ href เนี่ย ก็ทำได้เหมือนกันครับ และเราเรียกมันว่า **props** นั่นเอง (มาจาก properties) props เป็นจุดที่ทำให้ React component นึง สามารถ pass ข้อมูลต่างๆ ไปอีก component นึงได้ครับ

```javascript
class ParentComponent extends React.Component {
  render() {
    return <ChildComponent message="Hello World" />
  }
}

class ChildComponent extends React.Component {
  render() {
    return <p>And then I said, “{this.props.message}”</p>
  }
}
```

มาดูกัน

- ParentComponent render ChildComponent โดยมี props message=“Hello World” ไปด้วย
- ChildComponent จะ render คำว่า And then I said, “Hello World” ให้ เพราะ ParentComponent ส่งคำว่า Hello World ผ่าน props ที่ชื่อ message นั่นเอง

> ด้วยเหตุนี้ **ทำให้ React นั้นมี flow การไหลของข้อมูลเป็น Unidirectional คือไหลไปทางเดียว จากพ่อสู่ลูก**

อ่อ แล้วก็ props ไม่จำเป็นต้องเป็นค่าตัวเลข หรือ string ธรรมดาก็ได้นะครับ อาจจะเป็น Object ทั้งก้อน หรือฟังก์ชันก็ได้

แต่แน่นอน ชีวิตมีแค่ props คงไม่พอ บาง Component ก็อยากจะต้องมีการสร้าง data อะไรบางอย่าง ไว้ใช้ในตัวมันเอง หรือส่งไปให้ลูกๆ เช่นกัน และนี่ทำให้ **state** เพื่อนอีกคนขึ้นมามีบทบาทครับ

> **state นั้นเสมือนเป็น data ที่มีการใช้แค่ภายใน Component นั้นๆ ครับ**

อารมณ์คล้ายๆ เป็น local variable นั่นแหละครับ ซึ่งการกระทำแก้ข้อมูลของ state นั้นจะทำผ่านฟังก์ชัน setState ของ React ครับ

และ state นั้นจะเป็น JavaScript object ธรรมดาครับ ดังนั้นหน้าตามันจะเป็นยังไง อยู่ที่จะสร้างสรรค์ออกมาเลย

```javascript
class MyComponent extends React.Component {
  handleClick = e => {
    this.setState({ clicked: true })
  }

  render() {
    return (
      <a href="#" onClick={this.handleClick}>
        Click me
      </a>
    )
  }
}
```

อย่างตัวอย่าง ถ้ากดปุ่ม ก็จะมีการ set state ให้มีค่าการถูกกด (clicked) เป็น true ครับ

หรืออีกตัวอย่าง เพื่อให้เห็นภาพว่า state เอาไปใช้ได้ยังไง โดยจะทำตัว CounterComponent ที่จะมีปุ่มกดที่จะเพิ่มเลขได้ และค่าเลขปัจจุบันก็จะถูกแสดงออกมา

```javascript
class CounterComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0,
    }
  }

  handleClick = e => {
    this.setState({
      count: this.state.count + 1,
    })
  }

  render() {
    return (
      <div>
        <h1>Current Count: {this.state.count}</h1>
        <a href="#" onClick={this.handleClick}>
          Increment
        </a>;
      </div>
    )
  }
}
```

- constructor จะใส่ค่า state ให้มี count เป็น 0
- ประกาศฟังก์ชัน handleClick ที่จะรอ event การกด หากมีการกด จะ set state ใหม่โดยให้ค่า count เพิ่มขึ้นจากเดิมไป 1
- render() จะ render component มา โดยจะแสดงจำนวนเลขปัจจุบัน และมีปุ่ม
- โดยเลขปัจจุบัน จะแสดงผ่านตัวแปร this.state.count (ถ้าไล่ดีๆ มันก็คือไล่ JavaScript object ธรรมดาเลย ไม่มีอะไรแปลก)
- และปุ่มจะผูกกับฟังก์ชัน handleClick ผ่าน onClick
- ดังนั้นเมื่อกดปุ่ม ก็จะเรียกฟังก์ชัน handleClick ที่จะเพิ่มค่า count ไป 1 ผ่านการ set state
- และ view จะอัพเดตหน้าตา เมื่อ state เปลี่ยน

ดังนั้นโดยสรุป

> props มาจากด้านบน / state ใช้ภายใน

ถามว่า เราโยน state เข้า props ของ component ลูกได้ไหม คำตอบคือ**ได้ครับ แต่แน่นอนตัวลูกก็มิอาจแก้ไข state ของตัวพ่อได้ เพราะมันจะเป็นแค่ props ตัวนึง**

และแม้ว่า React จะมี state ให้เราเพื่อที่เราจะโยนของลงไปให้ Component ต่างๆ แล้ว แต่ถ้าแอพเริ่มใหญ่ขึ้นการจัดการ state ก็จะยากขึ้นและงงมากขึ้น จึงมี architecture ต่างๆ มาช่วยให้เราจัดการ state ได้ง่ายขึ้น เช่น [Flux](https://facebook.github.io/flux/), [Redux](http://redux.js.org/), [MobX](https://mobx.js.org/) เป็นต้น

## ผมชื่อ React และนี่คือ Stateless Component

**Stateless Component** ผมเคยเล่าให้ฟังในบล็อก Redux อันก่อนหน้าละครับ ว่ามันคือ

> Component ที่ไม่มีการใช้ State ใดๆ ใช้แต่ props เท่านั้น

และเขียนมันออกมาในลักษณะการเขียน function ที่ return HTML ไป

```javascript
const myComponent = props => {
  return (
    <p>
      Hello {props.name}! Today is {new Date()}.
    </p>
  )
}
```

ซึ่งการเขียน Stateless Component ก็เหมาะสำหรับกรณีที่เราไม่ต้องการ state เลย ไม่ต้องทำ lifecycle hook (เดี๋ยวจะมีการกล่าวต่อไป) และที่สำคัญ อ่านเข้าใจโคตรจะง่าย

และทำให้เจ้านี่กลายเป็น Presentational Component ของจริง คือมีหน้าที่โชว์อย่างเดียว เราจะรู้เลยว่าถ้า logic จะมีปัญหา มันก็จะมาจากที่อื่น ไม่น่าจะมาจากที่นี่ เพราะมันโชว์เป็นอย่างเดียว (หรือก่อให้เกิดการเรียก action อย่างเดียว หากส่ง function ลงมา)

ถัดจากนี้จะขอ in deep detail ละเอียดมากขึ้น แต่โดยรวมแล้ว สิ่งที่ควรรู้สำหรับการเขียน React ก็มีเท่าตามข้างบนครับ ถัดจากนี้จะเสริมเพิ่มเติม (แต่ก็ควรรู้อยู่ดีครับ)

## ผมชื่อ React และ Lifecycle ของผมมันเป็นอย่างนี้

การเกิดและดับไปของ Component ใน React นั้นเราจะเรียกมันว่า **Lifecycle** ครับ ซึ่งถ้าเราเข้าใจส่วนนี้ได้ เราก็สามารถแทรกโค้ดเพื่อให้ถูกรันเฉพาะเมื่อเกิดในจังหวะต่างๆ ใน cycle ดังกล่าวได้ครับ โดยการแทรกโค้ดนั้นง่ายๆ เลย คือเขียนฟังก์ชันตามชื่อที่มีอยู่ใน Lifecycle ใน component แล้วอยากจะทำอะไรก็ทำเลย

และ Lifecycle มันเป็นยังงี้

![](https://cdn-images-1.medium.com/max/1600/1*mkeF_H0KllFDOHcQlxmjcQ.png)

ก็อช โคตรเยอะ…ใจเย็นๆ ครับ ค่อยๆ ไล่ดีกว่า

1. ครั้งแรก component จะโดน render ผ่านฟังก์ชัน **ReactDOM.render()** ที่จะ render component ทั้งหมด หากใน component มี component ย่อย ก็จะ render อันย่อยด้วย ไล่ render ไป
2. จังหวะแรก จะมีการ **getDefaultProps()** ที่จะดึงค่า props ที่เป็น default มาก่อนทั้งหมด
3. และก็จะ** getDefaultState()** เหมือนกัน
4. ถึงจุดนี้สำคัญละ คือในจังหวะที่ตัว DOM ที่กำลังจะ render มันจะถูกแปะใน DOM หลักเนี่ย มันคือจังหวะของ **componentWillMount()** ครับ ซึ่งเราสามารถมา hook cycle นี้เพื่อทำอะไรบางอย่างได้ เช่น เริ่มยิง AJAX ขอข้อมูลจาก API ได้
5. ถัดจากนั้น เมื่อ DOM ถูกแปะใน DOM หลักแล้ว ก็จะทำการ **render()** ตัว DOM ขึ้นมา ตามที่เราเขียนไป
6. เมื่อ render() เสร็จ ตอนนี้ DOM นั้นก็จะแปะอยู่ในเว็บอย่างสมบูรณ์แล้ว ก็จะเป็นจังหวะของ **componentDidMount()** ที่เราสามารถแตะต้อง DOM ที่เราเขียนได้แล้ว เช่น หากเราอยากใช้ library ของ jQuery เราก็มาใช้มันในนี้แหละ เพราะ DOM จริงๆ มันถือกำเนิดแล้ว (ก่อนหน้านั้น DOM มันกำลังจะเกิดเฉยๆ)
7. หลังจากนั้น อาจจะเกิดเหตุการณ์เช่น props จากด้านบนเปลี่ยนค่า หรือเปลี่ยน props ผ่าน setProps() จังหวะที่ props เปลี่ยนนั้นก็จะเป็นช่วงของ **componentWillReceiveProps(nextProps)** คือเป็นจังหวะที่ Component จะได้รับ props อันใหม่
8. หรือหากไม่เกิดการเซ็ต props ใหม่ แต่เกิดการเซ็ต state แทน ผ่าน setState() จังหวะนั้นก็จะโดดมาที่ **shouldComponentUpdate(nextProps, nextState)** ส่วนนี้เป็นส่วนที่สำคัญมาก เพราะว่า หาก props เปลี่ยนหรือ state เปลี่ยน มันจะโดนมาอยู่ที่จุดนี้ ซึ่งเป็นจุดที่ **Virtual DOM** ของ React มีบทบาทมาก และความเร็วของมันเกิดจากจุดนี้ครับ คือมันจะประเมินว่า component นี้ต้องมีการอัพเดตหน้า view หรือไม่ โดยมีการใช้ Virtual DOM ในการดูครับ (จะดูยังไง มีใน section สุดท้าย)
9. หาก Virtual DOM ตัดสินใจจะอัพเดต view ละ ก็จะไปที่ **componentWillUpdate(nextProps, nextState)** เลย
10. และก็จะสั่ง **render()** อีกครั้ง เพื่อ rerender ใหม่
11. และไปที่ **componentDidUpdate(prevProps, prevState)** เพื่อบอกว่าการอัพเดต component เสร็จแล้ว
12. แล้วก็จะกลับไปสู่จุดรอครับ และเป็นวังวนไป หากมี state หรือ props เปลี่ยน ก็จะไปทำตามข้อ 7 หรือ 8 ใหม่
13. หาก component นี้เกิดต้องจากลา ก็จะไปสู่ **componentWillUnmount()** ครับ ที่จะทำการ unmount DOM นี้ออกจาก DOM หลักออกไป แล้วก็ตายจากไป

การทำความรู้จักว่า Lifecycle มีอะไรบ้างนั้นช่วยให้เราสามารถเขียนโค้ดไป hook (เกาะ, เกี่ยว) กับช่วง Lifecycle ที่ต้องการได้ เช่น อยากจะยิง API ขอข้อมูล ก็ไปยิงตั้งแต่จังหวะที่จะโดน mount เลยสิ (componentWillMount()) หรือจะต้อง init Google Map ก็ต้องรอให้ DOM จริงๆ เกิดขึ้นก่อน ถึงจะ init ได้ (componentDidMount()) อะไรแบบนี้ หรือบางเคส เราตัดสินใจแทน Virtual DOM ได้ว่า ถ้าอีค่านี้เปลี่ยน ยังไง view ก็ต้องเปลี่ยน ก็ไปเขียน hook shouldComponentUpdate() แล้วตัดสินใจให้เลยก็ได้ ก็จะ optimize ประสิทธิภาพไปได้อีก

ตัวอย่างแบบหยาบๆ ถ้าเราทำ lifecycle hook

```javascript
class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  componentDidMount() {
    // code to be execute on component mounted
  }

  componentWillUnmount() {
    // code to be execute on component will unmount
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}
```

## ผมชื่อ React และสมองผมทำมาจาก Virtual DOM

ปิดท้ายวันนี้ด้วยเบื้องหลังความเร็วของ React ครับ ว่าทำไมมันถึงเร็วมากๆ เพราะตัว React นั้นมีการเปรียบเทียบการเปลี่ยนแปลงของ View จากการใช้ **Virtual DOM** ครับ

อย่างที่เราๆ ท่านๆ รู้ว่า เวลาเรามี HTML มา Browser ก็จะ render มันออกมาให้เรา แต่ว่าตัว element ต่างๆ ใน HTML นั้นสามารถถูก access ได้เพื่อทำอะไรบางอย่าง เช่น CSS มา access เพื่อ styling ให้มัน, JavaScript มา access เพื่อแปะ event ให้มัน ดังนั้น ตัว Browser มันจะไม่ได้แค่ render HTML ออกมาเป็นหน้าตาเฉยๆ แต่ยังแปลงตัว HTML ที่เราเขียนเนี่ย ไปเป็นต้นไม้ต้นนึง ที่เราเรียกมันว่า **DOM (Document Object Model) Tree** ครับ

![](https://cdn-images-1.medium.com/max/1600/1*Z32YHoZNEgAHCaozilfDIA.png)

ทีนี้ ให้ลองนึกภาพว่า สมมติหน้า View เกิดมีการอัพเดต เช่น มี element โดนถอนออก หรือมีการแก้ค่าข้างใน DOM ก็จะต้องแก้ต้นไม้ใน node ที่ต้องการอัพเดต แม้ว่า DOM มันจะหา node นั้นได้เร็วเพราะเป็นต้นไม้ แต่หากมีการอัพเดตแล้ว node นั้นมีลูกเยอะๆ ก็จะส่งผลกระทบหนักมาก นึกภาพว่าถ้าขยับ node นึง 10 pixel แต่จริงๆ แล้วทุก node ลูกนั้นๆ ต้องขยับตามด้วย และดันมีเป็นพันๆ node เงี้ย แน่นอนว่าก็ตู้ม ช้าโคตร เพราะต้องลงไปไล่แก้

และ DOM นั้นก็ไม่เก่งเรื่องการสร้าง Dynamic View ที่มีการปรับเปลี่ยนค่าใน DOM ตลอดด้วย ทำให้เมื่อหน้า View เริ่มมีความ dynamic สูงขึ้น โดยเฉพาะใน SPA ทั้งหลาย DOM จึงส่อถึงปัญหาของประสิทธิภาพอย่างชัดเจนมากขึ้น

ทีนี้ก็เลยมีคนเสนอแนวคิดนึงว่า เรียกว่า Virtual DOM

Virtual DOM บอกว่า เราจะ copy DOM ทั้งต้นมาด้วยเลย โดยเรียกมันว่า Virtual DOM (ซึ่งผมไม่แน่ใจว่าเขา represent Virtual DOM ด้วยอะไร แต่คุ้นๆ ว่าน่าจะเป็น JS Object ปกติ) ทีนี้ เวลาที่ View อยากจะอัพเดตอะไรก็ตามเนี่ย มันจะมาทำใน Virtual DOM ก่อน เมื่อแก้ใน Virtual DOM เสร็จ หากพบว่า เฮ้ย มี node ที่ View ต้องเปลี่ยนจริงๆ ก็จะทำการ patch DOM จริงๆ ให้ แต่คราวนี้เขาจะรู้ละว่ามี node ไหนที่ต้อง patch จริงๆ เพราะ View เปลี่ยน ก็จะไป patch DOM จริงเฉพาะที่จะเปลี่ยน หน้าตาก็จะเปลี่ยน

ซึ่งมันจะมี algorithm ในการตรวจเช็คว่ามีจุดไหนใน DOM จริงกับ Virtual DOM บ้างที่แตกต่าง

![](https://cdn-images-1.medium.com/max/1600/1*jb7rWNWkjLcGri_GZhxBGA.png)

Virtual DOM ด้านบนจะประเมินว่า node ไหน view มีการอัพเดตบ้าง แล้วจึงเทียบกับ DOM จริงๆ แล้วทำการอัพเดตให้ตรงกัน

ซึ่งผลของการทำ Virtual DOM มีข้อดีมหาศาล คือเราสามารถ specific จุดที่ต้องแก้ไขได้เลยจริงๆ เพราะเราประเมินมาชั้นนึงแล้วว่ามีส่วนไหนต้องอัพเดตบ้าง ทำให้ไม่เสียเวลากับการที่ต้องแก้ DOM จุดที่ไม่จำเป็นต้องแก้จริงๆ

นั่นทำให้ React จึงโดดเด่นเรื่องประสิทธิภาพเอาเรื่อง เพราะมีการใช้ Virtual DOM นี่แหละ

## ผมชื่อ React และการแนะนำตัวของผมก็จบลงเพียงเท่านี้

ทั้งนี้ทั้งนั้น หากมีความสนใจ React จริงๆ ก็ขอแนะนำให้เข้าใจ ES6 ระดับนึง เพราะจะช่วยให้ท่านเขียน React ได้มีความสุขขึ้นจริงๆ และผมก็มีความเชื่อว่า React จะยังคงไม่ล้มตายในเร็วๆ วันนี้หรอกครับ เรียนรู้ตอนนี้ อนาคตสบายแน่นอน มันเป็น popular library ไปแล้ว คนกล่าวถึงและแนะนำให้ใช้กันเยอะมากๆ community ก็ใหญ่ แถมแนวคิดหลายอย่างที่ดีๆ ก็มาจาก React ซะเยอะพอสมควร (เราอวยให้เขียน React นะ แต่ไม่ได้หมายความว่าจะไม่ใช้ Framework อื่นๆ นะ ฮ่าๆ)

เช่นเดิมครับ หากมีข้อสงสัย หรือคำแนะนำสามารถติชมกันมาได้เลย

วันนี้ก็ขอลาไปปั่นงานต่อก่อนละกันครับ สวัสดีครับ :D
