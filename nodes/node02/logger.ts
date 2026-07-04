// Node 02: Logger
// Centralized logging for node02

export class Node02Logger {
  log(level: string, message: string): void {
    console.log(`[node02] [${level}] ${message}`);
  }
}
