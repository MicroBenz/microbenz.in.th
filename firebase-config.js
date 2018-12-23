const fs = require('fs')

const template = fs
  .readFileSync(`${__dirname}/firebase.template.json`, { encoding: 'utf-8' })
  .toString()

const jsonTemplate = JSON.parse(template)

const redirects = [
  // {
  //   source: '/391-commits-ywc-15-website-4dc7c745e9ca',
  //   destination: 'https://medium.com/p/4dc7c745e9ca',
  //   type: 302,
  // },
  // {
  //   source:
  //     '/ลองใช้-styled-components-สิ-แล้วคุณจะลืมการเขียน-css-แบบเดิมๆ-ไปเลย-e310f5c7cf33',
  //   destination: 'https://medium.com/p/e310f5c7cf33',
  //   type: 302,
  // },
  // {
  //   source: '/ทำความรู้จักกับ-redux-แบบฉบับย่อยแล้วย่อยอีก-b464808aca12',
  //   destination: 'https://medium.com/p/b464808aca12',
  //   type: 302,
  // },
  // {
  //   source: '/สวัสดีครับ-ผมมีชื่อว่า-react-3e8fd72ccdbb',
  //   destination: 'https://medium.com/p/3e8fd72ccdbb',
  //   type: 302,
  // },
  // {
  //   source: '/นี่ปี-2017-แล้ว-มาเขียน-es6-กัน-9dede81e30da',
  //   destination: 'https://medium.com/p/9dede81e30da',
  //   type: 302,
  // },
  // {
  //   source: '/2016-recap-ย้อนอดีต-ปีนี้ทำอะไรไปบ้าง-d7be4bb40ea7',
  //   destination: 'https://medium.com/p/d7be4bb40ea7',
  //   type: 302,
  // },
  // {
  //   source: '/เบนซ์นะจ๊ะในปี2017-9c0fcdae331f',
  //   destination: 'https://medium.com/p/9c0fcdae331f',
  //   type: 302,
  // },
]

jsonTemplate.hosting.redirects = redirects

fs.writeFileSync(
  `${__dirname}/firebase.json`,
  JSON.stringify(jsonTemplate, null, 2)
)
