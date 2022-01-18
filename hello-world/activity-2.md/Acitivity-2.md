Markdown
 What do you think each section does here? What commands can you run?
    "
    devDependencies: the building blocks/background structures required for run (commands? :
    scripts: npm commands that are compatible (npm start, npm analyze)
    dependencies: version thats being worked with
 Reading this code, what does it do and how does it work? What HTML is making your script load to show a demo? How is this file rendering HTML via JavaScript?
    What it does/how it works: this code is responsible for displaying the text/any background elements.  Its importing from "lit" in order to accomplish this.
    The HTML that is making the script load to show the demo is the code wrapped in the script tags located in "index.html".  The file is rendering HTML via JavaScript by
    using the "render" keywords.
Why do you think they put these in two separate files? What do you think each code block is doing in the class'ed object?
    These are in two separate files because one is acting as a parent class and the other is acting as a subclass.  I think the first block is responsible for displaying
    the elements, the second block is getting the required types, the third block is  calling super(), which is going to be the parent class (basically, it allows access to the parent class)
    after that the "this.title" and "this.counter" are just setting default values, the fourth block is  incrementing the counter that was already defined by 1,
    and the fifth block is responsible for rendering the code in html format, the "<h2> tags are the html tags, they're displaying the counter/the title" and
    the "<button> tags display a button/act as event listeners. When they are clicked the counter is incremented.
  Try to explain what Lit is providing to the repo.
  What's so special about what Lit is providing that I'd be so bold to say it changes how the web is developed, forever?
    Lit can be used in most contexts/is a large library for web components.