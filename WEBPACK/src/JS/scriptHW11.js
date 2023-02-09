async function getRandomChinese (length) {
    let result = "";
    for (let i = 0; i < length; i++){
        let date = Date.now().toString().slice(-5);
        let conversion = String.fromCharCode(date);// перетворює юнікод на символи
        result +=conversion; 
        await new Promise(resolve => setTimeout(() => resolve(result), 50));
        
    };
   console.log(result); 
};

getRandomChinese(4);

