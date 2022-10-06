function SelectionSort(arr){
            let n = arr.length;
           for(let i = 0; i<n-1; i++){
            for(let j=i+1; j<n; j++){
                        if(arr[i] < arr[j]){
                                    return i;

                        }else {
                                    let temp = arr[i];
                                    arr[i] = arr[j];
                                    arr[j] = temp;
                        }
            }
            console.log(arr);
           } 
}
SelectionSort([6,3,2,4,9]);