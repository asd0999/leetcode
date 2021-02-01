function climbingLeaderboard(scores, alice) {
    let set_scores = [...new Set(scores)];
    let unique_scores = [];
    for (let score of set_scores) {
        unique_scores.push(score);
    }
    console.log(unique_scores);
    let ranks = [];
    alice.forEach((item) => {
        let curr_rank;
        unique_scores.push(item);
        unique_scores.sort((a, b) => b - a);
        console.log(unique_scores);
        curr_rank = unique_scores.findIndex((rank) => rank == item);
        ranks.push(curr_rank + 1);
        unique_scores.splice(curr_rank, 1);
        console.log(ranks);
    });
    return ranks;
}

console.log(
    climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120])
);