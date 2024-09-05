let toggleValue = 2;

function fakeItemNumber() {
  toggleValue = toggleValue === 1 ? 2 : 1;
  return toggleValue
}

export async function getTodos() {
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve([{
            id: 1, description: `${fakeItemNumber()}`
          }]);
        }, 300);
      });
}

export function postTodo() {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject([{
        result: 'boom!'
      }]);
    }, 300);
  });
}
