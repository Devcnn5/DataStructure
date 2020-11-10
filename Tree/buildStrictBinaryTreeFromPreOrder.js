tree = {data: 'I'};
i =1;
function buildroot(arr, root, hand){
	let newNode;
	if(!arr.length){
		return null;
	}
	if(arr[0] === 'L'){
		return {data: 'L'};
	}
	if(i > arr.length-1){
		return tree;
	}
	if(arr[i] ==='I'){
		i++;
		if(root.left && root.right){
			return;
		}
		newNode = {data:'I'}
		root[hand] = newNode;
		buildroot(arr, newNode, 'left')
	}
	if(arr[i]==='L'){
		i++;
		if(root.left && root.right){
			return;
		}
		newNode = {data:'L'};
		root[hand]  = newNode;
		buildroot(arr, root, 'right');
	}
	return tree;
}