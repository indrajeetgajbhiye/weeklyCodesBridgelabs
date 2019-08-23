module.exports = {
    monthlyPayment : function( principle, nMonths, iRate){
        var payment;
        this. principle = principle;
        this.nMonths = nMonths;
        this.iRate = iRate;
        payment = (principle * iRate)/(1- Math.pow(1+iRate,-nMonths));
        console.log(typeof(payment));
        console.log("The payment is : ", payment);
        return payment;
    }
}