// create Element takes 3 parameters 1. tag 2. Attribute/Object/props 3. What we want inside the tag

// const heading = React.createElement("h1",{id : "heading"},"First Program");

const root = ReactDOM.createRoot(document.getElementById('root'));

// const parent = React.createElement("div",{id : 'parent'}, 
//                                     React.createElement("div",{id : "child"}, 
//                                     React.createElement("h1",{id :"h1tag"},"There is a structure")));
const list = React.createElement("div",{id:'products'},
                                React.createElement("ol",{id:'Technology'},
                                React.createElement("li",{},"React"),
                                React.createElement("li",{},"Java"),
                                React.createElement('li',{},"Spring")))
// root.render(parent);
// root.render(list)

// what about siblings ? pass them as an array to the third parameter

// const parent = React.createElement("div",{id : 'parent'}, 
//                                     React.createElement("div",{id : "child"}, 
//                                     [React.createElement("h1",{id :"h1tag"},"There is a structure"),
//                                     React.createElement("h2",{id :"h2tag"},"There is a some other structure")
//                                     ]));

// root.render(parent); // we get key error ?


const parent = React.createElement("div",{id : 'parent'}, 
                                    [React.createElement("div",{id : "child1"}, 
                                    [React.createElement("h1",{id :"h1tag"},"There is a structure"),
                                    React.createElement("h2",{id :"h2tag"},"There is a some other structure")
                                    ]),
                                
                                    React.createElement("div",{id : "child2"}, 
                                    [React.createElement("h1",{id :"h1tag"},"There is a structure"),
                                    React.createElement("h2",{id :"h2tag"},"There is a some other structure")
                                    ])]);


root.render(parent);

