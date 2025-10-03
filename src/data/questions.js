export const sampleQuestions =[
    {
    id: 1,
    question: "What does the 'id' attribute in HTML do?",
    options: [
        "Gives a unique identifier to an element",
        "Creates a class for multiple elements",
        "Defines inline CSS",
        "Links to an external script"
    ],
    correctAnswer: 0,
    explanation: 
        "The 'id' attribute provides a unique identifier for an HTML element, which can be targeted by CSS or JavaScript."
},
{
    id: 2,
    question: "Which HTML tag is used to display an image?",
    options: [
        "<img>",
        "<picture>",
        "<image>",
        "<src>"
    ],
    correctAnswer: 0,
    explanation: 
        "The <img> tag is used to embed images in HTML documents."
},
{
    id: 3,
    question: "What does CSS stand for?",
    options: [
        "Creative Style Sheets",
        "Cascading Style Sheets",
        "Computer Style Syntax",
        "Cascading Simple Sheets"
    ],
    correctAnswer: 1,
    explanation: 
        "CSS stands for Cascading Style Sheets and is used to style HTML documents."
},
{
    id: 4,
    question: "Which CSS property is used to change text color?",
    options: [
        "font-color",
        "color",
        "text-style",
        "background-color"
    ],
    correctAnswer: 1,
    explanation: 
        "The 'color' property in CSS sets the color of the text."
},
{
    id: 5,
    question: "What is the default display property of a <div> element?",
    options: [
        "inline",
        "block",
        "flex",
        "grid"
    ],
    correctAnswer: 1,
    explanation: 
        "By default, <div> elements are block-level elements."
},
{
    id: 6,
    question: "In JavaScript, how do you define an object?",
    options: [
        "let obj = {};",
        "let obj = [];",
        "let obj = ();",
        "let obj = <>;"
    ],
    correctAnswer: 0,
    explanation: 
        "Objects in JavaScript are defined using curly braces {}."
},
{
    id: 7,
    question: "Which method is used to get all the keys of an object in JavaScript?",
    options: [
        "Object.values()",
        "Object.entries()",
        "Object.keys()",
        "Object.get()"
    ],
    correctAnswer: 2,
    explanation: 
        "Object.keys(obj) returns an array of all the property names (keys) of an object."
},
{
    id: 8,
    question: "What does the 'this' keyword refer to inside an object method in JavaScript?",
    options: [
        "The global object",
        "The current object",
        "The parent object",
        "The DOM element"
    ],
    correctAnswer: 1,
    explanation: 
        "Inside an object method, 'this' refers to the object itself."
},
{
    id: 9,
    question: "How do you access the value of 'name' in this object: let user = {name: 'John'}?",
    options: [
        "user[name]",
        "user->name",
        "user.name",
        "user(name)"
    ],
    correctAnswer: 2,
    explanation: 
        "You access object properties using dot notation: user.name."
},
{
    id: 10,
    question: "What does the 'class' attribute do in HTML?",
    options: [
        "Links to a JavaScript file",
        "Gives a unique identity to an element",
        "Groups elements for styling",
        "Defines an HTML template"
    ],
    correctAnswer: 2,
    explanation: 
        "The 'class' attribute allows you to group multiple elements together and style them with CSS."
},
{
    id: 11,
    question: "Which CSS property is used to set the background color of an element?",
    options: [
        "color",
        "background",
        "bgcolor",
        "background-color"
    ],
    correctAnswer: 3,
    explanation: 
        "'background-color' sets the background color of an element."
},
{
    id: 12,
    question: "Which HTML tag is used to create a hyperlink?",
    options: [
        "<a>",
        "<link>",
        "<href>",
        "<nav>"
    ],
    correctAnswer: 0,
    explanation: 
        "The <a> (anchor) tag is used to create hyperlinks in HTML."
},
{
    id: 13,
    question: "In JavaScript, what is the type of 'null'?",
    options: [
        "null",
        "undefined",
        "object",
        "string"
    ],
    correctAnswer: 2,
    explanation: 
        "Due to a historical bug, typeof null returns 'object'."
},
{
    id: 14,
    question: "What does the 'position: absolute' CSS property do?",
    options: [
        "Positions the element relative to the parent",
        "Positions the element relative to the nearest positioned ancestor",
        "Keeps the element fixed to the viewport",
        "Hides the element from view"
    ],
    correctAnswer: 1,
    explanation: 
        "Absolute positioning places the element relative to the nearest ancestor with a positioning other than static."
},
{
    id: 15,
    question: "Which JavaScript method converts a JSON string into an object?",
    options: [
        "JSON.stringify()",
        "JSON.parse()",
        "JSON.object()",
        "JSON.toObject()"
    ],
    correctAnswer: 1,
    explanation: 
        "JSON.parse() is used to convert JSON strings into JavaScript objects."
},
{
    id: 16,
    question: "What does the <ul> tag represent in HTML?",
    options: [
        "Unordered list",
        "User login",
        "Universal layout",
        "Unique link"
    ],
    correctAnswer: 0,
    explanation: 
        "The <ul> tag defines an unordered list in HTML."
},
{
    id: 17,
    question: "Which symbol is used for single-line comments in JavaScript?",
    options: [
        "//",
        "/* */",
        "<!-- -->",
        "#"
    ],
    correctAnswer: 0,
    explanation: 
        "In JavaScript, // is used for single-line comments."
},
{
    id: 18,
    question: "Which CSS property is used to change the font of text?",
    options: [
        "font-family",
        "font-size",
        "text-font",
        "font-style"
    ],
    correctAnswer: 0,
    explanation: 
        "The 'font-family' property sets the font of text in CSS."
},
{
    id: 19,
    question: "In JavaScript, how do you check if an object has a specific property?",
    options: [
        "obj.includes(key)",
        "obj.hasOwnProperty(key)",
        "obj.contains(key)",
        "obj.exists(key)"
    ],
    correctAnswer: 1,
    explanation: 
        "The hasOwnProperty() method checks if an object contains a specific property."
},
{
    id: 20,
    question: "What does the <script> tag in HTML do?",
    options: [
        "Defines CSS styles",
        "Embeds JavaScript code",
        "Creates a hyperlink",
        "Inserts metadata"
    ],
    correctAnswer: 1,
    explanation: 
        "The <script> tag is used to embed or reference JavaScript code inside HTML."
}

]