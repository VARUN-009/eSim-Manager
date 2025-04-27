export interface Plan {
  name: string;
  price: string;
  data: string;
  validity: string;
  speed?: string;
  support?: string;
  roaming?: boolean;
}

export interface ESimData {
  bookingId: string;
  plan: {
    name: string;
    price: string;
    validFrom: string;
    validUntil: string;
    remainingData: string;
  };
  usage: {
    totalData: string;
    usedData: string;
    smsTotal: number;
    smsUsed: number;
    voiceTotal: string;
    voiceUsed: string;
  };
  currentSession: {
    sessionId: string;
    started: string;
    usageMB: number;
  };
  availablePlans: Plan[];
}
