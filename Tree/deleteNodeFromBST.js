function deleteBST(root, data){
if(!root){
console.log('Element not found');
}
if(data < root.data){
	root.left = deleteBST(root.left, data);
}
else if(data > root.data){
	root.right = deleteBST(root.right, data);
}
else{
	if(root.left && root.right){
		let temp = highest(root.left);
		root.data = temp.data;
		root.left = deleteBST(root.left, root.data);
	} else {
		temp  = root;
		if(root.right){
			root = root.right;
			root.right = null;		
} else if(root.left){
			root = root.left;
root.left = null;
} else{
root = null;
}
	}
}
return root;
}

function highest(root){
let temp;	
if(root === null){
		return null;
	} else{
		temp  = root;
		while(root.right){
			temp = highest(root.right)
		}
	}
	return temp;
}