import { describe, it, expect, beforeEach } from "vitest";
import {
  addProduct,
  addToCart,
  applyShippingDiscount,
  calculateTotal,
  clearCart,
} from "../src/ecommerce";

describe("E-commerce System", () => {
  beforeEach(() => {
    addProduct("Soap", 100, 10);
    addProduct("Shampoo", 200, 5);
    clearCart();
  });

  it("should calculate price of all products", () => {
    addToCart("Soap", 2); //arrange
    addToCart("Shampoo", 2);
    const sum = calculateTotal(); // act
    expect(sum).toBe(600); // assert
  });
  it("should add items to cart", () => {
    // arrange
    let cart = {};
    //act
    cart = addToCart("Soap", 2);
    //assert
    expect(cart["Soap"]).toBe(2);
  })
  it("should apply a shipping discount if the total cost is above $500", () => {
    addToCart("Soap", 2);
    addToCart("Shampoo", 3);
    const total = calculateTotal();
    expect(applyShippingDiscount(total)).toBe(790);  
  })
  it("should not apply a shipping discount if total cost is less than $500", () => {
    addToCart("Soap", 1);
    addToCart("Shampoo", 1);
    const total = calculateTotal();
    expect(applyShippingDiscount(total)).toBe(300);
  })
});
