import { NotificationBadge } from "../NotificationBadge/NotificationBadge";
import "../NotificationBadge/NotificationBadge.css";

export type SideMenuItem = {
  /** 管理用のID */
  id: string;
  /** メニューに表示するラベル */
  label: string;
  /** 未読件数。未指定と0のときはバッジを出さない */
  badgeCount?: number;
};

export type SideMenuProps = {
  /** メニューに並べる項目 */
  items: SideMenuItem[];
  /** 選択中の項目のID */
  activeId?: string;
};

export function SideMenu({ items, activeId }: SideMenuProps) {
  return (
    <nav className="side-menu" aria-label="サイドメニュー">
      <ul className="side-menu__list">
        {items.map((item) => (
          <li key={item.id}>
            <a
              className="side-menu__link"
              href="#"
              aria-current={item.id === activeId ? "page" : undefined}
            >
              <span className="side-menu__icon" aria-hidden="true" />
              <span className="side-menu__label">{item.label}</span>
              {item.badgeCount !== undefined && (
                <NotificationBadge count={item.badgeCount} />
              )}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
