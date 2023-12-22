---
title: นี่ปี 2017 แล้ว มาเขียน ES6 กัน
date: '2017-01-15T10:00:00.000Z'
slug: es6-js
featuredImage: '/assets/05-es6/cover.jpg'
tags: ['JavaScript', 'Coding']
---

ในปีที่ผ่านมา JavaScript นับเป็นภาษาที่ซ่าเอามากๆ Framework, Library ก็เยอะแยะไปหมดจนตามกันไม่ไหว พอเริ่มขุดคุ้ยทำความเข้าใจกับ Framework แต่ละอัน เรามักจะได้ขอแถมเต็มไปหมดเลย และผมเชื่อว่าหนึ่งในคำที่หลายๆ คนมักจะเจอบ่อยมากๆ คือคำว่า **ES6** นี่แหละครับ

วันนี้ก็เลยจะมาอธิบายว่า ES6 มันคืออะไรกัน และทำไมเราถึงต้องเขียน ES6 กันได้แล้ว

ไม่พูดพร่ำทำเพลง ไปดูกันเลยดีกว่าว่า ES6 มันคืออะไรกันแน่

## ES6 คือ?

ES6 ย่อมาจาก **ECMAScript 6** ครับ เป็นมาตรฐานของภาษา JavaScript ตัวใหม่ ที่ออกมาได้จะสองปีละ (ออกมาปี 2015) จุดที่น่าสนใจของ ES6 คือ เป็นการปรับปรุงตัวภาษาใหม่แบบยกเครื่องกันเลยทีเดียว พร้อมเพิ่มฟีเจอร์ที่ช่วยให้ Developer ขอบตาดำอย่างเราๆ ท่านๆ สามารถเขียน JavaScript ได้โดยปวดหัวน้อยลง และ syntax ดีงามมากขึ้น ซึ่งประเด็นที่มีคนเชียร์ให้เราเขียน ES6 มากขึ้น เพราะเขาสัญญาว่า ในเวอร์ชันถัดไป (ES7 และ Beyond ไปกว่านั้น) จะปรับแก้ไม่ยกเครื่องขนาดนี้แล้ว จะเพิ่มฟีเจอร์เล็กๆ น้อยๆ แทน

> พูดง่ายๆ ก็คือ หัดเขียน ES6 กันเถิด อนาคตจะดีเอง

