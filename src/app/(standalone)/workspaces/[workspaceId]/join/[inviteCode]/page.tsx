import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";
import { WorkspaceIdjoinClient } from "./client";


const WorkspaceIdJoinPage = async () => {
    const user = await getCurrent();
    if (!user) redirect("/sign-in");

    return <WorkspaceIdjoinClient />
};

export default WorkspaceIdJoinPage