import { ExternalLinkIcon, PencilIcon, TrashIcon } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useConfirm } from "@/hooks/use-confirm";
import { useDeleteTask } from "../api/use-delete-task";
import { useRouter } from "next/navigation";
import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";
import { useEditTaskModal } from "../hooks/use-edit-task-modal";

interface TaskActionsProps {
    id: string;
    projectId: string;
    children: React.ReactNode;
};

export const TaskActions =({ id, projectId,  children }: TaskActionsProps) => {
    const workspaceId = useWorkspaceId();
    const router = useRouter();

    const { open } = useEditTaskModal();
    
    const [ConfirmDialog, confirm] = useConfirm(
        "Hapus tugas.",
        "tindakan ini tidak dapat dibatalkan.",
        "destructive"
    );
    const { mutate, isPending } = useDeleteTask();

    const onDelete = async () => {
        const ok = await confirm();
        if (!ok) return;

        mutate({ param: {taskId: id} });
    };

    const onOpenTask = () => {
        router.push(`/workspaces/${workspaceId}/tasks/${id}`);
    };

    const onOpenProject = () => {
        router.push(`/workspaces/${workspaceId}/projects/${projectId}`);
    };
    
    
    return (
        <div className="flex justify-end">
            <ConfirmDialog />
            <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                    {children}
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem
                        onClick={onOpenTask}
                        className="font-medium p-[10px]"
                    >
                        <ExternalLinkIcon  className="size-4 mr-2 stroke-2"/>
                        Detail Tugas
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={onOpenProject}
                        className="font-medium p-[10px]"
                    >
                        <ExternalLinkIcon  className="size-4 mr-2 stroke-2"/>
                        Buka Matakuliah
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={() => open(id)}
                        className="font-medium p-[10px]"
                    >
                        <PencilIcon  className="size-4 mr-2 stroke-2"/>
                        Edit Tugas
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={onDelete}
                        disabled={isPending}
                        className="text-amber-700 focus:text-amber-700 font-medium p-[10px]"
                    >
                        <TrashIcon  className="size-4 mr-2 stroke-2"/>
                        Hapus Tugas
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};