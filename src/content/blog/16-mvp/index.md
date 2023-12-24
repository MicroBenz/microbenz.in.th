---
title: “MVP” คำที่ไม่ว่าทำงานไหนๆ ควรจำให้ขึ้นใจ
date: '2018-02-03T10:00:00.000Z'
slug: business-mvp-101
featuredImage: './cover.png'
tags: ['Product']
---

วันนี้เพิ่งมี YWC Programmer Meetup ไป ได้มีโอกาสไปเป็น speaker (จากการที่โหวตเลือกอะนะ) ไปพูดในหัวข้อเบื้องหลังการทำเว็บค่าย YWC#15

ซึ่งเนื้อหาที่พูดวันนี้ก็เจาะลึกไปเรื่อง technical พอสมควร แต่สิ่งนึงที่ได้พูดให้ทุกคนฟังว่างานนี้ได้เรียนรู้อะไรไปบ้าง มีคำนึงที่ผมยกมาเป็นสไลด์แรกในหัวข้อของ Lesson Learned เลย

คำนั้นคือคำว่า MVP

## MVP คือ Minimal Viable Product

(ไม่ใช่ Most Valuable Player ที่ใช้กันในเกม MOBA นะจ๊ะ)

สำหรับผมถ้าแปลเป็นไทยให้ คำนี้จะหมายถึงว่า **“product ที่เล็กที่สุดที่สามารถใช้งานได้”**

ผมขอยกตัวอย่างด้วยภาพละกัน

