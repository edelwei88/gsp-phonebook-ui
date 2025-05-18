export type Organization = {
    ID: string;
    Name: string;
    Children: Organization[];
}

export function getDepartmentPath(
  organizations: Organization[] | undefined,
  targetId: string
): string {
  let path: string[] = [];
  
  if (!organizations || !Array.isArray(organizations)) {
    return "Не указано";
  }

  function findNode(nodes: Organization[]): boolean {
    if (!nodes || !nodes.length) return false;

    for (const node of nodes) {
      if (node.ID === targetId) {
        path.unshift(node.Name);
        return true;
      }
      
      const children = node.Children || [];
      if (findNode(children)) {
        path.unshift(node.Name);
        return true;
      }
    }
    return false;
  }

  findNode(organizations);
  return path.join(" → ") || "Не указано";
}