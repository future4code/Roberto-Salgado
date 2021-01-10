export class DoublyLinkedListNode {
  constructor(public value: number) {}

  private previous?: DoublyLinkedListNode;
  private next?: DoublyLinkedListNode;

  public setPrevious(node?: DoublyLinkedListNode) {
    this.previous = node;
  }

  public getPrevious(): DoublyLinkedListNode | undefined {
    return this.previous;
  }

  public setNext(node?: DoublyLinkedListNode) {
    this.next = node;
  }

  public getNext(): DoublyLinkedListNode | undefined {
    return this.next;
  }
}