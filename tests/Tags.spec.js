const {test,expect} =  require('@playwright/test')

test('test1@sanity',async ({page})=>{
    console.log('THis is my test 1...')
})

test('test2@sanity',async ({page})=>{
    console.log('THis is my test 2...')
})

test('test3@regression',async ({page})=>{
    console.log('THis is my test 3...')
})

test('test4@regression',async ({page})=>{
    console.log('THis is my test 4...')
})

test('test5@sanity@regression',async ({page})=>{
    console.log('THis is my test 5...')
})