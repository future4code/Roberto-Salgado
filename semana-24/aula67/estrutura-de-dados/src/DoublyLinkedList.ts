import { DoublyLinkedListNode } from "./DoublyLinkedListNode";

export class DoublyLinkedList {
  constructor(public start?: DoublyLinkedListNode) {}

  public appendToTail(value: number) {
    const newNode = new DoublyLinkedListNode(value);

    if (!this.start) {
      this.start = newNode;
    } else {
      let node = this.start;
      while (node.getNext() !== undefined) {
        node = node.getNext()!;
      }
      node.setNext(newNode);
      newNode.setPrevious(node);
    }
  }

  public print(): void {
    let i = 1;
    let node = this.start;
    while (node !== undefined) {
      console.log(`Elemento ${i}`);
      console.log(" ", node);
      node = node.getNext();
      i++;
    }
    console.log();
  }

  public searchElement(value: number): DoublyLinkedListNode | undefined {
    let node = this.start;
    while (node !== undefined && node.value !== value) {
      node = node.getNext();
    }
    return node;
  }

  public deleteElement(value: number): DoublyLinkedListNode | undefined {
    let node = this.searchElement(value);
    if (node) {
      const previous = node.getPrevious();
      const next = node.getNext();
      if (next) {
        next.setPrevious(previous);
      }
      if (previous) {
        previous.setNext(next);
      } else {
        this.start = next;
      }
    }
    return node;
  }
}