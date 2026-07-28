import { NoticeList } from "./components/NoticeList/NoticeList";
import "./components/NoticeList/NoticeList.css";
import "./App.css";

const notices = [
  {
    id: "1",
    publishedAt: "2026-08-01",
    title: "夏季休業のお知らせ",
  },
  {
    id: "2",
    publishedAt: "2026-07-28",
    title: "ウェブサイトメンテナンスのお知らせ",
  },
  {
    id: "3",
    publishedAt: "2026-07-15",
    title:
      "システムメンテナンスに伴うサービス一時停止と再開予定時刻、および影響範囲とお客様へのお願いについてのお知らせ",
  },
];

function App() {
  return (
    <main className="app">
      <h1>お知らせ</h1>
      <NoticeList notices={notices} />
    </main>
  );
}

export default App;
