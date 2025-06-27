import { Folder } from "lucide-react"

export const FilePathLabel = ({ path }: { path: string }) => (
  <p className="text-sm flex items-center gap-2 text-muted-foreground font-mono mb-2">
    <Folder size={16}/> <code>{path}</code>
  </p>
);
