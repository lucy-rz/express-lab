const skills = [
    {id: 1, skill: 'JavaScript', done: true},
    {id: 2, skill: 'Node.js', done: true},
    {id: 3, skill: 'Express', done: true},
    {id: 4, skill: 'HTML', done: true},
    {id: 5, skill: 'CSS', done: true},
  ];
	
  module.exports = {
    getAll,
    getOne
};

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}
	
  function getAll() {
    return skills;
  }