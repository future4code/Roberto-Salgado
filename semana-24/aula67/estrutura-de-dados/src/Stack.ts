import { LinkedList } from "./LinkedList";
import { LinkedListNode } from "./LinkedListNode";

export class Stack {
  public nodes: LinkedList = new LinkedList();

  isEmpty = (): boolean => this.nodes.start === undefined;

  push = (value: number): void => this.nodes.appendToTail(value);

  pop = (): LinkedListNode | undefined => {
    if (!this.nodes.start) return undefined;

    let currentNode: LinkedListNode = this.nodes.start;

    if(!currentNode.next) {
      this.nodes.start = undefined;
      return currentNode;
    }

    let previousNode: LinkedListNode = currentNode;

    while (currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next; 
    }

    previousNode.next = undefined;

    return currentNode;
  }

  print = (): void => this.nodes.print();
}