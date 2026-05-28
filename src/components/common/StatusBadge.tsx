import { cn } from "@/lib/utils";
import { statusDefinitions } from "@/config/statuses";
import type { AppointmentStatus } from "@/types/appointment";
import { useT } from "@/i18n/useT";

interface StatusBadgeProps {
  status: AppointmentStatus;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const t = useT();
  const def = statusDefinitions[status];
  const label = t.status[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-xs font-medium",
        def.className,
        className,
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", def.dotClassName)} />
      {label}
    </span>
  );
}
