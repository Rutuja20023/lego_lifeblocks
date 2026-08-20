"use client";

import React, { useState } from "react";
import { useCart } from "@/lib/CartContext";
import { soundManager } from "@/lib/audio";
import {
  X,
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Tag,
} from "lucide-react";

export const CartDrawer: React.FC = () => {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    setIsCheckoutOpen,
    removeItem,
    updateQuantity,
    totalPrice,
    totalOriginalPrice,
    discountAmount,
    appliedCoupon,
    applyCoupon,
    formatPrice,
    currency,
  } = useCart();

  const [promoInput, setPromoInput] = useState("");
  const [promoMessage, setPromoMessage] = useState<{
    success: boolean;
    text: string;
  } | null>(null);

  if (!isCartOpen) return null;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput) return;
    const res = applyCoupon(promoInput);
    setPromoMessage({ success: res.success, text: res.message });
  };

  const handleProceedToCheckout = () => {
    soundManager.playSuccess();
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Dark Backdrop */}
      <div
        onClick={() => {
          setIsCartOpen(false);
          soundManager.playClick();
        }}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-neutral-200">
          
          {/* Top Header */}
          <div className="p-6 border-b border-neutral-200 flex items-center justify-between bg-[#FAF8F5]">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-lego-red text-white flex items-center justify-center font-black text-xs font-display">
                LEGO
              </div>
              <div>
                <h3 className="text-base font-black text-neutral-950 font-display">
                  Your Desk Hardware
                </h3>
                <span className="text-xs text-neutral-500 font-mono">
                  {items.length} {items.length === 1 ? "System" : "Systems"} Selected
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                setIsCartOpen(false);
                soundManager.playClick();
              }}
              className="w-8 h-8 rounded-xl border border-neutral-300 hover:bg-neutral-100 flex items-center justify-center text-neutral-600 transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 text-neutral-500">
                <div className="w-16 h-16 rounded-2xl bg-neutral-100 flex items-center justify-center text-neutral-400 mx-auto mb-4">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="text-base font-bold text-neutral-900 font-display">
                  Your Baseplate is Empty
                </h4>
                <p className="text-xs text-neutral-500 mt-1 max-w-xs mx-auto">
                  Pick a Starter Kit or customize your stack in the Interactive Simulator.
                </p>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.kit.id}
                  className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 shadow-sm flex flex-col justify-between space-y-3"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-sm font-black text-neutral-900 font-display">
                        {item.kit.name}
                      </h4>
                      <div className="text-[11px] font-mono text-neutral-500 mt-0.5">
                        {item.kit.baseplateType}
                      </div>
                    </div>

                    <button
                      onClick={() => removeItem(item.kit.id)}
                      className="text-neutral-400 hover:text-red-600 p-1 transition"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {item.customBlocks && item.customBlocks.length > 0 && (
                    <div className="p-2 rounded-lg bg-white border border-neutral-200 text-[10px] font-mono text-neutral-600">
                      <span className="font-bold text-neutral-900">Custom Stack: </span>
                      {item.customBlocks.join(" • ")}
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-2 border-t border-neutral-200/80">
                    <div className="flex items-center space-x-2 bg-white border border-neutral-300 rounded-xl p-0.5">
                      <button
                        onClick={() => updateQuantity(item.kit.id, -1)}
                        className="w-6 h-6 rounded-lg hover:bg-neutral-100 flex items-center justify-center text-neutral-700"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold font-mono px-2 text-neutral-900">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.kit.id, 1)}
                        className="w-6 h-6 rounded-lg hover:bg-neutral-100 flex items-center justify-center text-neutral-700"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="text-sm font-black font-mono text-neutral-950">
                      {formatPrice(
                        item.kit.priceINR * item.quantity,
                        item.kit.priceUSD * item.quantity
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Bottom Summary & Checkout */}
          {items.length > 0 && (
            <div className="p-6 border-t border-neutral-200 bg-[#FAF8F5] space-y-4">
              
              {/* Promo Code Form */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    placeholder="Promo code (e.g. FIRSTBUILD15)"
                    className="w-full pl-9 pr-3 py-2 text-xs font-mono rounded-xl bg-white border border-neutral-300 uppercase focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                </div>
                <button
                  type="submit"
                  className="px-3 py-2 bg-neutral-900 text-white rounded-xl text-xs font-bold font-mono hover:bg-black transition"
                >
                  Apply
                </button>
              </form>

              {promoMessage && (
                <div
                  className={`text-[11px] font-mono font-bold ${
                    promoMessage.success ? "text-emerald-700" : "text-red-600"
                  }`}
                >
                  {promoMessage.text}
                </div>
              )}

              {/* Price Calculation Lines */}
              <div className="space-y-1.5 text-xs font-mono text-neutral-600 pt-2 border-t border-neutral-200">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>{formatPrice(totalOriginalPrice, totalOriginalPrice)}</span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-bold">
                    <span>Launch Discount ({appliedCoupon})</span>
                    <span>−{formatPrice(discountAmount, discountAmount)}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Tracked Express Shipping</span>
                  <span className="text-emerald-700 font-bold uppercase">FREE</span>
                </div>

                <div className="flex justify-between text-base font-black text-neutral-950 pt-2 border-t border-neutral-300 font-display">
                  <span>Grand Total</span>
                  <span className="font-mono">{formatPrice(totalPrice, totalPrice)}</span>
                </div>
              </div>

              {/* Checkout Trigger Button */}
              <button
                onClick={handleProceedToCheckout}
                className="w-full py-4 rounded-2xl font-black uppercase tracking-wider text-xs font-display btn-tactile btn-tactile-yellow flex items-center justify-center space-x-2"
              >
                <span>Proceed to Dispatch</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center text-[10px] font-mono text-neutral-500 flex items-center justify-center space-x-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>30-Day Money Back Guarantee • Encrypted Checkout</span>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
