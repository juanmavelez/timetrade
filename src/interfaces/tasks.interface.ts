export interface Task  {
    id: string;
    beneficiary_id: string;
    supplier_id: string;
    time: string;
    state: State
    scheduled_at: string;
    service_id: string;
    description: string;
    created_at: string;
    updated_at: string;
}

export type State = "offered" | "rejected" | "pending" | "completed";
