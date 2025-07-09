const heading_1=document.createElement('h1');
heading_1.innerText="Hello World";
heading_1.style.backgroundColor="black";
heading_1.style.color="white";
heading_1.style.fontSize="30px";
heading_1.style.margin="20px";
heading_1.style.marginTop="0";
heading_1.style.textAlign="center";
heading_1.style.padding="10px 0px 10px 0px";

const Root=document.getElementById('root');
Root.appendChild(heading_1)

const heading_2 = document.createElement('h1');
heading_2.innerText = "I am Devndra !  This is my first React Code ";
heading_2.style.backgroundColor = "black";
heading_2.style.color = "white";
heading_2.style.fontSize = "20px";
heading_2.style.margin = "20px";
heading_2.style.textAlign = "center";
heading_2.style.padding = "10px 0px 10px 0px";
Root.appendChild(heading_2);

// Without Repeting same code
 const React={
  createElement:function(tag,style,child)
  {
    const el=document.createElement(tag);
    if(typeof child ==='object')
    {
      for (let val of child)
        el.append(val);
    }
    {
       el.innerText = child;
    }
    // el.style.backgroundColor = style.bgColor;
    // el.style.color = style.color;
    // el.style.fontSize = style.fontSize;
    
    // we also travel on style object using for each loop...
    for(let key in style )
      el.style[key]=style[key];
    return el;

  }
 }

//  creating an element ...................
 const heading_3=React.createElement('h1',{backgroundColor:"black",color:"white",fontSize:"20px"},"This paragraph is created using React.");
 //  appling some different css properties on created element .....
 heading_3.style.margin = "20px";
 heading_3.style.textAlign = "center";
 heading_3.style.padding = "10px 0px 10px 0px";
 Root.appendChild(heading_3);
 
 //  Rendring................................| DOM 
 const heading_4=React.createElement('h1',{backgroundColor:"white",color:"black",fontSize:"20px"},"This para are rendered.");
 
 heading_4.style.margin = "20px";
 heading_4.style.textAlign = "center";
 heading_4.style.padding = "10px 0px 10px 0px";
 const ReactDOM={
   render:function(element,root){
     root.appendChild(element);
    }
  }
  
ReactDOM.render(heading_4,document.getElementById('root'));

// Unorderd list using React
const Li1=React.createElement('li',{},"apple")
const Li2=React.createElement('li',{},"apple")
const Li3=React.createElement('li',{},"apple")

const UnL = React.createElement('ul', { backgroundColor: "white", color: "black", fontSize: "20px" },[Li1,Li2,Li3])

UnL.style.margin = "20px";
UnL.style.textAlign = "center";
UnL.style.padding = "10px 0px 10px 0px";
ReactDOM.render(UnL,document.getElementById('root'));



