export type Notice = {
  /** 管理用のID */
  id: string;
  /** 公開日 */
  publishedAt: string;
  /** タイトル */
  title: string;
};

export type NoticeListProps = {
  /** お知らせの一覧 */
  notices: Notice[];
  /** 読み込み中の表示に切り替える */
  isLoading?: boolean;
};

export function NoticeList({ notices, isLoading = false }: NoticeListProps) {
  // 読み込み中はスケルトンを表示する
  if (isLoading) {
    return (
      <ul className="notice-list" aria-busy="true" aria-label="読み込み中">
        {Array.from({ length: 3 }, (_, index) => (
          <li key={index} className="notice-list__row">
            <span className="notice-list__skeleton notice-list__skeleton--date" />
            <span className="notice-list__skeleton notice-list__skeleton--title" />
          </li>
        ))}
      </ul>
    );
  }

  if (notices.length === 0) {
    return <p className="notice-list__empty">お知らせはありません</p>;
  }

  return (
    <ul className="notice-list">
      {notices.map((notice) => (
        <li key={notice.id} className="notice-list__row">
          <time dateTime={notice.publishedAt}>{notice.publishedAt}</time>
          <span className="notice-list__title">{notice.title}</span>
        </li>
      ))}
    </ul>
  );
}
