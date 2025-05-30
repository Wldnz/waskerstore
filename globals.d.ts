// globals.d.ts
interface Window {
    snap: {
      pay(token: string, callbacks?: {
        onSuccess?: (result: any) => void;
        onPending?: (result: any) => void;
        onError?: (error: any) => void;
        onClose?: () => void;
      }): void;
    };
  }
  