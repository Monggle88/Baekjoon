function solution(ingredient) {
    let count = 0;
    let hamburger = [];

    ingredient.forEach((material) => {
        hamburger.push(material);

        if (hamburger.length > 3) {
            let lastIndex = hamburger.length - 1;
            let isHamburger =
                [
                    hamburger[lastIndex - 3],
                    hamburger[lastIndex - 2],
                    hamburger[lastIndex - 1],
                    hamburger[lastIndex],
                ].join('') === '1231';

            if (isHamburger) {
                count++;
                hamburger.splice(lastIndex - 3, 4);
            }
        }
    });

    return count;
}