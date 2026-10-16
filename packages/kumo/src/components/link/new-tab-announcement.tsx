import type { ReactNode } from "react";
import { useKumoLocale } from "../../utils/locale-provider";

export function useNewTabAnnouncement() {
  const { link } = useKumoLocale();

  return link.opensInNewTab;
}

export function NewTabAnnouncement({
  children,
  id,
}: {
  children?: ReactNode;
  id?: string;
}) {
  const defaultAnnouncement = useNewTabAnnouncement();

  return (
    <span id={id} className="sr-only">
      {children ?? defaultAnnouncement}
    </span>
  );
}
