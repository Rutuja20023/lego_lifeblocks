"use client";

import React, { useState } from "react";
import { useCart } from "@/lib/CartContext";
import { soundManager } from "@/lib/audio";
import confetti from "canvas-confetti";
import {
  X,
  CheckCircle2,
  Truck,
  CreditCard,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Package,
} from "lucide-react";

export const CheckoutModal: React.FC = () => {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    items,
    totalPrice,
    formatPrice,
    clearCart,
  } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    paymentMethod: "upi",
  });

  const [isCompleted, setIsCompleted] = useState(false);
  const [trackingId, setTrackingId] = useState("");

  if (!isCheckoutOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundManager.playSuccess();

    // Trigger celebratory confetti burst
    if (typeof window !== "undefined") {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#E3000B", "#FFD000", "#0055BF", "#00853D", "#7C3AED"],
      });
    }

    const generatedId = `LB-${Math.floor(100000 + Math.random() * 900000)}-IN`;
    setTrackingId(generatedId);
    setIsCompleted(true);
    clearCart();
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setIsCompleted(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Dark Backdrop */}
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Card */}
      <div className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border-2 border-neutral-200 shadow-2xl z-10 animate-snap">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-600 transition"
        >
          <X className="w-4 h-4" />
        </button>

        {!isCompleted ? (
          <div>
            {/* Header */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-lego-yellow flex items-center justify-center text-lg font-black text-neutral-950 shadow-block-sm">
                📦
              </div>
              <div>
                <h3 className="text-xl font-black text-neutral-950 font-display">
                  Complete Your Pre-Order
                </h3>
                <p className="text-xs text-neutral-500 font-mono">
                  Launch Batch #01 • Priority Dispatch
                </p>
              </div>
            </div>

            {/* Total Amount Tag */}
            <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-neutral-200 flex items-center justify-between mb-6">
              <span className="text-xs font-bold text-neutral-700 font-mono">
                Amount to Pay (Free Express Shipping):
              </span>
              <span className="text-lg font-black font-mono text-neutral-950">
                {formatPrice(totalPrice, totalPrice)}
              </span>
            </div>

            {/* Checkout Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-medium">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-neutral-700 font-bold mb-1 font-mono">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rutuja Pakhare"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-900 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-neutral-700 font-bold mb-1 font-mono">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="rutuja@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-900 bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-neutral-700 font-bold mb-1 font-mono">
                  Shipping Street Address *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Apartment, Studio, Street Address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-900 bg-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-neutral-700 font-bold mb-1 font-mono">
                    City *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Bengaluru / Mumbai"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-900 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-neutral-700 font-bold mb-1 font-mono">
                    Pincode / Postal *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="560001"
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-900 bg-white"
                  />
                </div>
              </div>

              {/* Payment Method Selector */}
              <div>
                <label className="block text-neutral-700 font-bold mb-2 font-mono">
                  Payment Method
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "upi", label: "⚡ Instant UPI" },
                    { id: "card", label: "💳 Card / NetBanking" },
                    { id: "cod", label: "📦 Cash On Delivery" },
                  ].map((method) => (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, paymentMethod: method.id })}
                      className={`p-2 rounded-xl text-center font-mono text-[11px] font-bold border transition ${
                        formData.paymentMethod === method.id
                          ? "bg-neutral-950 text-white border-neutral-950 shadow-sm"
                          : "bg-white text-neutral-700 border-neutral-200 hover:border-neutral-300"
                      }`}
                    >
                      {method.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 rounded-2xl font-black uppercase tracking-wider text-xs font-display btn-tactile btn-tactile-yellow flex items-center justify-center space-x-2 mt-4"
              >
                <span>Confirm Pre-Order ({formatPrice(totalPrice, totalPrice)})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4 animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
              ORDER CONFIRMED • BATCH #01
            </span>

            <h3 className="text-2xl font-black text-neutral-950 font-display mt-3">
              Welcome to the Tactile Movement!
            </h3>

            <p className="text-xs text-neutral-600 mt-2 max-w-sm mx-auto leading-relaxed">
              Thank you, <strong className="text-neutral-900">{formData.name || "Builder"}</strong>! Your LEGO LifeBlocks system is queued for precision packaging and priority courier dispatch.
            </p>

            <div className="my-6 p-4 rounded-2xl bg-[#FAF8F5] border border-neutral-200 text-left font-mono text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-neutral-500">Tracking Reference:</span>
                <strong className="text-neutral-950">{trackingId}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Estimated Delivery:</span>
                <span className="text-emerald-700 font-bold">2-3 Business Days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Dispatch Location:</span>
                <span>LEGO Life Logistics Hub</span>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="w-full py-3.5 rounded-2xl font-black uppercase tracking-wider text-xs font-display btn-tactile btn-tactile-dark"
            >
              Back to Workspace
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
