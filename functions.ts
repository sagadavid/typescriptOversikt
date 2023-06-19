function calculateDiscount(price: number, discount: number): number {
  return price * discount;
}
console.log(calculateDiscount(25, 0.7));
console.log(calculateDiscount(25, 0.2));

function displayName(firstName: string, lastName: string, prefix?: string) {
  return prefix
    ? `${prefix} ${firstName} ${lastName}`
    : `${lastName} ${firstName}`;
}
console.log(displayName("eborah", "svenson", "lady"));
console.log(displayName("eborah", "svenson"));
