const arr = ['apple', 'orange','', 'mango', '', 'lemon'];
console.log(arr.map(fr=>fr === ''?'empty string':fr));