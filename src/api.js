export async function getTodos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([{
            id: 1, description: 'to do one'
          }]);
        }, 300);
      });
}

export function postTodo() {
    return []
}
