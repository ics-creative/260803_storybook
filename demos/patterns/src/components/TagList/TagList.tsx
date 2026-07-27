export type Tag = {
  /** 管理用のID */
  id: string;
  /** 表示するラベル */
  label: string;
  /** 小さいほど先に並ぶ。未指定は末尾扱い */
  priority?: number;
};

export type TagListProps = {
  /** タグの一覧 */
  tags: Tag[];
};

/** priorityの昇順に並べる。同値はラベルの辞書順 */
function compareTags(a: Tag, b: Tag): number {
  const priorityA = a.priority ?? Number.POSITIVE_INFINITY;
  const priorityB = b.priority ?? Number.POSITIVE_INFINITY;
  if (priorityA !== priorityB) {
    return priorityA - priorityB;
  }
  return a.label.localeCompare(b.label, "ja");
}

/** 空文字・空白だけのラベルは「(ラベルなし)」に置き換える */
function displayLabel(label: string): string {
  if (label.trim() === "") {
    return "(ラベルなし)";
  }
  return label;
}

export function TagList({ tags }: TagListProps) {
  const sorted = [...tags].sort(compareTags);

  if (sorted.length === 0) {
    return <p className="tag-list__empty">タグはありません</p>;
  }

  return (
    <ul className="tag-list">
      {sorted.map((tag) => (
        <li key={tag.id} className="tag-list__item">
          <span className="tag-list__label">{displayLabel(tag.label)}</span>
        </li>
      ))}
    </ul>
  );
}
