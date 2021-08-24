const { test, expect, chromium } = require('@playwright/test');

function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
  }
  
  
const URL = "https://development-reward.ssup.co/slots?slot_id=6102c47f2298c446bb9468df&user_mongo_id=60f93537447be6510a56bcd2";
//const URL = "https://development-reward.ssup.co/slots?slot_id=6102c47f2298c446bb9468df&user_mongo_id=60f93537447be6510a56bcd2";
  

test('basic test', async () => {
  const browser = await chromium.launch()
  const context = await browser.newContext()
  const page = await browser.newPage({ userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36' })
  await page.goto(URL);
  await delay(3000);
  await page.goto(URL)
  await page.screenshot({
      path:`./assests/Out_original.png`
  })
  const spinNoBefore = page.locator('.cost-price');
  await expect(spinNoBefore).toHaveText('100');
  await browser.close()
});


//const URL ="https://development-reward.ssup.co/slots?slot_id=61026486a898a33c6ff7c983&user_mongo_id=60f93537447be6510a56bcd2"
//const URL ="https://development-reward.ssup.co/slots?slot_id=6102c46e2298c446bb9468de&user_mongo_id=60f93537447be6510a56bcd2"
//const URL ="https://development-reward.ssup.co/slots?slot_id=6102c4832298c446bb9468e0&user_mongo_id=60f93537447be6510a56bIcd2"
//const URL ="https://development-reward.ssup.co/slots?slot_id=6102c48e2298c446bb9468e1&user_mongo_id=60f93537447be6510a56bcd2"
//const URL = "https://development-reward.ssup.co/slots?slot_id=6102c46e2298c446bb9468de&user_mongo_id=60f93537447be6510a56bcd2"




// test('button click -> spin left', async() => {
//   const browser = await chromium.launch()
//   const page = await browser.newPage({ userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36' })
//   await page.goto(URL);
//   await delay(1000);
//   const spinNoBefore = await page.innerText('#slot #controls .control-interact');
//   var r = /\d+/;
//   const sB =(spinNoBefore.match(r))
//   const num = parseInt(sB);
//   if(num>0){
//     await page.click('#slot #controls #spin')
//     await delay(2000);
//     const spinNoAfter = await page.innerText('#slot #controls .control-interact');
//     const sA=(spinNoAfter.match(r))
//     console.log("SA",sA);
//     console.log("SB",sB);
//     const no = sB - sA;
//     console.log("no",no);
//     expect(no).toBe(1);
//   }
//   else{
//     await page.click('#slot #controls #spin')
//     await delay(2000);
//     const spinNoAfter = await page.innerText('#slot #controls .control-interact');
//     const sA=(spinNoAfter.match(r))
//     console.log("SA",sA);
//     console.log("SB",sB);
//     const no = sB - sA;
//     console.log("no",no);
//     expect(no).toBe(0);
//   }
//   await browser.close()
// })

// test('button click -> status', async() => {
//   const browser = await chromium.launch()
//   const page = await browser.newPage({ userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36' })
//   await page.goto(URL);
//   await delay(1000);
//   const spinNoBefore = await page.innerText('#slot #controls .control-interact');
//   var r = /\d+/;
//   const sB =(spinNoBefore.match(r))
//   const num = parseInt(sB);
//   if(num>0){
//     await page.click('#slot #controls #spin')
//     const status_1 = await page.innerText('#app .reward-wrapper #slot h2');
//     expect(status_1).toBe("Charging the slots");
//     await delay(1500);
//     const status_2 = await page.innerText('#app .reward-wrapper #slot h2');
//     expect(status_2).toBe("Spinning");
//     await delay(6000);
//   }
//   else{
//     await page.click('#slot #controls #spin')
//     const status_1 = await page.innerText('#app .reward-wrapper #slot h2');
//     expect(status_1).toBe("You are out of spins");
//   }
//   await browser.close()
// })

// test('button click -> point deduction', async() => {
//   const browser = await chromium.launch()
//   const page = await browser.newPage({ userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36' })
//   await page.goto(URL);
//   await delay(1000);
//   const spinNoBefore = await page.innerText('#slot #controls .control-interact');
//   var r = /\d+/;
//   const sB =(spinNoBefore.match(r))
//   const num = parseInt(sB);
//   if(num>0){
//     const pointBefore = await page.innerText('.reward-points .reward-store');
//     await page.click('#slot #controls #spin')
//     await delay(1500);
//     const pointAfter = await page.innerText('.reward-points .reward-store');
//     var no = (pointBefore-pointAfter).toString();
//     expect(no).toBe("100");
//   }
//   else{
//     const pointBefore = await page.innerText('.reward-points .reward-store');
//     await page.click('#slot #controls #spin')
//     await delay(1500);
//     const pointAfter = await page.innerText('.reward-points .reward-store');
//     var no = (pointBefore-pointAfter).toString();
//     expect(no).toBe("0");
//   }
  
// })


// test('button click -> status for reward Type = NO_Payout', async({page}) => {
//   var type = "&reward_type=NO_PAYOUT";
//   var URL1 = URL.concat(type);
//   await page.goto(URL1);
//   await delay(1000);
//   const spinNoBefore = await page.innerText('#slot #controls .control-interact');
//   var r = /\d+/;
//   const sB =(spinNoBefore.match(r))
//   const num = parseInt(sB);
//   if(num>0){
//     await page.click('#slot #controls #spin')
//     const status_1 = await page.innerText('#app .reward-wrapper #slot h2');
//     expect(status_1).toBe("Charging the slots");
//     await delay(1500);
//     const status_2 = await page.innerText('#app .reward-wrapper #slot h2');
//     expect(status_2).toBe("Spinning");
//     await delay(16000);
//     const status_3 = await page.innerText('#app .reward-wrapper #slot h2');
//     expect(status_3).toBe("Oops betterluck next time");
//   }
//   else{
//     await page.click('#slot #controls #spin')
//     const status_1 = await page.innerText('#app .reward-wrapper #slot h2');
//     expect(status_1).toBe("You are out of spins");
//   }

// })

// test('button click -> status for reward Type = MINI_REWARD', async({page}) => {
//   var type = "&reward_type=MINI_REWARD";
//   var URL1 = URL.concat(type);
//   await page.goto(URL1);
//   await delay(1000);
//   const spinNoBefore = await page.innerText('#slot #controls .control-interact');
//   var r = /\d+/;
//   const sB =(spinNoBefore.match(r))
//   const num = parseInt(sB);
//   if(num>0){
//     await page.click('#slot #controls #spin')
//     const status_1 = await page.innerText('#app .reward-wrapper #slot h2');
//     expect(status_1).toBe("Charging the slots");
//     await delay(1500);
//     const status_2 = await page.innerText('#app .reward-wrapper #slot h2');
//     expect(status_2).toBe("Spinning");
//     await delay(20000);
//     const status_3 = await page.innerText('#app .reward-wrapper #slot h2');
//     expect(status_3).toBe("You’ve Won!");
//     await page.fill('.email-holder input[placeholder="Your Email ID"] ', '99parishah@gmail.com');
//    // await delay(1000)
//     await page.click('.email-holder .clm-btn');
//     await delay(1000)
//   }
//   else{
//     await page.click('#slot #controls #spin')
//     const status_1 = await page.innerText('#app .reward-wrapper #slot h2');
//     expect(status_1).toBe("You are out of spins");
//   }
// })

// test('button click -> Email Flow', async({page}) => {
//   var type = "&reward_type=MINI_REWARD";
//   var URL1 = URL.concat(type);
//   await page.goto(URL1);
//   await delay(1000);
//   const spinNoBefore = await page.innerText('#slot #controls .control-interact');
//   var r = /\d+/;
//   const sB =(spinNoBefore.match(r))
//   const num = parseInt(sB);
//   if(num>0){
//     await page.click('#slot #controls #spin')
//     const status_1 = await page.innerText('#app .reward-wrapper #slot h2');
//     expect(status_1).toBe("Charging the slots");
//     await delay(1500);
//     const status_2 = await page.innerText('#app .reward-wrapper #slot h2');
//     expect(status_2).toBe("Spinning");
//     await delay(18000);
//     const status_3 = await page.innerText('#app .reward-wrapper #slot h2');
//     expect(status_3).toBe("You’ve Won!");
//     await page.fill('.email-holder input[placeholder="Your Email ID"] ', '99parishah@gmail.com');
//     //await delay(2000)
//     await page.click('.gift-card .email-holder .clm-btn');
//     //await delay(2000)
//     const status_4 = await page.innerText(".gift-card .tnx")
//     console.log(status_4)
//     expect(status_4).toBe("Thank you!");
//   }
//   else{
//     await page.click('#slot #controls #spin')
//     const status_1 = await page.innerText('#app .reward-wrapper #slot h2');
//     expect(status_1).toBe("You are out of spins");
//   }
// })


// test('button click -> back button', async({page})=>{
//   await page.goto(URL);
//   await delay(1000);
//   await page.click('.back-button')
//   //const status_2 = await page.innerText('#app .reward-wrapper #slot h2');
//   const currentUrl = window.location.href
//   expect(currentUrl).toBe(URL);

// })