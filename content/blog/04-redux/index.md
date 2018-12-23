---
title: ทำความรู้จักกับ Redux แบบฉบับย่อยแล้วย่อยอีก
date: '2017-01-05T10:00:00.000Z'
slug: ทำความรู้จักกับ-redux-แบบฉบับย่อยแล้วย่อยอีก-b464808aca12
featuredImage: './cover.jpg'
tags: ['javascript', 'developer']
---

ปกติผมเป็นคนที่เวลาทำความรู้จักกับอะไรสักอย่าง ผมจะพยายามย่อยออกมาเป็นภาษาของตนเอง (ซึ่งเวิร์กมากๆ) และไหนๆ ก็จะนั่งย่อยความรู้แล้ว ก็เลยมาเขียนบล็อกแชร์ให้คนอื่นอ่านกันดีกว่า

สำหรับตอนนี้จะเปิดโหมดเป็น GEEK ของแท้แน่นอนละครับ หลังจากเขียนอะไรที่ไม่ใช่ GEEK หนักๆ สักพักละ ก็วันนี้จะมาอธิบายว่า [**Redux**](http://redux.js.org/) ที่หลายคนได้ยินกันมันคืออะไร มันจะเกิดมาทำไม ทำไมถึงเป็นคู่หูดูโอ้กับ React อย่างเหนียวแน่นมาก

ถ้าให้ดี แนะนำให้ทุกคนไปลองทำความรู้จักกับ React มาบ้างก่อน ซึ่งสิ่งที่ควรรู้ก็มี

- prop กับ state คืออะไร ([ไกด์นี้อธิบายความแตกต่างของสองอันนี้ได้ชัดเจนดี](https://github.com/uberVU/react-guide/blob/master/props-vs-state.md))
- จะเขียน Component ออกมาได้ยังไง

แค่นี้จริงๆ ครับ (ไม่ได้เยอะเล้ยถ้าเคยเขียน React มานิดหน่อย)

**หมายเหตุ:** ผมอาจจะยังไม่เซียน Redux มากนัก เพราะยังไม่ได้เอาไปใช้จริงจังในโปรเจคใหญ่ๆ พอได้ core concept คร่าวๆ ถ้ามีอะไรติชมก็เหมือนเดิมครับ comment มาได้เลยครับ :)

## ปัญหาของการจัดการ state ในแอพขนาดใหญ่

![](https://cdn-images-1.medium.com/max/1600/1*HKXlvGrJBbM9NPNgBtZEqg.jpeg)ที่มา: <http://image.slidesharecdn.com/react-slides-140706092503-phpapp02/95/reactjs-or-why-dom-finally-makes-sense-11-638.jpg?cb=1404638753>
อย่างที่เรารู้ๆ กันว่า state นั้นถ้าพูดกันตรงๆ จะบอกว่าเป็นข้อมูลที่ component นำไปใช้ก็ว่าได้ แต่ให้ลองนึกภาพว่าถ้าเราเขียน React แบบเพียวๆ เลย พอแอพขนาดใหญ่ขึ้น เราจะพบกับความปวดหัวของการจัดการ state พอสมควร

เช่น ตัวอย่างง่ายๆ สมมติว่ามี 2 component ต้องใช้ข้อมูล state เหมือนๆ กันเลย ถ้าเกิดเหตุการณ์ว่า state ภายใน component ใดเปลี่ยนค่ามา อีกอันก็ต้องตามไปอัพเดต ซึ่งด้วยความที่ว่า state ใน component มันจัดการในตัว component เอง ถ้าต้องข้ามหัวไปแก้ค่าของคนอื่นด้วย ความสนุกมันก็บังเกิดละ

นี่ยังไม่นับว่า ถ้าเราต้องทำ UI State จัดการ UI อย่างเดียว กับ Data State คู่ๆ กัน จะปวดหัวแค่ไหน ถ้ายังทำท่าเดิม

ดังนั้น เขาเลยมองว่า ถ้ามีคนจัดการ state สักหนึ่งคน มันคงจะดีสิ

นี่คือจุดที่ Redux เกิดขึ้นมาบนโลกนี้ครับ

## 3 หลักการ ของ Redux

Redux นำเสนอสามหลักการของตนเอง เพื่อที่จะแก้ปัญหาที่ว่า state จัดการยากเหลือเกิน โดยสามข้อนั้นคือ

### **ข้อที่หนึ่ง: Single Source of Truth —ความจริงมีเพียงหนึ่งเดียวเท่านั้นที่ Store**

![](https://cdn-images-1.medium.com/max/1600/1*akoNAnUyWIN3g8BTRU9Z5g.jpeg)โคนันก็มา (ที่มา: <http://upic.me/i/ro/z9574.jpg>)
Redux นำเสนอสิ่งที่เรียกว่า **Store **ขึ้นมา โดยที่

> Store คือคนรวม State ของทั้งแอพไว้แต่เพียงผู้เดียว

พูดง่ายๆ ทั้งแอพมี state อะไรบ้าง มาถามที่ store นี่แหละ รู้แน่นอน ทำให้เขาเรียก store ว่าเป็นแหล่งความจริงเพียงหนึ่งเดียวเท่านั้น (โคนันก็มา) ดังนั้นการ debug ดู state จึงง่ายขึ้นมาก ก็แค่มาดู store ก็รู้สภาพของโลกตอนนี้ละ

![](https://cdn-images-1.medium.com/max/1600/1*4Sq2I0T30xUmdywMzb60WQ.png)Store จะเก็บ state ทั้งหมดไว้ และส่ง state ไปให้แต่ละ component ที่ต้องการใช้ (ลูกศรสีฟ้า) ที่มาภาพ: <https://css-tricks.com/wp-content/uploads/2016/03/redux-article-3-03.svg>
ซึ่งจริงๆ store นั้นก็ไม่ได้เป็น data structure ที่ซับซ้อนยากบรรลัยนะครับ มันก็เป็น plain JavaScript object ธรรมดานี่แหละ

    {
      visibilityFilter: 'SHOW_ALL',
      todos: [
        {
          text: 'Consider using Redux',
          completed: true,
        },
        {
          text: 'Keep all state in a single tree',
          completed: false
        }
      ]
    }

ตามตัวอย่างข้างบน store นี้จะมีทั้ง todos (ซึ่งเป็น data state) กับ visibilityFilter (ที่เป็น UI state) อยู่ด้วยกันใน store ครับ

### **ข้อที่สอง: State เป็น Read-only — อยากแก้ ใช้ Action สิ**

เขาบอกว่า ถ้าเรายอมให้ state ที่อยู่ใน store มันโดนแก้ตรงๆ เนี่ย เป็นเรื่องแย่แน่ เพราะเราจะ track ยากโคตรๆ ว่าใครมันมาแก้ และอาจจะเกิดการแก้แบบมักง่ายได้ เขาเลยบอกว่า ให้ state เป็น read-only อ่านอย่างเดียว ห้ามแก้

อ่าว แล้วถ้ามัน read-only อย่างเดียว แล้วจะมี state ทำมะเขืออะไรวะ…ใจเย็นครับ state สามารถแก้ได้ แต่การจะแก้ state นั้น จะเกิดได้เมื่อมี **Action **เกิดขึ้นมาครับ

Action เป็น object ธรรมดาเหมือนกันแหละครับ ไม่ได้มีความพิเศษอะไร แต่สิ่งที่ Action จะบอกเราก็คือ ตอนนี้เกิด Action อะไรขึ้น แล้วมีค่าอะไรแฝงมาไหม ตัวอย่างเช่น

    store.dispatch({
      type: 'COMPLETE_TODO',
      index: 1
    })

    store.dispatch({
      type: 'SET_VISIBILITY_FILTER',
      filter: 'SHOW_COMPLETED'
    })

dispatch เป็นฟังก์ชันที่ไว้ใช้บอก store ว่าเกิด action ขึ้น โดยในฟังก์ชัน dispatch จะมีพารามิเตอร์คือ Action ครับ อย่างที่เห็น ตัวอย่างจะมี 2 action คือ

- **COMPLETE_TODO:** ทำ todo นี้แล้วนะ พร้อมบอกด้วยว่าทำ todo อันไหนไปแล้ว ผ่านการใช้เลข index
- **SET_VISIBILITY_FILTER:** set filter ว่าจะให้เห็นอะไรบ้าง ซึ่งมีการบอกด้วยว่าให้ filter โชว์ ‘SHOW_COMPLETED’ หรือก็คืออันที่เสร็จแล้ว

> จะเห็นได้ว่า action ต้องมีการบอก type บอกว่าจะทำอะไร ส่วนอื่นๆ จะมีไม่มีขึ้นอยู่ว่าเราจะให้ action ทำอะไร หรือ action นี้ต้องใช้อะไร

เช่น การ complete todo ก็ต้องรู้ว่าอันไหนถูก complete

แต่ action เป็นแค่การบอกว่าจะทำอะไร…ดังนั้นเราจึงขาดส่วนสุดท้ายไม่ได้เลย นั่นคือ

### ข้อที่สาม: การเปลี่ยน State ต้องเป็น Pure function เท่านั้น — ทำผ่าน Reducers

เมื่อมี action มาแล้ว ทีนี้คนการจะเปลี่ยน state ได้ Redux บอกว่า ต้องทำผ่าน Pure function เท่านั้น โดยคนที่จะทำการแก้ state นั้นคือคนที่เรียกว่า **Reducers** ครับ Reducers จะเป็น function ที่มีหน้าที่ในการดูว่าตอนนี้ state เป็นอะไร และถ้า action นี้มา state ใหม่จะเป็นอะไร

ลองดูโค้ดครับ

    function visibilityFilter(state = 'SHOW_ALL', action) {
      switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
          return action.filter
        default:
          return state
      }
    }

อย่าง reducer ตัวนี้ จะเป็นคนจัดการเซ็ต visibility filter สำหรับหน้า UI โดยที่ถ้าดูๆ จะเห็นว่า มันเป็นฟังก์ชันรับสองพารามิเตอร์ อันแรกคือ state ปัจจุบันครับ (ซึ่ง default อันนี้คือ `SHOW_ALL` โชว์ทั้งหมด) และอีกอันคือ action ที่เกิดขึ้นครับ โดยสิ่งที่เราจะทำคือ หาก action นั้นเป็น type `SET_VISIBILITY_FILTER` ให้ return ค่า filter จาก object action ออกไปเลย **ซึ่งค่าที่ return นั้นคือ state ใหม่เลย**

> ดังนั้นจริงๆ แล้ว reducer นั้นเขาไม่ได้แก้ค่า state ครับ แต่ผลิต state ใหม่ออกไปให้

และแน่นอน ก็มีกรณีทั่วไป คือถ้า type ไม่เข้าพวก ก็จะ return state เดิมไป

![](https://cdn-images-1.medium.com/max/1600/1*IdmwO716Mm4hcAlFxSUl6g.png)หน้าที่ของ Reducer แบบฉบับรูป (ที่มา: <https://css-tricks.com/wp-content/uploads/2016/03/redux-article-3-04.svg>)
มาลองดูอันที่ซับซ้อนขึ้น

    function todos(state = [], action) {
      switch (action.type) {
        case 'ADD_TODO':
          return [
            ...state,
            {
              text: action.text,
              completed: false
            }
          ]
        case 'COMPLETE_TODO':
          return state.map((todo, index) => {
            if (index === action.index) {
              return Object.assign({}, todo, {
                completed: true
              })
            }
            return todo
          })
        default:
          return state
      }
    }

อันนี้เป็น reducer ที่จะจัดการข้อมูล todo ครับ โดยหากสมมติว่า action ที่มาคือ user ทำการเพิ่ม todo อันใหม่ไป (action type เป็น ‘ADD_TODO’) ก็จะคืน state ใหม่ที่จะทำการเพิ่ม todo อันใหม่ลงไปใน state เดิมครับ (**อย่าลืมว่าเราคืน state ใหม่ไปนะ**)

ที่เห็นมี …state แล้วอะไรต่อนั้น มันเป็นท่าใน JavaScript ES6 ครับ ขอไม่อธิบายเพิ่มละกัน (จำชื่อเรียกมันไม่ได้ ไม่ใช่อะไร 5555)

นอกจากนั้นอีกเคสคือ ถ้า type เป็น ‘COMPLETE_TODO’ ก็จะจัดการเซ็ตให้ field completed เป็น true ใน index ที่เขาบอกมาครับ แต่อย่าลืมว่าเราไม่ได้เซ็ต field ดังกล่าวกับ state เดิมตรงๆ เราจะ return state ใหม่ที่เซ็ต field ดังกล่าวแล้วครับ

มาถึงจุดนี้ทำให้หลายคนเริ่มเข้าใจละว่า ทำไมจะเขียน Redux ต้องรู้จัก functional programming มาบ้างเพื่อจะเขียน Redux เพราะการเปลี่ยน state นั้นจะผ่าน reducer ที่เป็น pure function โดย reducer ต้อง return state ใหม่ไปให้ ห้ามแก้จาก state เก่าครับ (อย่างนี้นี่เอง)

แต่อย่างที่เห็น เราจะพบว่ามี reducer สองตัว เราก็จะทำการรวมมันเข้าด้วยกัน เป็นเสมือน reducer ตัวเดียว

    import { combineReducers, createStore } from 'redux'
    let reducer = combineReducers({ visibilityFilter, todos })
    let store = createStore(reducer)

(ดูดีๆ นะ reducer รวมเป็น object ก้อนเดียว)

แต่ในความจริง เรามี state เยอะมากๆ ดังนั้น reducer ก็มีมากตัวตาม และแน่นอน เราจะใช้ reducer กี่ตัวก็ได้ ตามการใช้งานเลย

## Presentational กับ Containers components

ทีนี้อย่างที่เห็นๆ ไป Redux ได้นำเสนอ Architecture ของการทำแอพออกมา โดยใช้หลักการสามข้อดังกล่าว ทำให้ตัว Redux เฉยๆ นั้นเทียบเท่ากับพวกตระกูล MV\* ทั้งหลายนั่นแหละครับ คือนำเสนอ Architecture เพื่อให้เราชาว developer นำไปเลือกใช้ได้เพื่อให้ชีวิตมันสะดวกสบายมากขึ้นครับ

แต่ทีนี้เนื่องจาก Redux เองมันก็เกิดมาจากแนวคิดของ [Flux](https://facebook.github.io/flux/) (ซึ่งเป็น architecture นึง) และมันเกิดมาควบคู่กับคำว่า state ทำให้ Redux นั้นจึงมีคนเอาไปใช้กับ React เยอะมากๆ (เหมือนจริงๆ มันเกิดมาเพื่อ React เลยอะไรประมาณนั้น) แน่นอนว่าก็ต้องมีคนทำตัว integrate ระหว่าง React กับ Redux ให้มันอยู่ด้วยกันได้

> มาถึงตรงนี้อยากให้คำนึงว่า React จะสนใจแค่ View แต่ Redux จะสนใจการจัดการข้อมูลของ state ผ่าน store นะครับ

แต่ทีนี้การที่มันจะอยู่ด้วยกันได้เนี่ย Redux เองก็นำเสนอไอเดียของการแบ่ง component ออกเป็นสองจำพวก คือ

> **จำพวกฉลาด (Smart — Containers) กับจำพวกโง่ (Dumb — Presentational)**

มาที่จำพวกหลังก่อนละกัน **จำพวกโง่ Presentational** ชื่อก็บอกอยู่มันเป็น Presentational ทำหน้าที่แสดงผลอย่างเดียว ดังนั้น component ที่เป็น Presentational จะต้อง

- คำนึงถึงแค่ว่า**หน้าตาจะเป็นยังไง**
- ใน presentational component อาจมีได้ทั้ง presentational หรือ containers component อยู่ข้างในก็ได้ และมักจะใส่ style ให้พวกนั้นได้
- **ไม่ต้องคำนึงว่า data จะมาจากไหน**
- **รับทั้ง data ทั้ง callback function ผ่าน props** (ทำให้ action จะถูก define จาก component ที่โยนเข้ามาให้ props)
- ไม่ค่อยมี state ภายใน (แต่อาจจะมีก็ได้)
- ปกติเราจะเขียนมันเป็น **[stateless component](https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html#stateless-functional-components)** เพราะมันไม่มี state ไง เว้นแต่ว่า เราต้องทำ [lifecycle hooks](https://facebook.github.io/react/docs/react-component.html), [performance optimization](https://facebook.github.io/react/docs/optimizing-performance.html) หรือต้องใช้ state

ดังนั้นจริงๆ แล้ว**คำว่าโง่มันก็คือ ตัวมันไม่ต้องคิดอะไรมากมายเลย** เขาโยน props อะไรมา ก็แสดงผลตามนั้น หรือเขา pass callback function อะไรมา เราก็แค่ไปแปะใน view ว่าถ้าทำตามนี้จะเกิด action ดังกล่าวเฉยๆ

โอเค แล้วทีนี้ **จำพวกฉลาดหล่ะ? Containers** นั้นจะเป็นคนที่

- คำนึงถึงว่า**แอพจะทำงานยังไง**
- มีได้ทั้ง presentational หรือ containers component เหมือนกัน แต่ว่าโดยปกติเราแค่จะ wrap div เฉยๆ ไม่ได้ตกแต่งหน้าตาอะไรแบบ presentational
- **จะเป็นคนคำนึงถึง data behavior **ให้กับ presentational component เอง (หรือให้ containers component อื่นๆ ก็ได้)
- **จะเป็นคนเรียก action ของ Redux** ผ่าน callback function ที่โยนไปให้ presentational ผ่าน props (คือเราจะ wrap action ที่ต้องการให้เกิด ผ่าน callback function ไปให้ presentational เป็นคน trigger จริงๆ)
- **ปกติจะเป็น stateful component เลย**
- และ **containers จะถูกสร้างเป็น [Higher Order Component](https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750#.hispoyn1n)** (สั้นๆ มันคือ component ที่ wrap component อื่นๆ) ผ่านฟังก์ชัน connect() ของ React Redux (ถ้าใช้ architecture อื่นๆ ก็จะมีอะไรประมาณนี้เหมือนๆ กัน แต่ชื่อฟังก์ชันจะต่างกันไปตาม architecture นั้นๆ)

หากสนใจอ่านละเอียดลึกๆ ตามนี้ได้เลย
[**Presentational and Container Components**

*You’ll find your components much easier to reuse and reason about if you divide them into two categories.*medium.com](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0 "https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0")[](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

## สรุปแล้ว Containers จะมายังไง?

โดยปกติ containers ของ React Redux นั้นจะสร้างจากฟังก์ชัน **connect()** เลย จะขอยกตัวอย่างเป็นโค้ดละกันครับ

สมมติเรามี TodoList component

    import React from 'react'
    import Todo from './Todo'

    const TodoList = ({ todos, onTodoClick }) => (
      <ul>
        {todos.map(todo =>
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => onTodoClick(todo.id)}
          />
        )}
      </ul>
    )

    export default TodoList

เราจะรู้เลยว่า อ่อไอ้นี่มัน Dumb component นี่หว่า เพราะมันจะทำหน้าที่แค่

- เอารายการ todos มาโชว์เฉยๆ
- ถ้าคลิกที่ todo ใดๆ ก็จะสั่งฟังก์ชัน onTodoClick ให้
- ซึ่งทั้งสองอย่างนั้นมันไม่ต้องรู้เลยว่าคืออะไร (BELIEVE ว่ามันจะมาถูกนะ)
- และยังเขียนเป็น stateless component อีกด้วย

ทีนี้ใน TodoList นี้ก็มีการใช้ component Todo ด้วย ดังนั้นจึงต้องทำ component ของ Todo ด้วย ดังนี้

    import React from 'react'

    const Todo = ({ onClick, completed, text }) => (
      <li
        onClick={onClick}
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}
      >
        {text}
      </li>
    )

    export default Todo

เช่นเดียวกับ TodoList อันนี้ก็เป็น dumb component อีกอัน

เอาล่ะ ตอนนี้เรามี view ที่มีรายการของ Todo ละ ตอนนี้เราต้องเอา store ของ Redux ที่เก็บ state ของแอพมาผูกรวมกันกับ view ที่เราเขียนด้วย React แล้ว โดยตอนนี้เราจะทำ TodoList ที่จะมีการกดเปลี่ยน state การมองเห็นได้ (จะโชว์หมด, โชว์ที่ทำเสร็จแล้ว, โชว์ที่ยังทำไม่เสร็จ)

ลองคิดดูว่าเราจะส่ง state ผ่านอะไรให้ dumb component ไปโชว์หว่า…อ๋อ ก็ส่งผ่าน props ไงหล่ะ ใน React Redux นั้นเราจะผูก store กับ component ผ่านฟังก์ชันที่ชื่อ connect() แต่ทั้งนั้น พารามิเตอร์ของฟังก์ชันนี้ต้องการฟังก์ชันพิเศษ ที่เรียกว่า **mapStateToProps** ที่จะเป็นคนทำการ แปลง state ของ Redux ให้อยู่ในรูปของ props ของ React

ลองดูโค้ดกัน

    const getVisibleTodos = (todos, filter) => {
      switch (filter) {
        case 'SHOW_ALL':
          return todos
        case 'SHOW_COMPLETED':
          return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
          return todos.filter(t => !t.completed)
      }
    }

เริ่มอันแรก เราสร้างฟังก์ชันชื่อ getVisibleTodos ที่จะรับพารามิเตอร์คือ todo list และ filter โดยฟังก์ชันนี้จะคืนรายการ todo ตาม filter ที่เข้ามา เช่น

- ถ้า SHOW_ALL ก็จะ return todo ทุกอันไป
- ถ้าโชว์แต่ complete (SHOW_COMPLETED) ก็จะ return เฉพาะ todo ที่ complete แล้ว
- SHOW_ACTIVE ก็เช่นกัน จะ return เฉพาะ todo ที่ยังไม่ complete

และไฮไลท์คือฟังก์ชัน mapStateToProps ครับ

    const mapStateToProps = (state) => {
      return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
      }
    }

ฟังก์ชันนี้จะทำการ return props ที่จะส่งให้ Dumb component เอาไปใช้จริงๆ โดยมีพารามิเตอร์เป็น state ปัจจุบันครับ (มันเลยเรียกว่า mapStateToProps ไงครับ คือแปลงจาก state ของ Redux เป็น props ของ React) โดยอันนี้จะได้ props ที่มี key ชื่อ todos มี value เป็นรายการ todos ตามการ filter ปัจจุบัน โดยจะได้มาจาก function ที่เราเขียนไว้

แต่ทีนี้อย่าลืมว่าเราทำ action ไว้ด้วย เมื่อกด todo อันใดๆ ก็จะทำการเปลี่ยนสถานะ todo อันนั้นเป็น complete ดังนั้น Redux จึงให้เราเขียนอีกฟังก์ชันนึง คือ **mapDispatchToProps** ที่จะแปลงร่าง dispatch (ตัวส่ง action ให้ reducers) ให้เป็น props เพื่อให้ Dumb component เอาไปเรียกนั่นเอง

    const mapDispatchToProps = (dispatch) => {
      return {
        onTodoClick: (id) => {
          dispatch(toggleTodo(id))
        }
      }
    }

โดยอันนี้เราจะให้มีการ dispatch action toggleTodo ตาม id ที่ส่งมานั่นเอง

จะเห็นว่าตอนนี้ หากเราส่ง onTodoClick ไปให้ component แล้ว component ก็จะสนใจแค่ว่า เออถ้ากด todo อันนี้ ให้เรียกฟังก์ชันนี้ แต่ตัว component นั้นจะไม่รู้ว่าข้างในทำงานยังไงนั่นเอง

เสร็จแล้วเราเอามันประกอบร่างกับ React component ด้วยฟังก์ชัน connect ครับ

    import { connect } from 'react-redux'

    const VisibleTodoList = connect(
      mapStateToProps,
      mapDispatchToProps
    )(TodoList)

    export default VisibleTodoList

และ VisibleTodoList ที่ได้มันคือ containers นี่เอง อย่างที่บอกครับ มันเป็น Higher Order Component มันจะ wrap component ที่เราเขียนๆ มาเฉยๆ แต่การ wrap นี้มันพิเศษที่เรามีการแปลง Redux state ให้อยู่ในรูปของ props ที่ component TodoList จะเอาไปใช้นั่นเอง

ย้อนกลับไปดู component TodoList ได้ จะเห็นว่ามันรับ props มาสองอันผ่านพารามิเตอร์ของฟังก์ชัน ซึ่งตรงกับที่เราเขียนใน mapStateToProps กับ mapDispatchToProps พอดีเลย

แต่ทั้งนี้ทั้งนั้น สุดท้ายแล้ว component ชั้นนอกสุด (Root component หรือบางคนจะใช้ App component) ก็ต้องจัดแจง store ให้กับทั้งแอพครับ ไม่งั้น container ก็ไม่รู้ว่าจะเอา state จากไหนไป map ให้ โดยใน React Redux มี component ชื่อ Provider เป็นคนจัดการให้

    import React from 'react'
    import { render } from 'react-dom'
    import { Provider } from 'react-redux'
    import { createStore } from 'redux'
    import todoApp from './reducers'
    import App from './components/App'

    let store = createStore(todoApp)

    render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root')
    )

## ขอภาพรวม?

จัดไป

![](https://cdn-images-1.medium.com/max/1600/1*6KJCCv9bezWXqkR6FSOcAg.png)ภาพรวมของ Redux (ฉบับเล็กสุดๆ)

## จริงๆ Redux ไม่ได้ใช้ได้แค่กับ React เท่านั้นนะ

อย่าลืมว่า Redux เป็น Architecture แบบนึง ดังนั้นจริงๆ แล้วเราเอาแนวคิดนี้ไปใช้ได้ในหลายๆ framework ครับ ซึ่งมีคนทำ binding ไว้ให้อยู่ด้วย เช่น

- Vue.js — [revue](https://github.com/revue/revue), [vuex](https://github.com/vuejs/vuex)
- AngularJS — [ng-redux](https://github.com/angular-redux/ng-redux)
- Angular 2 — [ng2-redux](https://github.com/wbuchwalter/ng2-redux)
- Swift — [ReSwift](https://github.com/ReSwift/ReSwift), [ReduxKit](https://github.com/ReduxKit/ReduxKit) (เขียน iOS ก็ยังใช้ Redux ได้ คิดดู)

## จุดดีจุดเสีย (จากความเห็นส่วนตัว)

อันนี้ขอเล่าจากมุมมองที่เคยใช้ในสองงาน (Senior Project ที่กำลังทำอยู่ กับ Side Project ที่กำลังแอบทำอยู่ 55) ว่า Redux มีดีเสียยังไง

**ข้อดีกันก่อน**

- **Debug ง่ายขึ้นมากกกกกกกกกกก**: เพราะทุกอย่างมันมี step ชัดมากๆ ถ้า state จะแก้ได้ ต้องผ่าน action ซึ่งจะผ่าน reducers อีกชั้น แถมพอติด [redux-logger](https://github.com/evgenyrodionov/redux-logger) ไปด้วย โหชีวิตหาบั๊คง่ายขึ้นเยอะ และไหนจะว่ามี store ที่เก็บทุกอย่างไว้อีก ถ้าอันไหนบึ้ม ก็ไปนั่งงัดใน store ดูเอาเลย
- **Seperation of Concern ดีมาก**: Redux ให้ Seperation of Concern (แบ่งส่วนที่ต้องโฟกัส) กันได้ดีมาก เพราะ Redux จะคุม data flow เท่านั้น ถ้าปัญหาเกิดจาก data เราจะรู้ทันทีว่าเกิดจาก data ไม่ได้เกิดจาก view
- **Test ง่าย**: และพอมัน seperate กับ view ได้เยอะ นั่นทำให้เราเทส data flow แยกกับ view ได้

**ข้อเสีย**

- **You need to become a functional programmer:** ถ้าจะเขียนให้เก่งๆ ลื่นไหล ก็ต้องเป็น functional programming เป็นบ้างละ (ถ้าเขียนเป็น อันนี้คงไม่เป็นข้อเสีย)
- **เข้าใจยากโคตร**: กว่าจะเข้าใจทั้งหมดนี้ได้ เลือดตาแทบกระเด็น (อ่านให้รู้เรื่อง กับลองทำจริง นี่คนละเรื่อง 55)

(ถ้ามาอ่านดีๆ จะพบว่า อวยหนักกว่าไม่อวย 55)

## คงจะเห็นภาพกันมากขึ้น

หวังว่ามาถึงจุดนี้ทุกคนคงจะเห็นภาพของการใช้ Redux มากขึ้นครับ จริงๆ แล้ว Redux ไม่ได้มีแค่องค์ประกอบหลัก 3 อัน (Store, Action, Reducer) แต่ยังมีอื่นๆ อีกที่ช่วยให้ชีวิตสบายขึ้น เช่น Middleware หรือวิธีการจัดการ action ที่เป็น Asynchronous อีก ซึ่งไว้คราวหน้าผมก็จะมาเขียนเล่าๆ ให้ฟังกันครับ

สำหรับตอนนี้ก็หมดแต่เพียงเท่านี้ ขอบคุณทุกท่านที่ตามอ่านถึงตรงนี้ครับ ใครสงสัยจุดไหน หรืออยากแนะนำส่วนไหนเพิ่มเติม comment ได้เลยนะครับ :D

## ส่งท้าย: บทความน่าอ่าน

หากสนใจ Redux หรือ React สามารถอ่านเพิ่มเติมได้จากนี้

- [Official Redux](http://redux.js.org/) (ตัวอย่างโค้ดผมเอามาจากในนี้)
- [อธิบาย Higher Order Component](https://medium.com/@franleplant/react-higher-order-components-in-depth-cf9032ee6c3e#.jghr8ypc2)
- [React Training](https://rangle-io.gitbooks.io/react-training/content/)
- [Leveling Up with React: Redux](https://css-tricks.com/learning-react-redux/)
