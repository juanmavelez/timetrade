interface Contactinfo {
    id: string;
    firstname: string;
    lastname: string;
    phone: string;
    email: string;
}

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
    contact_info?: Contactinfo;
}

export type State = "accepted" | "rejected" | "pending" | "completed" ;
