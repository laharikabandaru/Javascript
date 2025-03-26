var phno1 = { firstnumber:674587, secondnumber:5465};
var phno2 = {firstnumber: 43524, secondnumber:75673};

function invite(calling1, calling2){
    console.log( calling1 + " "+this.firstnumber + ""+ this.secondnumber+ ","+ calling2);
}
invite.call(phno2, "Hi", "I am calling");
invite.apply(phno1,["Hi","this is ok "]);