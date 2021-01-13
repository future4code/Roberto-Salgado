export class Queue {
  public nodes: any[] = [];

  isEmpty = (): boolean => this.nodes.length === 0;

  enqueue = (value: number): void => {
    this.nodes.push(value);
  }

  dequeue = (): any => this.nodes.shift();

  print(): void {
    for (let i = 0; i < this.nodes.length; i++) {
      console.log(`Elemento ${i + 1}: `, this.nodes[i]);
    }
  }
}