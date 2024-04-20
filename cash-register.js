function checkCashRegister(price, cash, cid) {
    const oldCid = [...cid];
    let giveChange = cash - price;
    let change = {
        status: "",
        change: []
    };
    let totalCashInDrawer = 0;
    let coins = {
        ONE_HUNDRED: {count: Math.ceil(cid[8][1]/100), singleValue: 100, totalValue: cid[8][1]},
        TWENTY: {count: Math.ceil(cid[7][1]/20), singleValue: 20, totalValue: cid[7][1]},
        TEN: {count: Math.ceil(cid[6][1]/10), singleValue: 10, totalValue: cid[6][1]},
        FIVE: {count: Math.ceil(cid[5][1]/5), singleValue: 5, totalValue: cid[5][1]},
        ONE: {count: Math.ceil(cid[4][1]), singleValue: 1, totalValue: cid[4][1]},
        QUARTER: {count: Math.ceil((cid[3][1] * 100)/25), singleValue: 0.25, totalValue: cid[3][1]},
        DIME: {count: Math.ceil(cid[2][1] * 10), singleValue: 0.10, totalValue: cid[2][1]},
        NICKEL: {count: Math.ceil((cid[1][1] * 100)/5), singleValue: 0.05, totalValue: cid[1][1]},
        PENNY: {count: Math.ceil(cid[0][1] * 100), singleValue: 0.01, totalValue: cid[0][1]},
    }
    let index=0;
    let dif=[];
    let operation;

    cid.reverse();

    for (let foo in coins){
        totalCashInDrawer+= coins[foo].totalValue;
    }

    for (let bar in coins){
        if (giveChange > 0.01){
            while (coins[bar].count != 0 && coins[bar].singleValue <= giveChange){
                cid[index][1] -= coins[bar].singleValue;
                giveChange -= coins[bar].singleValue;
                coins[bar].count -= 1;
                totalCashInDrawer -= coins[bar].singleValue;
                if (giveChange < coins[bar].singleValue){
                    break;
                }
            }
        }else{
            giveChange = 0;
            break;
        }
        if (coins[bar][1] != cid[index][1]){
            operation = (Math.round(cid[index][1] * 100)/100) - (Math.round(coins[bar].totalValue * 100)/100);
            operation = Math.abs(operation);
            dif.push([cid[index][0], operation]);
        }
        if (cid[index]){
            index++;
        }
    }
  
    let zero = (value) => {
        if(value <= 0.01){
            value = Math.floor(value);
        }
        return value;
    }

    let newCid = [...cid];

    for (let i=0; i<newCid.length;i++){
        if (newCid[i][1] < 0.01){
            newCid[i][1] = 0;
        }
    }

    let newTotal = zero(totalCashInDrawer);
    let newChange = zero(giveChange);

    let newNewCid = [];
    for (let x=0; x<dif.length; x++){
        if(dif[x][1] !=0){
            dif[x][1] = Math.round(dif[x][1] * 100) / 100;
            if(dif[x][0] == "PENNY"){
                dif[x][1] += 0.01;
                oldCid.reverse()[x][1] = dif[x][1];
            }
            newNewCid.push(dif[x]);
        }
    }

    if (newTotal < (newChange) || newChange != 0){
        change.status = "INSUFFICIENT_FUNDS";
        change.change = [];
    }else if (newTotal > (newChange)){
        change.status = "OPEN";
        change.change = newNewCid;
    }else if (newTotal == (newChange)){
        change.status = "CLOSED";
        change.change = oldCid.reverse();
    }

    return change;
}
