let ReactDOM = {};

function render(component, root){
    let optimizedDOM = react(component);
    console.log("Rendering to Actual DOM");
    root.innerHTML = optimizedDOM;
}

ReactDOM.render = render;