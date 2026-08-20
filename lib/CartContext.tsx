"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { PRICING_KITS } from "./data";
import { PricingKit } from "./types";
import { soundManager } from "./audio";

export interface CartItemEntry {
  kit: PricingKit;
  quantity: number;
  customBlocks?: string[];
}

interface CartContextType {
  items: CartItemEntry[];
  currency: "INR" | "USD";
  setCurrency: (c: "INR" | "USD") => void;
  soundEnabled: boolean;
  setSoundEnabled: (enabled: boolean) => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  addItem: (kitId: string, customBlocks?: string[]) => void;
  removeItem: (kitId: string) => void;
  updateQuantity: (kitId: string, delta: number) => void;
  clearCart: () => void;
  totalPrice: number;
  totalOriginalPrice: number;
  itemCount: number;
  appliedCoupon: string | null;
  discountAmount: number;
  applyCoupon: (code: string) => { success: boolean; message: string };
  formatPrice: (inr: number, usd: number) => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItemEntry[]>([]);
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);

  useEffect(() => {
    soundManager.enabled = soundEnabled;
  }, [soundEnabled]);

  const addItem = (kitId: string, customBlocks?: string[]) => {
    const targetKit = PRICING_KITS.find((k) => k.id === kitId) || PRICING_KITS[0];
    soundManager.playSnap();

    setItems((prev) => {
      const existing = prev.find((item) => item.kit.id === kitId);
      if (existing) {
        return prev.map((item) =>
          item.kit.id === kitId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { kit: targetKit, quantity: 1, customBlocks }];
    });

    setIsCartOpen(true);
  };

  const removeItem = (kitId: string) => {
    soundManager.playClick();
    setItems((prev) => prev.filter((item) => item.kit.id !== kitId));
  };

  const updateQuantity = (kitId: string, delta: number) => {
    soundManager.playClick();
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.kit.id === kitId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItemEntry[]
    );
  };

  const clearCart = () => {
    setItems([]);
    setAppliedCoupon(null);
  };

  const applyCoupon = (code: string) => {
    soundManager.playClick();
    const clean = code.trim().toUpperCase();
    if (clean === "FIRSTBUILD15" || clean === "LEGO15" || clean === "FOCUS15") {
      setAppliedCoupon(clean);
      soundManager.playSuccess();
      return { success: true, message: "🎉 15% Launch Discount Applied!" };
    }
    if (clean === "FOUNDER25") {
      setAppliedCoupon(clean);
      soundManager.playSuccess();
      return { success: true, message: "🚀 25% Founder Priority Discount Applied!" };
    }
    return { success: false, message: "Invalid promo code. Try FIRSTBUILD15" };
  };

  // Calculations
  const rawTotalINR = items.reduce((acc, item) => acc + item.kit.priceINR * item.quantity, 0);
  const rawTotalUSD = items.reduce((acc, item) => acc + item.kit.priceUSD * item.quantity, 0);
  const rawOriginalTotalINR = items.reduce(
    (acc, item) => acc + item.kit.originalPriceINR * item.quantity,
    0
  );
  const rawOriginalTotalUSD = items.reduce(
    (acc, item) => acc + item.kit.originalPriceUSD * item.quantity,
    0
  );

  const discountMultiplier = appliedCoupon === "FOUNDER25" ? 0.25 : appliedCoupon ? 0.15 : 0;

  const discountAmount =
    currency === "INR"
      ? Math.round(rawTotalINR * discountMultiplier)
      : Math.round(rawTotalUSD * discountMultiplier);

  const totalPrice =
    currency === "INR"
      ? Math.max(0, rawTotalINR - discountAmount)
      : Math.max(0, rawTotalUSD - discountAmount);

  const totalOriginalPrice = currency === "INR" ? rawOriginalTotalINR : rawOriginalTotalUSD;
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  const formatPrice = (inr: number, usd: number) => {
    if (currency === "INR") {
      return `₹${inr.toLocaleString("en-IN")}`;
    }
    return `$${usd.toLocaleString("en-US")}`;
  };

  return (
    <CartContext.Provider
      value={{
        items,
        currency,
        setCurrency,
        soundEnabled,
        setSoundEnabled,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalPrice,
        totalOriginalPrice,
        itemCount,
        appliedCoupon,
        discountAmount,
        applyCoupon,
        formatPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
