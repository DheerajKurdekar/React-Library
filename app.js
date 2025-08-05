    /**<div id="parent">
        <div id="child">
        <h1>Hello, React!</h1>
        <h2>I'm a child div</h2>
        </div>   
 </div> **/

 //Props are the attributes that are passed in the object bracket
 //id is the attribute name and "heading" is the value of that attribute
 //This will create a React element with the tag 'h1' and the text 'Hello, React!'and the id 'heading'..
  const parent =  React.createElement('div', {id:"parent"}, 
   [ React.createElement('div', {id:"child"}, 
    [ React.createElement('h1', {},'Im a child div'),
      React.createElement('h2', {}, 'I m another child div'),
    ]),
    React.createElement('div', {id:"child2"}, 
    [ React.createElement('h1', {},'Im a child div'),
      React.createElement('h2', {}, 'I m another child div'),
    ]),]
);


 console.log(parent);
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(parent);
