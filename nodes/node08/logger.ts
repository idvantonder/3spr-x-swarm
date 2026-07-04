// Node 08: Logger
// Centralized logging for node08

export class Node08Logger {
  log(level: string, message: string): void {
    console.log(`[node08] [${level}] ${message}`);
  }
}
