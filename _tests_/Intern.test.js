const Intern = require('../lib/Intern');

const internInfo = {
    name: 'Ben',
    id: 1,
    email: 'address@gmail.com',
    school: 'UCLA',
    role: 'Intern'
};
const intern = new Intern(internInfo);

describe('Intern', () => {
    describe('Initialization', () => {
        it('should create an object with "name", "id", "email", and "school" property when called with "new" keyword.', () => {
            expect(intern).toEqual(internInfo);
        })
    })

    describe('getName', () => {
        it('should return a name when the "getName" function get called.', () => {
            expect(intern.getName()).toEqual('Ben'); 
        })
    })

    describe('getId', () => {
        it('should return an ID when the "getId" function get called.', () => {
            expect(intern.getId()).toEqual(1); 
        })
    })

    describe('getEmail', () => {
        it('should return an email address when the "getEmail" function get called.', () => {
            expect(intern.getEmail()).toEqual('address@gmail.com'); 
        })
    })

    describe('getRole', () => {
        it('should return "employee" when the "getRole" function get called.', () => {
            expect(intern.getRole()).toEqual('Intern'); 
        })
    })

    describe('getSchool', () => {
        it('should return a school name when the "getSchool" function get called.', () => {
            expect(intern.getSchool()).toEqual('UCLA'); 
        })
    })
})