![เปรียบ MVP ดังการทำรถขึ้นมา 1 คัน](https://cdn-images-1.medium.com/max/1600/1*6v4DKb_ecQ8JXvtpp94dUw.png)

ถ้าลูกค้าบอกว่า อยากได้รถคันนึง ผมเชื่อเลยเถอะว่า ในมุมมองคนสาย engineer ก็คงคิดแบบผมในตอนแรกแหละ เอ้ย ก็ต้องทำล้อก่อน แล้วค่อยทำช่วงล่าง ค่อยทำเครื่องยนต์ ทำตัวถัง แล้วประกอบด้วยกัน

แต่ถามว่า ลูกค้าจะรู้สึกยังไง…แม่มกว่าจะได้รถมาคันนึง โคตรนาน

แถมดีไม่ดี รถที่ได้มาไม่ถูกใจอีก

แต่ถ้าสมมติเราเริ่มให้ “สเกตบอร์ด” ลูกค้าไปก่อน

เอาหน่า ลูกค้าอาจจะรู้สึกเซ็งเป็ด แต่ก็ยังพอมีอะไรใช้ไปไหนมาไหนได้ละนะ

แล้วเราค่อยๆ deliver ให้เขาเรื่อยๆ จากสเกตบอร์ด เป็นจักรยาน เป็นแมงกะไซด์ และสุดท้ายก็เป็นรถ

เราจะเห็นว่า ลูกค้าได้ใช้ “product ที่ใช้ได้” ตลอดเวลา แม้ตอนแรกฟังก์ชันไม่เยอะ และไม่สะดวก แต่ก็ใช้ได้แหละหน่า

ให้ลองมองภาพ scenario นี้คือการทำ software ครับ

## ทำไมถึงมาซาบซึ้งใน MVP กับการทำเว็บค่าย

เพราะจริงๆ เว็บค่ายหลายคนน่าจะชอบโฟกัสไปที่ landing page หรือก็คือหน้าแรกที่ฝั่ง design craft มันออกมาอย่างดี อย่างสวยงามเลย คือใช้เวลาทำกับไอ้นี่ไปเยอะมากๆ

แต่หารู้ไม่ว่า เราลืม purpose ของการทำเว็บค่ายไป

มันไม่ใช่การทำเว็บให้สวย

**แต่มันคือการทำเว็บให้น้องๆ เข้ามาสมัครค่าย และกรอกข้อมูลได้ครบ**

ดังนั้นผมจึง spent เวลาส่วนมากโฟกัสไปกับเรื่องระบบรับสมัครไปก่อน

ผมตั้งปณิธานไว้เลยว่า

> “ถ้าหน้า landing ไม่ทันจริงๆ ช่างแม่ง แต่ระบบรับสมัครต้องเสร็จก่อน”

และแน่นอนด้วยความที่กลัวว่าระบบรับสมัครจะมีปัญหา จึงต้องรีบเข็นให้พอเสร็จออกมาก่อน แล้วเอาขึ้นเ server test ให้เพื่อนๆ ลองใช้ดู เพื่อจะได้ปรับโฟลว์ หรือปรับนู้นนี่นั่นกันไป ให้มัน smooth ขึ้น และมั่นใจมากขึ้นว่าจะไม่มีปัญหาตอนขึ้น production

มามองๆ แล้วมันก็ไม่ต่างกับการทำ MVP เลยครับ เราต้องมองให้ออกว่าจริงๆ แล้ว product เราต้อง serve อะไรให้ลูกค้า เอาสิ่งนั้นให้เขาก่อน ที่เหลือค่อยตามมาหรือว่ากันอีกที

## MVP work กับงานที่ต้องการ feedback loop ไวๆ และคนน้อยๆ

อย่างงานเว็บค่าย มีผมกับน้องเฟิส [Kanisorn S.](https://medium.com/@FirsTziiz) สองคนทำ คนน้อยมาก ดังนั้นถ้าเรามัวแต่เสียเวลาทำส่วนที่ไม่ทำให้เกิด MVP อย่าง landing page ทั้งคู่ เว็บจะออกมาไม่ทันแน่ๆ (เพราะเอาตรงๆ ณ ตอนนั้นดีไซน์โหดมาก ถึงกับนึกไม่ออกเลยว่าจะโค้ดออกมาอีท่าไหน)

และแน่นอน ตามตัวอย่างรถยนต์ครับ มันคือการทำ product แบบ incremental ค่อยๆ โต ดังนั้นงานที่ต้องการ feedback จากลูกค้าไวๆ นั้น MVP ก็ถือว่าสำคัญมาก

อย่างที่ TakeMeTour เอง ก็มีการทำฟีเจอร์ใหม่ๆ อยู่เรื่อยๆ ก็จริง แต่หลายครั้งเรามักจะคิดว่า “เอาให้มันออกมาก่อน” เพราะบางทีบางฟีเจอร์ที่อยากทำใหม่มักจะมี case ประหลาดๆ ที่มันอาจเกิดขึ้นได้ ก็ช่างมันไปก่อน เพราะเราถือว่ามันเป็น case ส่วนน้อย และ rare case มากๆ ถ้าเจอก็ค่อยว่ากัน ซึ่ง most of the time ถือว่าเวิร์กมากๆ มันทำให้เราตัดสินใจดันฟีเจอร์นี้ต่อไปสุดทาง หรือเลิกทำต่อเพื่อลดค่าเสียเวลา

## ดังนั้น อยากให้ทุกคนจำคำนี้ไว้ขึ้นใจ

โดยเฉพาะชาว developer ทุกคนครับ ทุกวันนี้ dev ก็มีส่วนรวมการพัฒนา product โดยตรงมากขึ้น ไม่ใช่มดงานเขียนโค้ดเหมือนแต่ก่อนแล้ว

อยากให้ทุกคนคำนึงถึง MVP ไว้เยอะๆ นะครับ :)

Update: หลังจากเขียนอันนี้เสร็จ medium มันก็ suggest บล็อกนี้มาให้อ่าน ละเอียดมากๆ ลองไปอ่านได้ครับ [**Minimum Viable Product: Define the Best-fit Type, Method, and Follow Simple Building Stages**](https://medium.com/swlh/minimum-viable-product-define-the-best-fit-type-method-and-follow-simple-building-stages-3bd0b0d66607)