function findsum(root, sum){
	if(!root){
		return sum===0;
	}
	sum = sum - root.data;
	if(sum === 0){
		return true;
	}
	if((!root.left && !root.right) || (root.left && root.right)){
		return findsum(root.left, sum) || findsum(root.right, sum);
	} else if(root.left){
		return findsum(root.left, sum);
	} else{
		return findsum(root.right, sum);
	}
	
}