// Node 05: Logger
// Centralized logging for node05

export class Node05Logger {
  log(level: string, message: string): void {
    console.log(`[node05] [${level}] ${message}`);
  }
}
