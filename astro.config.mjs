import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwind from "@astrojs/tailwind";

// This group of slug is old one from Medium / convert to shorter and english base
const LEGACY_SLUG_REDIRECT = [
  {
    old: 'ค่ายบ้าอะไร-แทบไม่ได้นอน-ywc14-b9471330ed54',
    new: 'ywc14'
  },
  {
    old: '2016-recap-ย้อนอดีต-ปีนี้ทำอะไรไปบ้าง-d7be4bb40ea7',
    new: '2016-review'
  },
  {
    old: 'ทำยังไงถึงจะเรียนรู้ได้เร็วๆ-ตามแบบฉบับมนุษย์ทำเว็บ-7013ed8e811e',
    new: 'how-to-learning-fast'
  },
  {
    old: 'ทำความรู้จักกับ-redux-แบบฉบับย่อยแล้วย่อยอีก-b464808aca12',
    new: 'super-digest-redux-101'
  },
  {
    old: 'นี่ปี-2017-แล้ว-มาเขียน-es6-กัน-9dede81e30da',
    new: 'es6-js'
  },
  {
    old: 'สวัสดีครับ-ผมมีชื่อว่า-react-3e8fd72ccdbb',
    new: 'react-101'
  },
  {
    old: 'เบนซ์นะจ๊ะในรั้ววิศวฯ-จุฬาฯ-episode-1-เป็นน้องปี-1-นี่มันดีจริงๆ-14c0faffe0e9',
    new: 'benz-in-chula-engineering-ep1'
  },
  {
    old: 'huawei-p10-เหมือนซื้อกล้องแถมมือถือ-หรือซื้อมือถือแถมกล้อง-572944c1a23',
    new: 'huawei-p10-review'
  },
  {
    old: 'เบนซ์นะจ๊ะในรั้ววิศวฯ-จุฬาฯ-episode-2-now-i-am-cp40-700026ff7db',
    new: 'benz-in-chula-engineering-ep2'
  },
  {
    old: 'ลองใช้-styled-components-สิ-แล้วคุณจะลืมการเขียน-css-แบบเดิมๆ-ไปเลย-e310f5c7cf33',
    new: 'styled-components-101'
  },
  {
    old: '4-ปีมันผ่านไปไวนะ-บันทึก-ณ-วันที่เรียนจบ-f97e2706ca8a',
    new: '4-year-in-chula-engineering'
  },
  {
    old: '391-commits-ywc-15-website-4dc7c745e9ca',
    new: 'behind-the-scene-ywc15-website'
  },
  { old: 'เบนซ์นะจ๊ะในปี2017-9c0fcdae331f', new: '2017-review' },
  {
    old: '6-หนังสือที่ได้อ่านเมื่อปี-2017-734e78ab3a88',
    new: '6-books-in-2017'
  },
  {
    old: 'เพื่อน-พี่น้อง-ครอบครัว-ไม่ได้นอน-ywc-15-66a377d5e043',
    new: 'ywc15-review-in-the-eye-of-staff'
  },
  {
    old: 'mvp-คำที่ไม่ว่าทำงานไหนๆ-ควรจำให้ขึ้นใจ-149415c76195',
    new: 'business-mvp-101'
  },
  {
    old: 'ได้อะไรมาบ้าง-หลังจากกลับมาอ่านหนังสือ-14a125fbe9e0',
    new: 'what-ive-got-from-reading'
  },
  {
    old: 'managing-oneself-พยายามจะบอกอะไรกับเรา-f650e0bb1477',
    new: 'managing-oneself-review'
  },
  {
    old: 'เบนซ์นะจ๊ะในปี2018',
    new: '2018-review'
  }
].reduce((prev, record) => {
  return {
    ...prev,
    [`/${record.old}`]: `/blog/${record.new}`,
  };
}, {});

const OLD_SLUG_REDIRECT = [
  // 'ค่ายบ้าอะไร-แทบไม่ได้นอน-ywc14-b9471330ed54',
  // '2016-recap-ย้อนอดีต-ปีนี้ทำอะไรไปบ้าง-d7be4bb40ea7',
  // 'ทำยังไงถึงจะเรียนรู้ได้เร็วๆ-ตามแบบฉบับมนุษย์ทำเว็บ-7013ed8e811e',
  // 'ทำความรู้จักกับ-redux-แบบฉบับย่อยแล้วย่อยอีก-b464808aca12',
  // 'นี่ปี-2017-แล้ว-มาเขียน-es6-กัน-9dede81e30da',
  // 'สวัสดีครับ-ผมมีชื่อว่า-react-3e8fd72ccdbb',
  // 'เบนซ์นะจ๊ะในรั้ววิศวฯ-จุฬาฯ-episode-1-เป็นน้องปี-1-นี่มันดีจริงๆ-14c0faffe0e9',
  // 'huawei-p10-เหมือนซื้อกล้องแถมมือถือ-หรือซื้อมือถือแถมกล้อง-572944c1a23',
  // 'เบนซ์นะจ๊ะในรั้ววิศวฯ-จุฬาฯ-episode-2-now-i-am-cp40-700026ff7db',
  // 'ลองใช้-styled-components-สิ-แล้วคุณจะลืมการเขียน-css-แบบเดิมๆ-ไปเลย-e310f5c7cf33',
  // '4-ปีมันผ่านไปไวนะ-บันทึก-ณ-วันที่เรียนจบ-f97e2706ca8a',
  // '391-commits-ywc-15-website-4dc7c745e9ca',
  // 'เบนซ์นะจ๊ะในปี2017-9c0fcdae331f',
  // '6-หนังสือที่ได้อ่านเมื่อปี-2017-734e78ab3a88',
  // 'เพื่อน-พี่น้อง-ครอบครัว-ไม่ได้นอน-ywc-15-66a377d5e043',
  // 'mvp-คำที่ไม่ว่าทำงานไหนๆ-ควรจำให้ขึ้นใจ-149415c76195',
  // 'ได้อะไรมาบ้าง-หลังจากกลับมาอ่านหนังสือ-14a125fbe9e0',
  // 'managing-oneself-พยายามจะบอกอะไรกับเรา-f650e0bb1477',
  'graduate-is-just-the-beginning',
  // 'เบนซ์นะจ๊ะในปี2018',
  'react-hooks-101',
  'things-i-dont-know',
  'web-performance-series-optimize-images',
  'benz-work-and-travel-at-brisbane-chapter-1',
  'benz-work-and-travel-at-brisbane-chapter-2',
  '2019-review',
  'web-performance-series-how-to-use-script-tag',
  '2020-and-2021-in-2022',
  '2022-review',
].reduce((prev, slug) => {
  return {
    ...prev,
    [`/${slug}`]: `/blog/${slug}`,
  };
}, {});

// https://astro.build/config
export default defineConfig({
  site: 'https://www.microbenz.in.th',
  integrations: [mdx(), sitemap(), tailwind()],
  redirects: {
    ...OLD_SLUG_REDIRECT,
    ...LEGACY_SLUG_REDIRECT,
  }
});
