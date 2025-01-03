let summaryContainerHeadingElement = document.querySelector(
  ".summary-container-heading"
);

export let summary = () => {
  summaryContainerHeadingElement.textContent = `${travelFrom} till ${travelTo}`;
};
