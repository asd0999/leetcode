function staircase(n) {
        const hash = '#'
    for (let i=0; i<n; i++){
        let w = 1;
        let x = 0;
        let p = ''
        while (w<(n-i)){
           p += " "
           w++; 
        }
        while (x<=i){
           p += hash
           x++; 
        }
        console.log(p)   
    }
}

staircase(6);
