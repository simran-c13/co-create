window.computeMatchPercent = function(userSkills, requiredSkills){
  // Generate random percentages for showcasing (25-95% range)
  const randomPercent = Math.floor(Math.random() * 71) + 25; // 25-95%
  return randomPercent;
};

window.renderMatchChip = function(percent){
  const color = percent >= 75 ? '#16a34a' : percent >= 40 ? '#f59e0b' : '#ef4444';
  return `<span class="chip" style="border-color:${color}; color:${color}; background:#fff">${percent}%</span>`;
};
