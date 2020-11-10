function perm(arr,n, sum, req){
	console.log('sum', sum, A);
if(n<1){
console.log('A', A);
if(sum===req){
console.log('C', A)
    count++;
    return false;
}
if(sum>req){
console.log('B',A)
return false;
}
}
if(sum===req){
console.log('C', A)
    count++;
    return false;
}
if(sum>req){
console.log('B',A)
return false;
}
for(let i=0;i<arr.length;i++){
A[n-1] = arr[i];
sum = sum+arr[i];
if(perm(arr,n-1,sum, req))
return true;
else{
sum=sum-arr[i];
if(arr[i+1])
A[n-1] = arr[i+1];
else
	A[n-1] = 0;
}
}
}