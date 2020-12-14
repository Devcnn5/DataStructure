function findNeighbours(root, node, leftAncestor){
	let successor = null;
	let predecessor = null;
	let left = leftAncestor;
	if(!root){
		return { predecessor, successor };
	}
	if(root.data > node.data){
		root = root.left;
		return findNeighbours(root, node, left);
	} else if(root.data < node.data){
		left = root;
		root = root.right;
		return findNeighbours(root, node, left);
	} else{
			if(root.left){
		predecessor = findHighestInLeftSubtree(root.left);
	} else{
		predecessor = leftAncestor;
	}
	if(root.right){
		successor = findLowestInRightSubtree(root.right);
	}
	return {predecessor, successor};
	}
}

function findHighestInLeftSubtree(root){
	if(!root.right){
		return root;
	} else{
		return findHighestInLeftSubtree(root.right);
	}
}

function findLowestInRightSubtree(root){
	if(!root.left){
		return root;
	} else{
		return findLowestInRightSubtree(root.left);
	}
}


function Node(data){
	this.data = data;
	this.left = null;
	this.right = null;
}