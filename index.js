// Using the following criteria, your first assignment is to create the logic for their checkout system that returns the total 
// cost of all refills including if the customer has a subscription and/or a coupon.

// If a customer has a subscription, the customer will receive a 25% discount after the refill total has been calculated.
// If the customer has a coupon, the customer will receive a $10 discount after the subscription discount has been calculated.
// At the end of the script, you should return and log the string "Your grand total is ${finalAmount}." 

const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

// add function to find total price for pricePerRefill + refills
// add function to see if they have a subscription
// add function to see if they have a coupon
// add function that computes the totalPrice + coupon/subscripton

function calculateTotalPrice(patient) {
    return patient.pricePerRefill * patient.refills;
  }
// patient object should pull information from each individual listed above 

  function applyDiscounts(patient) {
    let totalPrice = calculateTotalPrice(patient);
  
    if (patient.subscription === true) {
      totalPrice *= 0.75; // Apply a 25% discount for subscribers
    }
    if (patient.coupon === true) {
      totalPrice -= 10; // Apply a $10 coupon discount
    }
  
    return totalPrice;
  }
  
  const timmyFinalPrice = applyDiscounts(timmy);
  const sarahFinalPrice = applyDiscounts(sarah);
  const rockyFinalPrice = applyDiscounts(rocky);
  
  console.log("Timmy, Your grand total is $" + timmyFinalPrice);
  console.log("Sarah, Your grand total is $" + sarahFinalPrice);
  console.log("Rocky, Your grand total is $" + rockyFinalPrice);


