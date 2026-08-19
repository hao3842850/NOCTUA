fetch('update.json', { cache: 'no-store' })
  .then(response => response.json())
  .then(update => {
    document.getElementById('version').textContent = `v${update.version}`;
    document.getElementById('releasedAt').textContent = `更新日期 · ${update.releasedAt}`;
    document.getElementById('download').href = update.downloadUrl;
    document.getElementById('notes').replaceChildren(...update.notes.map(note => {
      const item = document.createElement('li');
      item.textContent = note;
      return item;
    }));
  })
  .catch(() => { document.getElementById('version').textContent = '更新資料讀取失敗'; });
