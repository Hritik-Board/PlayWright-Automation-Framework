const {test,expect} =  require('@playwright/test')

// test.only('test1',async ({page})=>{
//     console.log('THis is my test 1...')
// })

// test.skip('test2',async ({page})=>{
//     console.log('THis is my test 2...')
// })

// test('test3',async ({page, browserName})=>{
//     test.skip(browserName === 'chromium', 'Skipping inside test');
//     console.log('THis is my test 3...')

    
// })

// test('test4',async ({page})=>{
//     test.fixme()
//     console.log('THis is my test 4...')
// })

// test('test5',async ({page})=>{
//     test.fail()
//     console.log('THis is my test 5...')
//     expect(1).toBe(2)
// })

// test('test6',async ({page,browserName})=>{

//     if(browserName==="firefox"){
//         test.fail()

//     }
//     console.log('THis is my test 6...')
//     // expect(1).toBe(2)
// })

test.only('test7',async ({page})=>{
    test.slow()
    console.log('THis is my test 7...')
    await page.goto('https://www.demoblaze.com/')
})