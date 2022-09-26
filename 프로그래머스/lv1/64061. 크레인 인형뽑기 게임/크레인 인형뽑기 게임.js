function solution(board, moves) {

    let result = [101];
    let counter = 0;

    for (let i = 0; i < moves.length; i++) {

        let catch_doll = 0;

        for (let j = 0; j < board.length; j++) {

            let doll = board[j][moves[i] - 1];

            if (doll > 0 && catch_doll == 0) {

                result.push(doll);

                if (doll == result[(result.length)-2]) {
                    result.splice((result.length)-2, 2);
                    counter += 2;
                }

                board[j][moves[i] - 1] = 0;
                catch_doll = 1;

            }
        }
    }

    return counter;
}