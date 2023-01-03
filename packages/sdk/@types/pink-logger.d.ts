interface PinkLoggerEvent {
  blockNumber: number
  contract: string
  sequence: number
  payload: string
  topics: string[]
  type: "Event"
}

interface PinkLoggerMessageOutput {
  blockNumber: number
  contract: string
  sequence: number
  nonce: string
  origin: string
  output: string
  type: "MessageOutput"
  decoded?: string
}

type PinkLoggerRecord = PinkLoggerEvent | PinkLoggerMessageOutput


interface PinkLoggerResposne {
  next: number
  records: PinkLoggerRecord[]
}

