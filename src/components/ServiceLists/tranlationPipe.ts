export const translationPipe = (key: string) => {
    switch (key) {
        case "Today": return "Servicios de Hoy";
        case "Recent to added": return "Servicios Recientes";
        case "Most Popular": return "Servicios Populares";
        default : return key;
    }

}
