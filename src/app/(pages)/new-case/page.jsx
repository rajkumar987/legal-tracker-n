"use client";

import { useState } from 'react';

export default function CaseForm() {
  const [form, setForm] = useState({
    caseNumber: '',
    filedDate: '',
    financialsInvolved: '',
    courtName: '',
    petitioner: '',
    respondent: '',
    // Add other form fields here...
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here...
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Case Number:
        <input type="text" name="caseNumber" value={form.caseNumber} onChange={handleChange} />
      </label>
      <label>
        Filed Date:
        <input type="date" name="filedDate" value={form.filedDate} onChange={handleChange} />
      </label>
      <label>
        Financials Involved:
        <input type="text" name="financialsInvolved" value={form.financialsInvolved} onChange={handleChange} />
      </label>
      <label>
        Name of the Court:
        <input type="text" name="courtName" value={form.courtName} onChange={handleChange} />
      </label>
      <label>
        Petitioner:
        <input type="text" name="petitioner" value={form.petitioner} onChange={handleChange} />
      </label>
      <label>
        Respondent:
        <input type="text" name="respondent" value={form.respondent} onChange={handleChange} />
      </label>
      {/* Add other form fields here... */}
      <button type="submit">Submit</button>
    </form>
  );
}
