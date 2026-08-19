# NOCTUA 更新網站

這個資料夾可獨立建立成一個 GitHub repository，並啟用 GitHub Pages。

日後更新時只要修改 `update.json`：

- `version`：版本號
- `releasedAt`：更新日期
- `downloadUrl`：GitHub Releases 裡 APK 的下載網址
- `notes`：本次更新內容

上傳 APK 到 GitHub Releases 後，把 `downloadUrl` 改成該 APK 的網址並推送；網站會自動顯示新版本與下載按鈕。
