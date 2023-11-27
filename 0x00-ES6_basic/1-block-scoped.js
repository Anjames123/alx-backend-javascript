export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    task = false;  // Removed "var" here
    task2 = true; // Removed "var" here
  }

  return [task, task2];
}
