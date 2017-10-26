This is a presentation for Bio on an ever-lasting mythbuster question: are microwave ovens carcinogenic?
I definetly could have created this using more refined frameworks, but for this project I decided to stick to my roots as its more fun. The reward is ten times better when you get it to work.
I use html, css, and javascript. I have one file in .json, but it was to force Herou to use harp as my server since the site is 'static'. Heroku only servs dynamic sites and this was a workaround for sites that don't use frameworks such as ruby on rails. 
The CSS definetly needs some refactoring, but as of now it's permissible. Plus, I'm the only one who is working on this, and will probably not touch it again after today, 10/25.
I've decided to use jQuery mid way so in the js file, you will see javaSquerypt.
Common selectors:
    $("*") - Wildcard: selects every element on the page.
    $(this) - Current: selects the current element being operated on within a function.
    $("p") - Tag: selects every instance of the <p> tag.
    $(".example") - Class: selects every element that has the example class applied to it.
    $("#example") - Id: selects a single instance of the unique example id.
    $("[type='text']") - Attribute: selects any element with text applied to the type attribute.
    $("p:first-of-type") - Pseudo Element: selects the first <p>.
Common Events:

    click()- Click: executes on a single mouse click.
    hover() - Hover: executes when the mouse is hovered over an element. mouseenter() and mouseleave() apply only to the mouse entering or leaving an element, respectively.
    submit() - Submit: executes when a form is submitted.
    scroll() - Scroll: executes when the screen is scrolled.
    keydown() - Keydown: executes when you press down on a key on the keyboard.
jQuery also has built in effects to the functionalities of animations and object manipulations are made available. 
I should use partials and #includes next time. Here is a quick tutorial for those who are curious(me). https://www.html5rocks.com/en/tutorials/webcomponents/imports/ .
