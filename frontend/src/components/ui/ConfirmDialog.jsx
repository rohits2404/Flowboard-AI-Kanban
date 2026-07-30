import { Modal } from "./Modal";
import { Button } from "./Button";

/**
 * Reusable confirmation modal (replaces window.confirm).
 */
export const ConfirmDialog = ({
    open,
    onClose,
    onConfirm,
    title = "Are You Sure?",
    description,
    confirmLabel = "Confirm",
    cancelLabel = "Cancel",
    danger = false,
    loading = false,
}) => (
    <Modal
        open={open}
        onClose={onClose}
        title={title}
        description={description}
        size="sm"
    >
        <div className="flex justify-end gap-2 pt-1">
            <Button variant="ghost" onClick={onClose}>
                {cancelLabel}
            </Button>

            <Button
                variant={danger ? "danger" : "primary"}
                onClick={onConfirm}
                loading={loading}
            >
                {confirmLabel}
            </Button>
        </div>
    </Modal>
);