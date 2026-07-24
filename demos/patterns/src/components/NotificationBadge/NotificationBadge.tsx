export type NotificationBadgeProps = {
  /** 未読件数。0 以下はバッジを出さない */
  count: number;
  /** この件数を超えたら `99+` のように省略表示する */
  max?: number;
};

export function NotificationBadge({
  count,
  max = 99,
}: NotificationBadgeProps) {
  if (count <= 0) {
    return null;
  }

  const label = count > max ? `${max}+` : String(count);

  return (
    <span className="notification-badge" aria-label={`未読 ${label} 件`}>
      {label}
    </span>
  );
}
