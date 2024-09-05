let toggleValue = 2;

function fakeItemNumber() {
  toggleValue = toggleValue === 1 ? 2 : 1;
  return toggleValue
}

export async function getTodos() {
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve([{
            id: 1, 
            description: `${fakeItemNumber()}`,
            sus: 'Status: <b onmouseover="console.log(\'stealing\');">Success</b>'
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
