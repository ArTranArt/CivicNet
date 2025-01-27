document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('proposalForm');
  const proposalList = document.getElementById('proposalList');

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('proposalTitle').value;
    const description = document.getElementById('proposalDescription').value;

    const proposalItem = document.createElement('div');
    proposalItem.classList.add('proposal');
    proposalItem.innerHTML = `
      <h3>${title}</h3>
      <p>${description}</p>
    `;

    proposalList.appendChild(proposalItem);
    form.reset();
  });
});
