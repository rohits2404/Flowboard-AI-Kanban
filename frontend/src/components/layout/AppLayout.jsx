import { createContext, useContext, useState, useCallback, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { BoardsProvider } from "../../context/BoardsContext";
import { cn } from "../../lib/utils";
import { Sidebar } from "./Sidebar";
import { CreateBoardModal } from "../board/CreateBoardModal";
import { CommandMenu } from "../CommandMenu";

const LayoutContext = createContext(null);

export const useLayout = () => useContext(LayoutContext);

const LayoutInner = () => {
    
    const [createOpen, setCreateOpen] = useState(false);
    const [commandOpen, setCommandOpen] = useState(false);
    const [collapsed, setCollapsed] = useState(
        () => localStorage.getItem("sidebar-collapsed") === "true"
    );

    const openCreateBoard = useCallback(() => setCreateOpen(true), []);
    const openCommand = useCallback(() => setCommandOpen(true), []);

    const toggleSidebar = useCallback(
        () =>
            setCollapsed((c) => {
                const next = !c;
                localStorage.setItem("sidebar-collapsed", String(next));
                return next;
            }),
        []
    );

    // Global ⌘K / Ctrl+K
    useEffect(() => {
        const onKey = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
                e.preventDefault();
                setCommandOpen((o) => !o);
            }
        };

        document.addEventListener("keydown", onKey);

        return () => document.removeEventListener("keydown", onKey);
    }, []);

    return (
        <LayoutContext.Provider value={{ openCreateBoard, openCommand }}>
            <div className="h-screen overflow-hidden">
                <Sidebar
                    collapsed={collapsed}
                    onToggle={toggleSidebar}
                    onCreateBoard={openCreateBoard}
                    onCommand={openCommand}
                />

                <main
                    className={cn(
                        "flex h-screen min-w-0 flex-col overflow-hidden transition-[padding] duration-300 ease-spring",
                        collapsed ? "md:pl-23" : "md:pl-70"
                    )}
                >
                    <Outlet />
                </main>
            </div>

            <CreateBoardModal
                open={createOpen}
                onClose={() => setCreateOpen(false)}
            />

            <CommandMenu
                open={commandOpen}
                onClose={() => setCommandOpen(false)}
                onCreateBoard={() => {
                    setCommandOpen(false);
                    setCreateOpen(true);
                }}
            />
        </LayoutContext.Provider>
    );
};

export const AppLayout = () => (
    <BoardsProvider>
        <LayoutInner />
    </BoardsProvider>
);
