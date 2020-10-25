function finalGrade(exam, projects) {
    // 💬 Check for 100
    if (exam > 90 || projects > 10) return 100;

    // 💬 Check for 90
    if (exam > 75 && projects >= 5) return 90;

    // 💬 Check for 75
    if (exam > 50 && projects >= 2) return 75;

    // 💬 Otherwise return 0
    return 0;
}

const result = finalGrade(75, 5); // 🥚
console.log(result); // 🐣 75
