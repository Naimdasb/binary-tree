class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
    addNode(n) {
        if (n.value < this.value) {
            if (this.left === null) {
                this.left = n;
            } else {
                this.left.addNode(n);
            }
        } else if (n.value > this.value) {
            if (this.right === null) {
                this.right = n;
            } else {
                this.right.addNode(n);
            }
        }
    }
}

class Tree {
    constructor() {
        this.root = null;
    }
    addValue(val) {
        const n = new Node(val);
        if (this.root === null) {
            this.root = n;
        } else {
            this.root.addNode(n);
        }
    }
}

const tree = new Tree()
tree.addValue(5)
tree.addValue(1)
tree.addValue(7)

console.log(tree)