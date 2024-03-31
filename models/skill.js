const skills = [
    {id: 1, skill: 'JavaScript', done: true},
    {id: 2, skill: 'MongoDB', done: false},
    {id: 3, skill: 'Node.js', done: true},
    {id: 4, skill: 'Express', done: true},
    {id: 5, skill: 'GitHub', done: true},
    {id: 6, skill: 'Python', done: true},
    {id: 7, skill: 'HTML', done: true},
    {id: 8, skill: 'Java', done: false},
    {id: 9, skill: 'CSS', done: false},
  ];
	
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
};

function update(id, updatedSkill) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, updatedSkill);
};

function deleteOne(id) {
    id = parseInt(id);
    console.log("deleteOne")
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
};

function create(skill) {
    skill.id = Date.now() % 100000;
    skill.done = false;
    skills.push(skill);
};

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
};
	
  function getAll() {
    return skills;
};