function findAncestor(root, a, b){
	if(!root){
		return root;
	}
	if(a === root || b === root){
		return root;
	}
	let left = findAncestor(root.left, a, b);
	let right = findAncestor(root.right, a, b);
	if(left && right){
		return root;
	}
	return left? left: right;
}