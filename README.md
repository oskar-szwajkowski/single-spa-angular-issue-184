### This repo reproduces issue#184 from single-spa-angular

`cd app-child && npm run serve:app-child`

`cd app-parent && npm run serve:app-parent`

`cd single-spa-app && npm run serve`

Go into localhost:4200/parent-1

use `<a>` to navigate to parent-2

there is console log in console which indicates that PARENT's leave guard has been called

use browser's back button

there is console log in console which indicates that PARENT's leave guard has been called

use `<a>` to nagivate to page-child

use browser's back button

there is <b>NO</b> console log in console which indicates that PARENT's leave guard has been called

##
If you navigate to child with `<a>` tag, and then use `<a>` again to return to parent, leave guard works