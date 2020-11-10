index =0;
function buildTree(preOrder, inOrder, s, e){
if(index >= inOrder.length){
return null;
}
    let newNode = {data: preOrder[index]};
console.log('Node', newNode, index)    
if(s>e){
        return null;
    }
    if(s===e){
        return newNode;
    }
    let inOrderIndex = Search(inOrder, s, e, newNode.data);
    index++;
    newNode.left = buildTree(preOrder, inOrder, s, inOrderIndex-1);
	index++;
    newNode.right = buildTree(preOrder, inOrder, inOrderIndex+1, e);
    return newNode;
}

function Search(arr, s, e, char){
for(let i=s;i<e;i++){
	if(arr[i] === char)
		return i;  
}
return null
}
buildTree(['A','B','D','E','C','F'],['D','B','E','A','F','C'],0,6,0)