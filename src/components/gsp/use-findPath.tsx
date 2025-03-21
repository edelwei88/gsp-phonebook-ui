import { useMemo } from "react";

export default function useFindPath(tree: any[], targetId: string): string[] {
    return useMemo(() => {
        const findPath = (tree: any[], targetId: string, currentPath: string[] = []): string[] | null => {
            for (let node of tree) {
                if (node.ID === targetId) {
                    return [...currentPath, node.Name];
                }
                if (node.Children && node.Children.length > 0) {
                    const result = findPath(node.Children, targetId, [...currentPath, node.Name]);
                    if (result) {
                        return result;
                    }
                }
            }
            return null;
        };

        return findPath(tree, targetId) || [];
    }, [tree, targetId]);
}