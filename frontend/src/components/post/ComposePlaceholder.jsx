export default function ComposePlaceholder({ placeholder = "Reply…" }) {
  return (
    <div className="flex gap-3 px-4 py-3 border-b border-border">
      <div className="w-10 h-10 rounded-full bg-surface-2 border border-border shrink-0" />
      <div className="flex-1 flex items-center">
        <span className="text-sm text-content-3 italic">{placeholder} (requires key auth)</span>
      </div>
    </div>
  )
}
