// A: [F, G]
// F: [H]
// G: [H]
const nodes: Array<[string, string[]]> = [];

const solution: string[] = [];

function addToPoints(name: string, relation: string) {
  for (const node of nodes) {
    if (node[0] === name) {
      node[1].push(relation);
      node[1].sort();
      return;
    }
  }
  nodes.push([name, [relation]]);
}

function processInput(input: string[]) {
  for (const line of input) {
    addToPoints(line[5], line[36]);
  }
}

function removeDuplicates() {
  for (let i = solution.length - 1; i >= 0; i--) {
    const ch = solution[i];
    for (let j = i - 1; j >= 0; j--) {
      if (solution[j] === ch) {
        solution.splice(j, 1);
        i--;
      }
    }
  }
}

function solveP1() {
  solution.push(nodes[0][0]);
  for (const node of nodes) {
    const index = solution.lastIndexOf(node[0]);
    if (index >= 0) {
      solution.splice(index + 1, 0, ...node[1])
    } else {
      solution.splice(0,0, ...node[1]);
      solution.splice(0,0, node[0]);
    }
  }
  removeDuplicates();
}

export function getDay07(input: string[]) {
  processInput(input);
  solveP1();
  return [solution.join(""), ""];
}
