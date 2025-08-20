// const x="shubhamgwala";
// const y= x.split();
// console.log(y)
// const z= x.reverse();
// console.log(z)

// const arr = [2, 3, 4, 5];
// const length = arr.length + 1;
// const limit = 3;
// console.log("this is array:", arr)

// for (let i = 2; i <= length; i++) {

//         for (let j = 1; j <= limit; j++) {
//             let k = i *j ;
//             console.log(`${i}*${j} =`, `${k}`)



//     }
// }
// <?php
// $arr = [2,3,4,5];
// $limit = 2;
// for ($i=1; $i <=count($arr) ; $i++) { 
// 	$arrKey = $i-1;
// 	$key = isset($arr[$arrKey])?$arr[$arrKey]:'';
// 	if ($key!==4 & $key!==5) {
// 		for ($j=1; $j <=$limit ; $j++) { 
// 			$v = isset($arr[$arrKey])?$arr[$arrKey]:'';
// 			if ($v) {
// 				echo $v*$j;
// 			}

// 		}
// 		echo "<br>";
// 	}


// }



// ?>

// const arr = [2, 3, 4, 5];
// const limit = 5;

// for (let i = 1; i <= arr.length; i++) {
//   const arrKey = i - 1;
//   const key = arr[arrKey] !== undefined ? arr[arrKey] : '';                
//   if (key !== 4 && key !== 5) {
//     for (let j = 1; j <= limit; j++) {
//       const v = arr[arrKey] !== undefined ? arr[arrKey] : '';
//       if (v) {
//         console.log(v*j);
//       }
//     }

//   }
// }



const str = "shubham";
let rev="";
for (let i = str.length-1 ; i >= 0; i--) {
              
  rev += str[i];
  console.log(rev)

}

function reverseWithReduce(str) {
  return [...str].reduce((chn, char) => char + chn, "");
}
console.log(reverseWithReduce("hello")); // Output: "olleh"
