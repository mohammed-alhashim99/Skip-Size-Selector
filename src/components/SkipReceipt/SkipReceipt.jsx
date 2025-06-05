
import React from 'react';
import './style.css';
import { X } from 'lucide-react';

export default function SkipReceipt({ selectedSkip, onCancel, onBack, onContinue }) {
    if (!selectedSkip) return null;

    const total = (selectedSkip.price_before_vat * (1 + selectedSkip.vat / 100)).toFixed(2);

    return (
        <div className="receipt-paper">
            <button className="receipt-close" onClick={onCancel}>
                <X size={18} />
            </button>

            <div className="receipt-header">
                <h2 className="receipt-company">WeWantWaste</h2>
                <p className="receipt-sub">Order Summary</p>
                <div className="receipt-line" />
            </div>

            <div className="receipt-body">
                <div className="receipt-row">
                    <span>Item</span>
                    <span>{selectedSkip.size} Yard Skip</span>
                </div>
                <div className="receipt-row">
                    <span>Hire Duration</span>
                    <span>{selectedSkip.hire_period_days || 14} days</span>
                </div>
                <div className="receipt-row">
                    <span>Base Price</span>
                    <span> £ {selectedSkip.price_before_vat}</span>
                </div>
                <div className="receipt-row">
                    <span>VAT</span>
                    <span>{selectedSkip.vat}% | £{(parseFloat(selectedSkip.price_before_vat) * selectedSkip.vat / 100)}</span>
                </div>
                <div className="receipt-row total">
                    <strong>Total</strong>
                    <strong>£{total}</strong>
                </div>
            </div>

            <div className="receipt-note">
                <p>
                    * All sizes, durations, and images are illustrative. Actual skip may differ slightly.
                </p>
            </div>

            <div className="receipt-footer">
                <button className="receipt-btn back" onClick={onBack}>← Back</button>
                <button className="receipt-btn continue" onClick={onContinue}>Continue →</button>
            </div>
        </div>
    );
}
