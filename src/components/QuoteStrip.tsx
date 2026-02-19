import { useState } from "react";
import { useNavigate } from "react-router-dom";

const QuoteStrip = () => {
    const navigate = useNavigate();
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    const [shipmentType, setShipmentType] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        navigate("/contact?quote=true");
    };

    return (
        <section className="py-16 bg-neutral-50 border-y border-neutral-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-8 animate-fade-in">
                        <p className="text-xs font-semibold text-secondary uppercase tracking-widest mb-2">
                            Fast Estimate
                        </p>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                            Get a Quote
                        </h2>
                        <p className="text-slate-500 text-sm mt-2">
                            Three quick fields. We'll respond within 24 hours.
                        </p>
                    </div>

                    {/* Quote Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white border border-neutral-200 rounded-2xl p-6 md:p-8 shadow-card animate-fade-in"
                        style={{ animationDelay: "0.15s" }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* Origin */}
                            <div>
                                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                                    Origin
                                </label>
                                <div className="relative">
                                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        value={origin}
                                        onChange={(e) => setOrigin(e.target.value)}
                                        placeholder="City or Port..."
                                        className="w-full pl-9 pr-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all duration-200"
                                    />
                                </div>
                            </div>

                            {/* Destination */}
                            <div>
                                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                                    Destination
                                </label>
                                <div className="relative">
                                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        value={destination}
                                        onChange={(e) => setDestination(e.target.value)}
                                        placeholder="City or Port..."
                                        className="w-full pl-9 pr-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all duration-200"
                                    />
                                </div>
                            </div>

                            {/* Shipment Type */}
                            <div>
                                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                                    Shipment Type
                                </label>
                                <div className="relative">
                                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8" />
                                        </svg>
                                    </div>
                                    <select
                                        value={shipmentType}
                                        onChange={(e) => setShipmentType(e.target.value)}
                                        className="w-full pl-9 pr-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all duration-200 appearance-none cursor-pointer"
                                    >
                                        <option value="">Select type...</option>
                                        <option value="air">✈ Air Freight</option>
                                        <option value="sea">🚢 Sea Freight</option>
                                        <option value="land">🚛 Land Freight</option>
                                        <option value="multimodal">🔄 Multimodal</option>
                                        <option value="consultancy">💼 Consultancy</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Submit */}
                        <div className="mt-5 flex items-center justify-between gap-4 flex-wrap">
                            <p className="text-xs text-slate-400">
                                No commitment required · Free initial consultation
                            </p>
                            <button
                                type="submit"
                                className="btn-primary text-sm"
                            >
                                Request Quote
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default QuoteStrip;
