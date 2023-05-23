const skills = [
    {id: 111111, name: 'JavaScript', skillLevel: 'Advanced', category: 'Front-end Development', description: 'Adding functionality to web pages', practicedToday: false},
    {id: 111222, name: 'HTML', skillLevel: 'Beginner', category: 'Front-end Development', description: 'Building the structure of web pages', practicedToday: true},
    {id: 111333, name: 'CSS', skillLevel: 'Intermediate', category: 'Front-end Development', description: 'Styling web pages', practicedToday: true},
    {id: 111444, name: 'Node.js', skillLevel: 'Beginner', category: 'Back-end Development', description: 'Open-source, cross-platform JavaScript runtime environment', practicedToday: true},
    {id: 111555, name: 'Express', skillLevel: 'Advanced', category: 'Back-end Development', description: 'Web framework for Node.js', practicedToday: false}
];

module.exports = {
    getAll,
    getOne,
    create
};

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.practicedToday = false;
    skills.push(skill);
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function getAll() {
    return skills;
}
