function solution(a, b) {
    // 💬 Search the short and long string
    const short = a.length > b.length ? b : a;
    const long = a.length > b.length ? a : b;

    // 💬 Concatenate both string
    const answer = short + long + short;

    return answer;
}

const result = solution("45", "1"); // 🥚
console.log(result); // 🐣
