function solution(n, arr1, arr2) {

    let maps = [arr1, arr2];

    for (let i = 0; i < maps.length; i++) {

        for (let j = 0; j < maps[i].length; j++) {

            maps[i][j] = maps[i][j].toString(2)
            let fill_0 = "0".repeat(n - maps[i][j].length);
            maps[i][j] = fill_0 + maps[i][j];
            let line = "";

            for (let k = 0; k < maps[i][j].length; k++) {

                if (maps[i][j][k] === "0") {
                    line += " ";
                } else {
                    line += "#";
                }
            }

            maps[i][j] = line;

        }

    }

    let result = [];

    for (let i = 0; i < n; i++) {

        let result_line = "";

        let map1_line = maps[0][i];
        let map2_line = maps[1][i];

        for (let j = 0; j < n; j++) {

            if (map1_line[j] === " " && map2_line[j] === " ") {
                result_line += " "
            } else {
                result_line += "#"
            }

        }

        result.push(result_line);

    }

    return result;
}