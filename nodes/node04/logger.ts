// Node 04: Logger
// Centralized logging for node04

export class Node04Logger {
  log(level: string, message: string): void {
    console.log(`[node04] [${level}] ${message}`);
  }
}
