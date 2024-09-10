const stars = () => {
    let rows = 5;
    for (let row = 1; row <= rows; row++) {
        let star = '';
        for (let i = 0; i < row; i++) {
            star += '*';
        }
        console.log(pattern);
    }
}

stars();