function selectionSort(arr){
            let n = arr.length;
            let min_index;
            for(i = 0; i<n-1; i++){
                        min_index = i;
                        for(let j = i+1; j<n; j++){
                                    if(arr[j] <arr[min_index]){
                                                min_index = j;
                                    }
                        }
                        //swap(arr[i],arr[min_index])
                        let temp = arr[i];
                        arr[i]=arr[min_index];
                        arr[min_index]=temp;
            }
            console.log(arr);
}
selectionSort ([2,8,4,3,6]);











