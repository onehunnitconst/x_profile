const container = document.querySelector('.ohc-container');

data.forEach((p) => {
  const group = document.createElement('div');
  group.className = `paragraph-${p.id} mb-5`
  container.appendChild(group);

  const groupTitle = document.createElement('h2');
  groupTitle.className = 'mb-3';
  groupTitle.textContent = p.title;
  group.appendChild(groupTitle);

  if (p.subtitle) {
    const groupSubtitle = document.createElement('p');
    groupTitle.className = 'mb-2';
    groupSubtitle.className = 'mb-3 text-secondary';
    groupSubtitle.textContent = p.subtitle;
    group.appendChild(groupSubtitle);
  }


  const groupItemList = document.createElement('ul');
  groupItemList.className = 'list-group fs-5';
  group.appendChild(groupItemList);

  p.items.forEach((item) => {
    const groupItem = document.createElement('li');
    groupItem.className = 'list-group-item px-3';
    groupItemList.appendChild(groupItem);

    const collapseTitle = document.createElement('a');
    collapseTitle.textContent = item.title;
    collapseTitle.className = 'd-flex flex-row text-decoration-none text-black pt-1 pb-1';
    collapseTitle.setAttribute('data-bs-toggle', 'collapse');
    collapseTitle.setAttribute('href', `#ohc-${item.id}-collapse`);
    collapseTitle.setAttribute('role', 'button');
    collapseTitle.setAttribute('aria-expanded', 'false');
    collapseTitle.setAttribute('aria-controlls', `ohc-${item.id}-collapse`)
    groupItem.appendChild(collapseTitle);

    const collapseContent = document.createElement('div');
    collapseContent.id = `ohc-${item.id}-collapse`;
    collapseContent.className = `collapse ${item.id}-collapse pt-2`;
    groupItem.appendChild(collapseContent);

    const { table: tableContents, text: textContents } = item;

    if (tableContents) {
      const table = document.createElement('table');
      table.className = 'fs-6 table table-borderless';
      collapseContent.appendChild(table);
  
      const tableBody = document.createElement('tbody');
      table.appendChild(tableBody);
  
      Object.entries(tableContents).forEach(([key, value]) => {
        const tableRow = document.createElement('tr');
        tableBody.append(tableRow);
      
        const tableHeader = document.createElement('th');
        tableHeader.scope = 'row';
        tableHeader.innerHTML = key;
      
        const tableData = document.createElement('td');
        tableData.className = 'd-flex flex-row align-items-center';
        tableData.innerHTML = value;
      
        tableRow.append(tableHeader, tableData);
      })
    }

    if (textContents) {
      const textArea = document.createElement('div');
      collapseContent.appendChild(textArea);

      const paragraph = document.createElement('p');
      paragraph.className = 'pt-2 fs-6';
      paragraph.innerHTML = textContents;
      textArea.appendChild(paragraph);
    }
  })
})

