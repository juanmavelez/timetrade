
/**
 * This service is not production ready, if it's needed on production, it is needed
 * to improve the error handler.
 */
export const localStorageService = {
    // Get an item from local storage
    getItem(key: string): boolean | string | null {
        if (!this.isLocalStorageAvailable()) {
            return false;
        }

        try {
            return localStorage.getItem(key);
        } catch (error) {
            console.error(error);
            return false;
        }
    },

    // Set an item in local storage
    setItem(key: string, value: string): boolean {
        if (!this.isLocalStorageAvailable()) {
            return false;
        }

        try {
            localStorage.setItem(key, value);
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    },

    // Remove an item from local storage
    removeItem(key: string): boolean {
        if (!this.isLocalStorageAvailable()) {
            return false;
        }

        try {
            localStorage.removeItem(key);
            return true;
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error(error);
            return false;
        }
    },

    // Clear all items from local storage
    clear(): boolean {
        if (!this.isLocalStorageAvailable()) {
            return false;
        }

        try {
            localStorage.clear();
            return true;
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error(error);
            return false;
        }
    },

    getAllKeys(): Array<string> {
        if (!this.isLocalStorageAvailable()) {
            return [];
        }

        return Object.keys(localStorage);
    },

    // Returns all the keys that match the given patter
    getAllKeysThatContain(pattern: RegExp): Array<string> {
        if (!this.isLocalStorageAvailable()) {
            return [];
        }

        const keys = this.getAllKeys();
        return keys.filter((arg) => arg.match(pattern));
    },

    isLocalStorageAvailable(): boolean {
        //localStorage is undefined on server side
        return typeof localStorage !== "undefined";
    },
};
