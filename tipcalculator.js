const calculate = document.querySelector(".calculate");
const bill = document.querySelector(".bill");
const people = document.querySelector(".people");
const select = document.querySelector("#select");

const totalBillAmountText = document.querySelector("#billAmount");
const totalTipAmountText = document.querySelector("#tipAmount");
const totalShareAmountText = document.querySelector("#shareAmount"); 

const errorContainer = document.querySelector(".error-container");
const billBlank = document.querySelector(".bill-blank");
const serviceBlank = document.querySelector(".service-blank");

const modalContainer = document.querySelector(".modal-container");
const close = document.querySelector("#close");

close.addEventListener('click', () => {
    modalContainer.classList.toggle("modal-hidden");

});

calculate.addEventListener('click', () => {
    let billAmount = Number(bill.value);
    let peopleCounter = Number(people.value);
    let selectValue = Number(select.value);
    let totalTip;
    let peopleOweTip;
    console.log("bill:" + billAmount);
    console.log("service:" + selectValue);
    if(billAmount === 0 || selectValue === 0){
        errorContainer.style.display = "block";
        if(selectValue === 0){
            serviceBlank.classList.add("service-active");
        }
        if(billAmount === 0){
            billBlank.classList.add("bill-active");
        }
        if(billAmount !== 0){
            billBlank.classList.remove("bill-active");
        }
        if(selectValue !== 0){
            serviceBlank.classList.remove("service-active");
        }
    }


    else{
        errorContainer.style.display = "none";

        switch (selectValue) {
            case 1:
                totalTip = (0.05 * billAmount);
                break;
            case 2:
                totalTip = (0.08 * billAmount);
                break;
            case 3:
                totalTip = (0.13 * billAmount);
                break;
            default:
                if(billAmount === ""){
                    billBlank.style.display = "block";
                }
                if(selectValue === ""){
                    serviceBlank.style.display = "block";
                }
                break;
        }
        peopleOweTip = totalTip/peopleCounter;
        totalBillAmountText.textContent = `₱${billAmount.toFixed(2)}`;
        totalTipAmountText.textContent = `₱${totalTip.toFixed(2)}`;
        totalShareAmountText.textContent = `₱${peopleOweTip.toFixed(2)}`;
        modalContainer.classList.toggle("modal-hidden");
    }

    
});


