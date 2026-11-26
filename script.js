const billingCheckbox = document.getElementById('billing-checkbox');
const monthlyLabel = document.getElementById('monthly-label');
const yearlyLabel = document.getElementById('yearly-label');
const priceAmounts = document.querySelectorAll('.amount');
const billingNotes = document.querySelectorAll('.billing-note');

billingCheckbox.addEventListener('change', () => {
  const isYearly = billingCheckbox.checked;

  // Highlight active billing label
  monthlyLabel.classList.toggle('active', !isYearly);
  yearlyLabel.classList.toggle('active', isYearly);

  // Smoothly animate and update prices
  priceAmounts.forEach((amountEl) => {
    amountEl.classList.add('updating');

    setTimeout(() => {
      amountEl.textContent = isYearly
        ? amountEl.dataset.yearly
        : amountEl.dataset.monthly;
      amountEl.classList.remove('updating');
    }, 180);
  });

  // Update billing sub-text
  billingNotes.forEach((noteEl) => {
    noteEl.textContent = isYearly
      ? 'Billed annually (20% discount applied)'
      : 'Billed monthly';
  });
});
