/**
 * Created by josh on 4/12/17.
 */

//makes two list and then compares them and returns which one it the longest
/*     ========= Key =========
 1 = String
 2 = Array
 */
var characters = ["a","b","c","d","e","f","g","h",'i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',1,2,3,4,5,6,7,8,9,0];

function longest(item1, item2,compare){
	//print out of what its comparing
	console.log("\n"+compare +"\n\nItem 1: "+item1 +"\nItem 2: "+item2+"\n");
	console.log("\nItem 1 length: "+ item1.length+"\nItem 2 legnth: " + item2.length);
	console.log();
	//getting and comparing lengths
	if(item1.length > item2.length){
		console.log("Item 1 is largest.");
	}else if(item1.length < item2.length){
		console.log("Item 2 is largest.");
	}else if(item1.length == item2.length){
		console.log("Both Items are the same legnth.");
	}else{
		console.log("Could  not compare the two items");
	}

}
//Builds a String or array and return
function build(type,indx){
	var item = "";
	if(type==2){
		item = [];
	}
	for(var i = 0; i < indx;i++){
		if(type === 1){
			item += characters[Math.floor(Math.random()*characters.length)];
		}else if(type === 2){
			item.push(characters[Math.floor(Math.random()*characters.length)]);
		}else{
			console.log("Could not find the type...");
		}
	}
	return item;
}
function randomNumber(){
	return Math.floor(Math.random()*26+2);
}

longest(build(1,12),build(1,12),"Comparing 2 Strings....");

longest(build(1,randomNumber()),build(1,randomNumber()),"Comparing 2 Strings....");
console.log("\n=============================\n");
longest(build(2,randomNumber()),build(2,randomNumber()),"Comparing 2 Arrays....");
console.log("\n=============================\n");
longest(build(1,randomNumber()),build(2,randomNumber()),"Comparing 1 String and 1 Arrays....");
console.log("\n=============================\n");



