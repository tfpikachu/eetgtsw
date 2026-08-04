/* Lädt die leicht bearbeitbaren Inhalte aus assets/data/seiten/*.js */
(() => {
  const config = window.EETG_PAGE_CONTENT;
  if (!config) return;

  if (config.seitentitel) document.title = config.seitentitel;
  if (config.beschreibung) {
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', config.beschreibung);
  }

  (config.inhalte || []).forEach(item => {
    const elements = document.querySelectorAll(item.selector);
    elements.forEach(element => {
      if (item.text !== undefined) element.textContent = item.text;
      if (item.html !== undefined) element.innerHTML = item.html;
      if (item.attribute && item.wert !== undefined) element.setAttribute(item.attribute, item.wert);
    });
  });

  Object.entries(config.auswahllisten || {}).forEach(([selector, options]) => {
    const select = document.querySelector(selector);
    if (!select) return;
    const placeholder = select.querySelector('option[value=""]');
    select.innerHTML = '';
    if (placeholder) select.append(placeholder);
    options.forEach(optionText => {
      const option = document.createElement('option');
      option.textContent = optionText;
      option.value = optionText;
      select.append(option);
    });
  });
})();
