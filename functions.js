function calculateDiscount(price, discount) {
    return price * discount;
}
console.log(calculateDiscount(25, 0.7));
console.log(calculateDiscount(25, 0.2));
function displayName(firstName, lastName, prefix) {
    return prefix
        ? "".concat(prefix, " ").concat(firstName, " ").concat(lastName)
        : "".concat(lastName, " ").concat(firstName);
}
console.log(displayName("eborah", "svenson", "lady"));
console.log(displayName("eborah", "svenson"));
