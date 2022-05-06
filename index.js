let selectedParent = undefined;
const tree = {}

function chooseParent(parent){

    if(!tree[parent]){

        tree[parent] = [];
        console.log(`${parent} was created as a new parent`);
    }
    selectedParent = parent;
    return `${parent} is selected`;
}

function addChild(child){

    if(!tree[selectedParent])
        return "Choose a parent first";

    tree[selectedParent].push(child);
}

export { chooseParent, addChild, tree }