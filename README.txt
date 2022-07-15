The project consists of creating a library of books.

The library can be in 2 shapes/forms:
1)  Table
2)  Grid with info of each book inside the Grid

The library will contain the following info:
1)  Title
2)  Author
3)  Number of pages in the book
4)  Status of the book, meaning: Read / Not Read

Challenges:
1)  Making the button that takes new books trigger a pop-up, requires further learning of:
        -   Positioning
        -   Transform properties
        -   Overlay properties
        -   Global box sizing setting
2)  A good revision of JS selectors, looping collections and forms with data property
3)  Adding elements to the table with a remove button in the table that can trigger the deletion of parent row
4)  Checking for duplicates in the table so that the same book does not get added twice


Tricks learned:
1)  Use the &times; instead of "x" because x depends on font family and can inherit properties whereas &times;
    is static and will display the same thing.

2)  Overlay:
        -   Adding a single active class with one simple property
        -   Having the z index of the popup be higher than overlay combined with a background color to stand out
        -   Learned that the overlay requires using the pointer-events property and setting its value to none in CSS,
            this however is only relevant when applying an opacity of 0 to it, when using scale(0) this isn't necessary since scale
            set to 0 kinda removes the element from the flow?

3)  Buttons made darker when clicked with :active, note that :focus behaves differenty, you'll have to click away from the element.

4)  Learned about the closest property, should also help with the creation of a button that removes the closest parent row.