// Global type declarations for tracking and analytics

declare global {
  interface Window {
    gtag: (
      command: 'event' | 'config' | 'set' | 'js',
      targetId: string,
      config?: Record<string, any>
    ) => void;
    fbq: (
      command: 'track' | 'init' | 'set',
      eventName: string,
      parameters?: Record<string, any>
    ) => void;
    lintrk: (
      command: 'track',
      parameters: Record<string, any>
    ) => void;
  }
}

export {};

