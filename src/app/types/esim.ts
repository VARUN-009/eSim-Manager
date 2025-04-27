// Define a Plan type with details about each plan
export interface Plan {
  name: string;
  price: string;
  data: string;
  validity: string;
  speed?: string; // optional: speed information
  support?: string; // optional: support info
  roaming?: boolean; // optional: if roaming is available
}

// Define eSIM data structure
export interface ESimData {
  bookingId: string; // booking ID for the eSIM
  plan: {
    // current plan details
    name: string;
    price: string;
    validFrom: string;
    validUntil: string;
    remainingData: string;
  };
  usage: {
    // usage details
    totalData: string;
    usedData: string;
    smsTotal: number;
    smsUsed: number;
    voiceTotal: string;
    voiceUsed: string;
  };
  currentSession: {
    // current active session details
    sessionId: string;
    started: string;
    usageMB: number;
  };
  availablePlans: Plan[]; // list of available plans
}
