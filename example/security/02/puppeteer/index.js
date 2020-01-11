const puppeteer = require('puppeteer');

(async () => {
  const browser = await (puppeteer.launch({ 
    //设置超时时间
    timeout: 15000,
    //如果是访问https页面 此属性会忽略https错误
    ignoreHTTPSErrors: true,
    // 打开开发者工具, 当此值为true时, headless总为false
    devtools: true,
    // 关闭headless模式, 不会打开浏览器
    headless: true
  }));
  const page = await browser.newPage();
  await page.goto('https://coding.imooc.com/class/282.html');
  console.log('At Nodejs')

  // 浏览器内执行
  let ret = await page.evaluate(() => {
    console.log('At Chrome')
    // 浏览器内执行
    let name = document
        .querySelector('.course-infos-top .path span')
        .innerText
    let attr = Array
        .from(document.querySelectorAll('.fixed-wrap .info-bar .nodistance'))
        .map(v => v.innerText)
    return {
      name,
      person: attr[2]
    }
  });

  console.log(`抓取的数据: ${JSON.stringify(ret)}`)

  // browser.close();
})();