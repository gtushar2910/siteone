"use client"
import { Spinner } from "@nextui-org/react";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div class="grid h-screen place-items-center cardAboutDept"> <Spinner size="lg" label="Loading..." color="warning" /></div>
    )

}