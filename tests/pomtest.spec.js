import {test,expect} from '@playwright/test'

import { LoginPage } from '../Pages/Login'
import { Home } from '../Pages/Home';

test('test login',async({page})=>{
        const login =  new LoginPage(page);

        await login.gotoLoginPage();

        await login.loginNow('pavanol','test@123')

        const home = new Home(page);
        await home.addProductToCart('Nexus 6')
        await home.gotoCart()


})