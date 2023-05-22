export const translationPipe = (key: string) => {
    switch (key) {
        case "Today": return "Servicios de Hoy";
        case "Recent to added": return "Servicios Recientes";
        case "Most popular": return "Servicios Populares";
        default : return key;
    }

}