แต่มันก็มีประเด็นครับ คือแม้เจ้ามาตรฐานนี้มันจะมีมาเกือบสองปีละ แต่ว่าเจ้า Web Browser ที่เราๆ ใช้เนี่ย ยัง support ES6 แค่บางฟีเจอร์ครับ (บางตัวก็ support เยอะ บางอันก็ support น้อย) ทำให้มันก็มีความปวดหัวในตอนนี้ว่าถ้าเราอยากจะเขียน JavaScript ด้วย ES6 เราก็ต้องแปลงมันให้เป็น ES5 ก่อน โดยใช้ [**Babel**](https://babeljs.io/) เป็นตัว transpile แปลจาก ES6 เป็น ES5 ให้ครับ

แต่ประเด็นของบทความนี้ ผมจะไม่มาสอน Babel ว่าเซ็ตยังไงใช้ยังไงครับ (ไปหากันดูได้ตาม Google ซึ่งผมว่าเซ็ตง่ายนะเทียบกับอันอื่น) ผมจะขอโฟกัสที่ตัว ES6 ก่อนว่ามีอะไรปรับปรุงแก้จาก ES5 หรือ JavaScript เดิมๆ บ้าง

> อ่อ ก่อนจะไปกันต่อ จริงๆ แล้ว ES6 พัฒนาเพิ่มจาก ES5 หรือ JavaScript บ้านๆ แบบ superset ครับ กล่าวคืออะไรที่ JavaScript เดิมๆ บ้านๆ ยังทำได้ ES6 ก็ยังทำแบบนั้นได้ครับ

## ตัวแปรทะลุบล็อก? let ช่วยท่านได้

เดิมเวลาเราประกาศตัวแปร เราจะใช้ var ใช่ไหมครับ ซึ่งมันก็มีประเด็นว่า ถ้าเราทำอะไรแบบนี้

```javascript
// ES5
var x = 3
if (x === 3) {
  var y = 4
  console.log('This is y:', y) // This is y inside: 4
}
console.log('This is y outside:', y) // This is y outside: 4
```

ตัวแปรมันจะเกิดทะลุออกมาข้างนอกบล็อก if (ซึ่งหลายคนเคยเจอแบบนี้แล้วช็อคกันไปหลายที) แต่ใน ES6 เรามี let ให้ท่านใช้แล้ว โดย let เป็นการประกาศตัวแปรโดย scope จะอยู่แค่ในบล็อกนั้นๆ

```javascript
// ES6
let x = 3
if (x === 3) {
  let y = 4
  console.log('This is y:', y) // This is y inside: 4
}
console.log('This is y outside:', y) // This is y outside: undefined
```

ซึ่งหลายๆ code guideline แนะนำให้ใช้ let แทน var กันหมดแล้ว ถ้าได้เขียน ES6

## ประกาศ constant ได้แล้ว

ใน ES6 เราประกาศตัวแปร constant ที่เป็น Read-only แก้ค่าไม่ได้ได้แล้ว

```javascript
// ES6
const PI = 3.141593
```

ทำให้อย่างฝั่ง Node.js เวลา require package อื่นๆ มาใช้ เราก็สามารถใช้ const ได้เลย

```javascript
// ES6
const express = require('express')
const fs = require('fs')
```

> อ่อ พูดถึง Node.js ใน Node.js เวอร์ชันใหม่ๆ (6 เป็นต้นไป) รองรับ ES6 ไป 99% แล้วจ้า แบบไม่ต้องมีตัวแปลงใดๆ เขียนสดได้เลย

## ลาก่อน function() สวัสดี =>

อีกสิ่งที่เปลี่ยนไปเยอะมากๆ คือใน ES6 นั้นเราสามารถประกาศฟังก์ชันโดยใช้ลูกศร => ได้แล้ว เราเรียกมันว่า **Arrow Function**

```javascript
// ES5
var greeting = function(name) {
  console.log('Hello ' + name)
}

var multiplyValue = function(a) {
  return a * 2
}

var add = function(a, b) {
  return a + b
}

var iHaveNoIdea = function(a, b) {
  console.log('I have no idea what am I doing here')
  return a * b
}

// ES6 Arrow Function

var greeting = name => {
  console.log('Hello ' + name)
}

var multiplyValue = a => a * 2

var add = (a, b) => a + b

var iHaveNoIdea = (a, b) => {
  console.log('I have no idea what am I doing here')
  return a * b
}
```

ซึ่ง Arrow Function นั้นมีจุดสังเกตคือ

- ถ้ามี parameter เดียว ละเว้น ( ) ได้
- ถ้าทำแค่ return ค่า ไม่จำเป็นต้องใช้คำว่า return แล้ว

และมีอีกจุดที่คิดว่าชีวิตหลายคนคงดีขึ้น คือ scope ของ this นั้นจะเป็น scope เดียวกันด้านนอกแล้วเมื่อใช้ arrow function

จากแต่ก่อน

```javascript
// ES5
var self = this
this.nums.forEach(function(v) {
  if (v % 5 === 0) self.fives.push(v)
})
```

มาเป็น

```javascript
// ES6
this.nums.forEach(v => {
  if (v % 5 === 0) this.fives.push(v)
})
```

คงจะปวดหัวกับ scope this กันน้อยลงแล้ว

## พอกันที่กับการต่อสตริง Template String มาแล้ว

เลิกนั่งต่อสตริงได้แล้วครับ เพราะ ES6 มี **Template String** แล้ว

```javascript
var name = 'John',
  lastName = 'Cena'
// ES5 String concat
console.log('My name is ' + name + ' ' + lastName + '.')
// ES6 Template String
console.log(`My name is ${name} ${lastName}.`)
```

และ support multiline string ได้แล้วด้วย

```javascript
const str = `I can do this
    now.`
```

## Default, Rest, Spread parameter

นอกจากนี้ยังเพิ่มฟีเจอร์ที่เกี่ยวกับพารามิเตอร์ในฟังก์ชันอีกด้วย เริ่มกันที่ **Default Parameter** ที่เราสามารถใส่ค่า default value ให้กับพารามิเตอร์บางตัวได้ หากไม่มีการส่งค่ามาให้ ก็จะใช้ค่า default นั้นเลย ซึ่งถ้าเป็นแต่ก่อนเราต้องดัก undefined value เองแล้วมาเซ็ตค่าให้มัน

```javascript
// ES6 Default Parameter
function addThreeValues(a, b = 2, c = 3) {
  return a + b + c
}
f(1) // 6
```

ต่อมาคือ **Rest Parameter** ที่เราสามารถเขียนฟังก์ชันโดยหากมีการส่งพารามิเตอร์มาเกิน ก็จะรวมพารามิเตอร์ตัวที่เกินๆ เป็น array ก้อนเดียวให้

ดูโค้ดจะเข้าใจง่ายกว่า

```javascript
// ES6 Rest Parameter
function f(x, ...y) {
  return x * y.length
}
f(3, 'hello', true, 2.2) // 9
// ฟังก์ชันด้านบน ตัวแปร y ในฟังก์ชันจะกลายเป็น ["hello", true, 2.2]
```

ส่วนสุดท้ายคือ **Spread** ครับ จริงๆ แล้ว Spread นั้นเป็น Operator ที่เราสามารถแจกแจงสมาชิกของตัวแปรได้ เช่น ถ้าเป็น array ก็สามารถแจงสมาชิกของ array ออกมาได้ หรือถ้าเป็น string ก็แจกแจงอักขระแต่ละตัวได้

```javascript
// ES6 Spread Operator
var params = ['John Cena', true, 7]
var other = [1, 2, ...params] // [1, 2, "John Cena", true, 7]

var str = 'foo'
var chars = [...str] // [ "f", "o", "o" ]
```

เรียกได้ Spread ช่วยให้เราลาขาดกับการวนลูปต่อ array หรือ split เอาอักขระแต่ละตัวจากสตริงมาได้เลย

## Object Destructuring

อันนี้เท่ห์มากครับ (บางอันจะคล้าย Python พอตัว) เราสามารถ match ตัวแปรกับ array หรือ object เมื่อเรา assign ตัวแปรได้แล้วครับ

```javascript
// ES6 List Matching
var [a, , b] = [1, 2, 3]
console.log(a) // 1
console.log(b) // 3

// ES6 Object Matching
var coordinate = {
  lat: 13.23456,
  lng: 153.12307,
  x: 200,
  y: 117,
}
var { lat, lng } = coordinate
console.log(lat) // 13.23456
console.log(lng) // 153.12307
```

หรือบางที key ที่เราอยากจะ match อยู่ลึก หรือไม่อยากจะใช้ชื่อนั้นๆ เพราะไม่สื่อความ เราสามารถ reassign ชื่อตัวแปรให้ได้เลย

```javascript
    var busPixelLocation = {
        x: 200,
        y: 117,
        geo: {
            lat: 13.23456,
            lng: 153.12307
        }
    }
    var { x: busXLocation, y: busYLocation, geo: { lat: busLat, lng: busLng } = coordinate;
    console.log(busXLocation); // 200
    console.log(busYLocation); // 117
    console.log(busLat); // 13.23456
    console.log(busLng); // 153.12307
```

หรือถ้ากันพลาดว่ามันจะระเบิด เราก็ assign default ให้ได้

```javascript
// Fail-soft destructuring
var [a] = []
console.log(a) // undefined

// Fail-soft destructuring with default
var [a = 1] = []
console.log(a) // 1
```

และด้วยความที่เราทำ Object Destructuring ได้ ทำให้ในการเขียนฟังก์ชันเราก็ใช้ท่านี้ได้เหมือนกัน

```javascript
function logLocation({ lat, lng }) {
  console.log(lat, lng)
}
logLocation({
  lat: 13.23456,
  lng: 121.22471,
  locationName: 'Siam',
})
// 13,23456, 121.22471
```

## ES6 Modules

จากแต่ก่อนเวลาเราจะใช้ modules อื่นๆ จะเขียนมาในแบบของ AMD หรือ CommonJS modules กันให้เรา require() ไปใช้ได้ แต่ใน ES6 เรามี syntax เกี่ยวกับการเขียนและเรียกใช้ module ใหม่หมดเลย โดยมี keyword คือ **export** กับ **import**

```javascript
// lib/math.js
export function sum(x, y) {
  return x + y
}
export const PI = 3.141593

// app.js
import * as math from 'lib/math'
console.log(`PI + 5 = ${math.sum(math.PI, 5)}`)

//anotherApp.js
import { sum, PI } from 'lib/math'
console.log(`PI + 5 = ${sum(PI, 5)}`)
```

หรือเราจะ export ออกเป็น **default** ที่จะไม่มีการบังคับใช้ชื่อตัวแปรหรือฟังก์ชันนั้นในการเรียกแต่อย่างใด จะตั้งชื่ออะไรอยู่ที่คนเรียก

```javascript
// lib/mathplusplus.js
export * from 'lib/math' // Export อันเดิมออกไปอีกครั้ง
export const e = 2.71828182846
export default function(x) {
  return Math.log(x)
}

// app.js
import ln, { sum, PI, e } from 'lib/mathplusplus'
console.log(`PI + log of e = ${sum(ln(e), PI)}`)
```

## มีอีกเยอะ

อันนี้ยกมาเฉพาะอันเด่นๆ ครับ จริงๆ มีอีกเยอะแยะมากให้ไปสำรวจครับ ตามไปดูได้เลยที่สองลิ้งค์นี้ครับ (โค้ดตัวอย่างบางส่วนผมก็มาจากอันนี้แหละ)

- [es6features - Overview of ECMAScript 6 features](https://github.com/lukehoban/es6features)

- [ES6 Features](http://es6-features.org)

สำหรับการแนะนำ ES6 ของผมก็หมดลงแต่เพียงเท่านี้ครับ #มาเขียนES6กันเถอะ
