export class TestDataGenerator {
  private static counter = 0;

  static uniqueId(): string {
    return `${Date.now()}_${++this.counter}`;
  }

  static username(prefix = 'testuser'): string {
    return `${prefix}_${this.uniqueId()}`;
  }

  static password(): string {
    return `Test@${this.uniqueId()}!Aa1`;
  }

  static email(prefix = 'test'): string {
    return `${prefix}_${this.uniqueId()}@example.com`;
  }

  static randomFromArray<T>(items: T[]): T {
    return items[Math.floor(Math.random() * items.length)];
  }

  static randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
