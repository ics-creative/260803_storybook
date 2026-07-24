export type Tag = {
  id: string;
  label: string;
  /** 小さいほど先に並ぶ。未指定は末尾扱い */
  priority?: number;
};

export type TagListProps = {
  tags: Tag[];
};

function compareTags(a: Tag, b: Tag): number {
  const priorityA = a.priority ?? Number.POSITIVE_INFINITY;
  const priorityB = b.priority ?? Number.POSITIVE_INFINITY;
  if (priorityA !== priorityB) {
    return priorityA - priorityB;
  }
  return a.label.localeCompare(b.label, "ja");
}

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
