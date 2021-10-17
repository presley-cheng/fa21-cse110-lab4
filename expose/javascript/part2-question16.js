for (let field in statistics) {
        if (field.startsWith('r') || statistics[field] % 2 != 0) {
               console.log(statistics[field]);
        }
}
