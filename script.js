function stringChop(str, size) {
  // your code here
	if(str===null){
		return [];
	}
	let i=0,ans=[];
	while(i<=str.length-1){
		ans.push(str.slice(1,i+size));
		i=i+size;
	}
	return ans;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
