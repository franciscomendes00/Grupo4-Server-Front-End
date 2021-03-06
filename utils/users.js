const users = [];

// Join user to chat
function userJoin(id) {
    const user = {id};
  
    users.push(user);
  
    return user;
  }

// Get current user
function getCurrentUser(id) {
    return users.find(user => user.id === id);
}

// User disconnects
function userLeave(id) {
    const index = users.findIndex(user => user.id === id);
  
    if (index !== -1) {
      return users.splice(index, 1)[0];
    }
  }

module.exports = {
    userJoin,
    getCurrentUser,
    userLeave
};