{/* 

<div class="container"> 
    <h1>this is</h1>  
    <p class="paragraph">I am   -> "I am <1 Clicks> from" 
       <button>1 clicks</button>
       from 
    </p>
</div> 

*/}

/**
 * 1. type:
 *        -> string: html element: document.createElement
 *        -> function: custom component: call that function and if we have props then pass that also.
 * 
 * 2. props: 
 *        -> object
 *        -> values -> String : normal attribute example: class, id -> setAttribute
 *        -> children:
 *                   -> Array
 *                   -> can have values as string
 *                   -> can have values as function: custom element
 *                   -> can have object: normal element 
 */

const obj =
{
    type: 'div',
    props: {
        class: "container",
        children: [
            {
                type: 'h1', props: {
                    children: ' this is '
                }
            },
            {
                type: 'p', props: {
                    class: 'paragraph',
                    children: [
                        ' I am ',
                        {
                            type: (props) => ({
                                type: "button", props:
                                    { children: props.counter + "Clicks" }
                            }),
                            props: { counter: 1 }
                        }
                        ,
                        ' from'
                    ]
                }
            }
        ]
    }
}

function render(obj){

}



document.addEventListener("DOMContentLoaded", function () {
    const rootElement = document.querySelector("#root");
    const wholeApp = render(obj);
    console.log("wholeApp:", wholeApp);
    rootElement.appendChild(wholeApp);
});