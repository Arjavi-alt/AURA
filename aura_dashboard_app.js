/*
 * Example React application entry point for an AURA Copilot dashboard.
 *
 * This module expands on the previously provided dashboard component,
 * organising the interface into separate reusable components and adding
 * a basic Risk & Compliance panel and a Decision Log. It remains a
 * skeleton implementation with placeholder data; you can integrate
 * real API calls and your organisation’s styling or design system.
 */

import React, { useState } from 'react';

/** Revenue Stability Hub */
function RevenueHub() {
  return (
    <section className="rounded-lg bg-white shadow p-4 space-y-4">
      <h2 className="text-lg font-semibold text-indigo-700">Revenue Stability Hub</h2>
      <p className="text-sm text-gray-600">
        Track ARR, COGS, gross profit and EBITDA over time. Visualise
        pilot‑to‑paid conversions, net‑dollar retention and CAC payback.
      </p>
      <div className="h-32 bg-indigo-50 rounded flex items-center justify-center text-indigo-400">
        Revenue chart placeholder
      </div>
      <div className="grid grid-cols-2 gap-2 text-center text-xs">
        <div className="p-2 bg-indigo-100 rounded">
          <div className="font-bold text-xl">78%</div>
          <div>Gross Margin</div>
        </div>
        <div className="p-2 bg-indigo-100 rounded">
          <div className="font-bold text-xl">110%</div>
          <div>Net Dollar Retention</div>
        </div>
        <div className="p-2 bg-indigo-100 rounded">
          <div className="font-bold text-xl">60%</div>
          <div>Pilot → Paid</div>
        </div>
        <div className="p-2 bg-indigo-100 rounded">
          <div className="font-bold text-xl">12 mo</div>
          <div>CAC Payback</div>
        </div>
      </div>
    </section>
  );
}

/** Capital Discipline Hub with interactive OPEX slider */
function CapitalHub() {
  const [opexPercent, setOpexPercent] = useState(100);
  return (
    <section className="rounded-lg bg-white shadow p-4 space-y-4">
      <h2 className="text-lg font-semibold text-indigo-700">Capital Discipline Hub</h2>
      <p className="text-sm text-gray-600">
        Monitor operational spend by category and explore
        what‑if scenarios by adjusting OPEX. See how changes
        influence profitability and break‑even timing.
      </p>
      <div className="flex flex-col space-y-2">
        <label htmlFor="opex-slider" className="font-semibold text-sm">
          Adjust OPEX (% of baseline)
        </label>
        <input
          id="opex-slider"
          type="range"
          min="0"
          max="100"
          value={opexPercent}
          onChange={(e) => setOpexPercent(parseInt(e.target.value, 10))}
          className="w-full"
        />
        <span className="text-xs text-gray-600">Current: {opexPercent}%</span>
      </div>
      <div className="h-32 bg-indigo-50 rounded flex items-center justify-center text-indigo-400">
        OPEX impact chart ({opexPercent}% of baseline)
      </div>
    </section>
  );
}

/** Customer Pulse Monitor */
function CustomerHub() {
  return (
    <section className="rounded-lg bg-white shadow p-4 space-y-4">
      <h2 className="text-lg font-semibold text-indigo-700">Customer Pulse Monitor</h2>
      <p className="text-sm text-gray-600">
        Gauge customer sentiment and adoption. Track seats in use,
        churn rates, and upsell progress across functions.
      </p>
      <div className="h-32 bg-indigo-50 rounded flex items-center justify-center text-indigo-400">
        Customer funnel placeholder
      </div>
      <div className="grid grid-cols-2 gap-2 text-center text-xs">
        <div className="p-2 bg-indigo-100 rounded">
          <div className="font-bold text-xl">72%</div>
          <div>Weekly Gen‑AI Use</div>
        </div>
        <div className="p-2 bg-indigo-100 rounded">
          <div className="font-bold text-xl">8 wk</div>
          <div>Pilot Duration</div>
        </div>
        <div className="p-2 bg-indigo-100 rounded">
          <div className="font-bold text-xl">13 mo</div>
          <div>Value Realisation</div>
        </div>
        <div className="p-2 bg-indigo-100 rounded">
          <div className="font-bold text-xl">3.7×</div>
          <div>Average ROI</div>
        </div>
      </div>
    </section>
  );
}

/** Risk & Compliance panel */
function RiskPanel() {
  return (
    <section className="rounded-lg bg-white shadow p-4 space-y-4 md:col-span-2">
      <h2 className="text-lg font-semibold text-indigo-700">Risk & Compliance</h2>
      <p className="text-sm text-gray-600">
        Display key risk indicators, compliance status and audit trail summaries.
        This panel uses traffic‑light colour coding to highlight emerging issues.
      </p>
      <div className="grid grid-cols-3 gap-2 text-center text-xs">
        <div className="p-2 rounded" style={{ backgroundColor: '#dcfce7' }}>
          <div className="font-bold text-base">Low</div>
          <div>Data Privacy Risk</div>
        </div>
        <div className="p-2 rounded" style={{ backgroundColor: '#fef9c3' }}>
          <div className="font-bold text-base">Medium</div>
          <div>Model Bias</div>
        </div>
        <div className="p-2 rounded" style={{ backgroundColor: '#fee2e2' }}>
          <div className="font-bold text-base">High</div>
          <div>Supply Chain Exposure</div>
        </div>
      </div>
      <div className="h-32 bg-indigo-50 rounded flex items-center justify-center text-indigo-400">
        Risk heatmap placeholder
      </div>
    </section>
  );
}

/** Decision log panel */
function DecisionLog() {
  // Placeholder log entries. In practice, fetch from backend or local storage.
  const entries = [
    {
      id: 1,
      date: '2025-09-01',
      summary: 'Approved budget reallocation from marketing to R&D',
      rationale: 'Higher ROI expected from product enhancements',
    },
    {
      id: 2,
      date: '2025-09-05',
      summary: 'Rejected vendor renewal due to high risk score',
      rationale: 'Compliance issues uncovered during due diligence',
    },
  ];
  return (
    <section className="rounded-lg bg-white shadow p-4 space-y-4 md:col-span-2">
      <h2 className="text-lg font-semibold text-indigo-700">Decision Log</h2>
      <p className="text-sm text-gray-600">
        Each entry records the date, decision summary and rationale. Replace these
        with real decision data to build an audit trail.
      </p>
      <ul className="divide-y divide-gray-200 text-sm">
        {entries.map((entry) => (
          <li key={entry.id} className="py-2">
            <div className="font-bold">{entry.date}</div>
            <div className="text-indigo-700">{entry.summary}</div>
            <div className="text-gray-600">Rationale: {entry.rationale}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}

/** Root application component assembling the dashboard */
export default function AuraDashboardApp() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans space-y-6">
      <header className="text-center">
        <h1 className="text-3xl font-bold text-indigo-700">AURA Copilot</h1>
        <p className="text-sm text-gray-600">
          From data to decisions — a dashboard for boardroom clarity
        </p>
      </header>
      {/* Primary grid for hubs */}
      <div className="grid gap-6 md:grid-cols-3">
        <RevenueHub />
        <CapitalHub />
        <CustomerHub />
      </div>
      {/* Secondary grid for risk panel and decision log */}
      <div className="grid gap-6 md:grid-cols-2">
        <RiskPanel />
        <DecisionLog />
      </div>
    </div>
  );
}