// Node 03: Logger
// Centralized logging for node03

export class Node03Logger {
  log(level: string, message: string): void {
    console.log(`[node03] [${level}] ${message}`);
  }
}
