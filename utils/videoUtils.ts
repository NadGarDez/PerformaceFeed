
import AsyncStorage from '@react-native-async-storage/async-storage';

const PROGRESS_KEY_PREFIX = '@VideoProgress:';

function getKey(id: string): string {
    return `${PROGRESS_KEY_PREFIX}${id}`;
}

export async function getProgress(id: string): Promise<number | null> {
    try {
        const key = getKey(id);
        const progressString = await AsyncStorage.getItem(key);
        
        if (progressString) {
            const progressMs = parseFloat(progressString);
            return isNaN(progressMs) ? null : progressMs;
        }
    } catch (error) {
        console.error("Error al leer progreso de AsyncStorage:", error);
    }
    return null;
}

export async function saveProgress(id: string, milliseconds: number): Promise<void> {
    try {
        const key = getKey(id);
        await AsyncStorage.setItem(key, String(milliseconds));
    } catch (error) {
        console.error("Error al guardar progreso en AsyncStorage:", error);
    }
}

export async function removeProgress(id: string): Promise<void> {
    try {
        const key = getKey(id);
        await AsyncStorage.removeItem(key);
    } catch (error) {
        console.error("Error al eliminar progreso de AsyncStorage:", error);
    }
}

export async function clearAllVideoProgress(): Promise<void> {
    try {
        const keys = await AsyncStorage.getAllKeys();
        const progressKeys = keys.filter(key => key.startsWith(PROGRESS_KEY_PREFIX));
        await AsyncStorage.multiRemove(progressKeys);
    } catch (error) {
        console.error("Error al limpiar todo el progreso de vídeo de AsyncStorage:", error);
    }
}