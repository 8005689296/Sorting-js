function InsertionSort(arr){
            for(let i =0; i<arr.length; i++){
                        for(j = i+1; j<arr.length-1; j++){
                                    if(arr[i]<arr[j]){
                                                console.log(arr[i]);
                                    }else {
                                                let temp = arr[i];
                                                arr[i] = arr[j];
                                                arr[j] = temp;
                                    }
                        }
                        console.log(arr);
            }
}
const y = InsertionSort([3,8,56,1,3,57]);
console.log(y);