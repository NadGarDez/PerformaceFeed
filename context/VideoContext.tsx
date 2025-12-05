/**
 * Proveedor de contexto que administra el progreso de reproducción de vídeos. (Documentacion creada con ia :D)
 *
 * Este VideoProgressProvider mantiene un mapa en memoria (Record<string, number>)
 * que asocia identificadores de vídeo con la posición de reproducción en milisegundos.
 * Expone un conjunto de utilidades para leer, guardar y eliminar ese progreso desde
 * cualquier componente descendiente que consuma el contexto mediante useVideoProgress().
 *
 * Comportamiento y características:
 * - saveProgress(id, milliseconds): guarda o actualiza el progreso (ms) para el id dado.
 * - getProgress(id): devuelve el progreso en milisegundos o null si no existe.
 * - removeProgress(id): elimina la entrada de progreso correspondiente al id.
 * - clearAll(): limpia todos los progresos almacenados en memoria.
 * - hasProgress(id): indica si existe progreso para el id especificado.
 *
 * Implementación:
 * - El estado se gestiona con useState y las actualizaciones se realizan de forma inmutable.
 * - Las funciones expuestas están memorizadas con useCallback para mantener referencias estables.
 *
 * Consideraciones:
 * - El almacenamiento es volátil (memoria del runtime). Si se requiere persistencia entre sesiones
 *   hay que integrar un mecanismo externo (por ejemplo AsyncStorage, IndexedDB o una API remota).
 * - El hook useVideoProgress() lanzará un error si se usa fuera del alcance de este provider,
 *   por lo que es necesario envolver los componentes consumidores con VideoProgressProvider.
 *
 * @param props.children - Elementos React que tendrán acceso al contexto de progreso de vídeo.
 */
import React, { createContext, useCallback, useContext, useState } from 'react';

type ProgressMap = Record<string, number>;

interface VideoContextType {
  progress: ProgressMap;
  
  saveProgress: (id: string, milliseconds: number) => void;
  getProgress: (id: string) => number | null;
  removeProgress: (id: string) => void;
  clearAll: () => void;
  
  hasProgress: (id: string) => boolean;
}

const VideoProgressContext = createContext<VideoContextType | undefined>(undefined);

export const useVideoContext = () => {
  const context = useContext(VideoProgressContext);
  if (!context) {
    throw new Error('useVideoProgress debe usarse dentro de VideoProgressProvider');
  }
  return context;
};


export const VideoContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState<ProgressMap>({});

  const saveProgress = useCallback((id: string, milliseconds: number) => {
    setProgress(prev => ({
      ...prev,
      [id]: milliseconds
    }));
  }, []);

  const getProgress = useCallback((id: string): number | null => {
    return progress[id] ?? null;
  }, [progress]);

  const removeProgress = useCallback((id: string) => {
    setProgress(prev => {
      const newProgress = { ...prev };
      delete newProgress[id];
      return newProgress;
    });
  }, []);

  const clearAll = useCallback(() => {
    setProgress({});
  }, []);

  const hasProgress = useCallback((id: string): boolean => {
    return id in progress;
  }, [progress]);

  const value: VideoContextType = {
    progress,
    saveProgress,
    getProgress,
    removeProgress,
    clearAll,
    hasProgress,
  };

  return (
    <VideoProgressContext.Provider value={value}>
      {children}
    </VideoProgressContext.Provider>
  );
};