import {State} from "../../interfaces/tasks.interface";

interface ColorParams {
    color: string;
    text: string;
}

export const statePipe = (state: State): ColorParams => {

    switch (state) {
        case "accepted":
            return {
                color: "green", text: "Ofrecida",
            };
        case "rejected":
            return {
                color: "red", text: "Rechazada",
            }
        case "pending":
            return {
                color: "#FFC300", text: "En espera",
            }
        case "completed":
            return {
                color: "blue", text: "Completada",
            }

        default:
            return {
                color: "black", text: "Desconocido"
            }
    }
}
