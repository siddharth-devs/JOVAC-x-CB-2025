console.log("STARTED A DAY");

serveWater(()=>{
    serveSoup(()=>{
        serveStarters(()=>{
            serveDrinks(()=>{
                serveDinner(()=>{
                    payBill();
                })
            })
        })
    })
})

console.log("END OF THE DAY");