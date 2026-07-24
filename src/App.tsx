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
    title: "営業時間変更のお知らせ",
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
