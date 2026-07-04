// Node 06: Logger
// Centralized logging for node06

export class Node06Logger {
  log(level: string, message: string): void {
    console.log(`[node06] [${level}] ${message}`);
  }
}
