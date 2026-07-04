// Node 10: Logger
// Centralized logging for node10

export class Node10Logger {
  log(level: string, message: string): void {
    console.log(`[node10] [${level}] ${message}`);
  }
}
