export type Article = {
  /** 管理用のID */
  id: string;
  /** 記事のタイトル */
  title: string;
  /** 閲覧数。集計前は未指定 */
  viewCount?: number;
};

export type ArticleRankingProps = {
  /** ランキングに表示する記事の一覧 */
  articles: Article[];
};

/** 閲覧数の降順に並べる。集計前は末尾扱い */
function compareArticles(a: Article, b: Article): number {
  const countA = a.viewCount ?? -1;
  const countB = b.viewCount ?? -1;
  return countB - countA;
}

/** 閲覧数が同じ記事には同じ順位を振り、次の順位はその件数分飛ばす（1, 2, 2, 4） */
function assignRanks(articles: Article[]): { article: Article; rank: number }[] {
  const sorted = [...articles].sort(compareArticles);
  let rank = 0;
  let previousCount: number | undefined | null = null;

  return sorted.map((article, index) => {
    if (previousCount === null || article.viewCount !== previousCount) {
      rank = index + 1;
    }
    previousCount = article.viewCount;
    return { article, rank };
  });
}

/** 3位までは順位をメダル色で強調する */
function rankModifier(rank: number): string {
  if (rank === 1) {
    return "article-ranking__rank--gold";
  }
  if (rank === 2) {
    return "article-ranking__rank--silver";
  }
  if (rank === 3) {
    return "article-ranking__rank--bronze";
  }
  return "";
}

/** 空文字・空白だけのタイトルは「(タイトルなし)」に置き換える */
function displayTitle(title: string): string {
  if (title.trim() === "") {
    return "(タイトルなし)";
  }
  return title;
}

/** 閲覧数は3桁区切りにする。集計前は数値を出さない */
function displayViewCount(viewCount: number | undefined): string {
  if (viewCount === undefined) {
    return "集計中";
  }
  return `${viewCount.toLocaleString("ja-JP")} PV`;
}

export function ArticleRanking({ articles }: ArticleRankingProps) {
  const ranked = assignRanks(articles);

  if (ranked.length === 0) {
    return <p className="article-ranking__empty">ランキングはまだありません</p>;
  }

  return (
    <ol className="article-ranking">
      {ranked.map(({ article, rank }) => (
        <li key={article.id} className="article-ranking__item">
          <span
            className={["article-ranking__rank", rankModifier(rank)]
              .filter(Boolean)
              .join(" ")}
            aria-label={`${rank}位`}
          >
            {rank}
          </span>
          <span className="article-ranking__title">
            {displayTitle(article.title)}
          </span>
          <span className="article-ranking__count">
            {displayViewCount(article.viewCount)}
          </span>
        </li>
      ))}
    </ol>
  );
}
