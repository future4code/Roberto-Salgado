export class LinkedListNode {
  constructor(
     public value: any,
     public next?: LinkedListNode
  ) { }

  public getNext(): LinkedListNode | undefined {
    return this.next;
  }

  public setNext(node: LinkedListNode): void {
    this.next = this.next || node;
  }

  public getData(): any {
    return this.value;
  }
}