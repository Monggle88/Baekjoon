function solution(sizes) {
    
    let maxW = 0;
    let maxH = 0;

    for (let i = 0; i < sizes.length; i++) {

        let W = Math.max(sizes[i][0], sizes[i][1]);
        let H = Math.min(sizes[i][0], sizes[i][1]);
        
        if (maxW < W) maxW = W;
        if (maxH < H) maxH = H;
        
    }

    return maxW * maxH;
}