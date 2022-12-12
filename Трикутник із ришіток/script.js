for (let i=0; i < 9; i++) {
    if (i > 4) {
        console.log("#".repeat(9 - i));
    } else {
        console.log("#".repeat(i + 1));
    }
}