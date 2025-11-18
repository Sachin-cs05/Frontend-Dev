class Cart {
  constructor() {
    this.items = [];
  }

  addItem(name, price, quantity) {
    this.items.push({
      name: name,
      price: price,
      quantity: quantity
    });
  }

  getTotal() {
    return this.items.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  }

  applyCoupon(couponCode) {
    const couponRegex = /^(SAVE|DISC)\d{2}$/;
    
    if (!couponRegex.test(couponCode)) {
      return {
        valid: false,
        message: "Invalid coupon format. Coupon must be in format SAVE20 or DISC10."
      };
    }
    
    const discountPercent = parseInt(couponCode.match(/\d{2}/)[0]);
    
    const total = this.getTotal();
    const discountAmount = total * (discountPercent / 100);
    const finalTotal = total - discountAmount;
    
    return {
      valid: true,
      originalTotal: total,
      discountPercent: discountPercent,
      discountAmount: discountAmount,
      finalTotal: finalTotal
    };
  }
}

const cart = new Cart();

cart.addItem("Laptop", 1000, 1);
cart.addItem("Mouse", 25, 2);
cart.addItem("Keyboard", 75, 1);

const total = cart.getTotal();
console.log(`Original Total: $${total.toFixed(2)}`);

const couponResult = cart.applyCoupon("SAVE20");

if (couponResult.valid) {
  console.log(`Coupon Applied: ${couponResult.discountPercent}% off`);
  console.log(`Discount Amount: $${couponResult.discountAmount.toFixed(2)}`);
  console.log(`Final Total: $${couponResult.finalTotal.toFixed(2)}`);
} else {
  console.log(couponResult.message);
}

const invalidCouponResult = cart.applyCoupon("INVALID");
console.log(invalidCouponResult.message);