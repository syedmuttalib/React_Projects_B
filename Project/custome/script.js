
// inject and where
function customRender ( reactElemnet,container)
{
    // const domElement=document.createElement(reactElemnet.type)
    // domElement.innerHTML=reactElemnet.children
    // domElement.setAttribute('href',reactElemnet.props.href)
    // domElement.setAttribute('target',reactElemnet.props.target)
    // container.appendChild(domElement)

    const domElement=document.createElement(reactElemnet.type);

    domElement.innerHTML=reactElemnet.children;
    for(const prop in reactElemnet.props)
    {
        if(prop === 'children') continue;
        domElement.setAttribute(prop,reactElemnet.props[prop])
    }
    container.appendChild(domElement)
}


const reactElemnet={
    type:'a',
    props:{
        href:"https://www.google.com",
        target:'_blanck'
    },
    children: 'Click me to visit google',
   
}
const maincontainer=document.getElementById('root')


// inject and where
customRender(reactElemnet,maincontainer)