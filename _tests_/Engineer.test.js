const Engineer = require('../lib/Engineer');

const engineerInfo = {
    name: 'Ben',
    id: 1,
    email: 'address@gmail.com',
    GitHub: 'diff30140556',
    role: 'Engineer'
};
const engineer = new Engineer(engineerInfo);

describe('Engineer', () => {
    describe('Initialization', () => {
        it('should create an object with "name", "id", "email", and "GitHub" property when called with "new" keyword.', () => {
            expect(engineer).toEqual(engineerInfo);
        })
    })

    describe('getName', () => {
        it('should return a name when the "getName" function get called.', () => {
            expect(engineer.getName()).toEqual('Ben'); 
        })
    })

    describe('getId', () => {
        it('should return an ID when the "getId" function get called.', () => {
            expect(engineer.getId()).toEqual(1); 
        })
    })

    describe('getEmail', () => {
        it('should return an email address when the "getEmail" function get called.', () => {
            expect(engineer.getEmail()).toEqual('address@gmail.com'); 
        })
    })

    describe('getRole', () => {
        it('should return "employee" when the "getRole" function get called.', () => {
            expect(engineer.getRole()).toEqual('Engineer'); 
        })
    })

    describe('getGitHub', () => {
        it('should return a GitHub account when the "getGitHub" function get called.', () => {
            expect(engineer.getGitHub()).toEqual('diff30140556'); 
        })
    })
})