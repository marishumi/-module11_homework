
function counter (){let arr = [457, 67, null, undefined, 0.546]
    let zero = 0;let evenCount = 0;
    let oddCount = 0;for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number" || isNaN(arr[i])){       
             if (arr[i] === 0) {
                zero += 1;        } 
                else if (arr[i] % 2 === 0) {
                evenCount += 1;        } 
                else {
                oddCount += 1;        }
        } }
    }
    console.log(`В массиве:  ${zero} нулей, ${evencount} чётных, ${oddcount} нечётных!`);