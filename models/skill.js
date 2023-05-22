const skills = [
    {id: 1, name: 'JavaScript', skillLevel: 'Advanced', category: 'Front-end Development', description: 'Adding functionality to web pages', practicedToday: 'no'},
    {id: 2, name: 'HTML', skillLevel: 'Beginner', category: 'Front-end Development', description: 'Building the structure of web pages', practicedToday: 'yes'},
    {id: 3, name: 'CSS', skillLevel: 'Intermediate', category: 'Front-end Development', description: 'Styling web pages', practicedToday: 'yes'},
    {id: 4, name: 'Node.js', skillLevel: 'Beginner', category: 'Back-end Development', description: 'Open-source, cross-platform JavaScript runtime environment', practicedToday: 'yes'},
    {id: 5, name: 'Express', skillLevel: 'Advanced', category: 'Back-end Development', description: 'Web framework for Node.js', practicedToday: 'no'}
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
