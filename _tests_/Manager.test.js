const Manager = require('../lib/Manager');

const managerInfo = {
    name: 'Ben',
    id: 1,
    email: 'address@gmail.com',
    office: '1A',
    role: 'Manager'
};
const manager = new Manager(managerInfo);

describe('Manager', () => {
    describe('Initialization', () => {
        it('should create an object with "name", "id", "email", and "office" property when called with "new" keyword.', () => {
            expect(manager).toEqual(managerInfo);
        })
    })

    describe('getName', () => {
        it('should return a name when the "getName" function get called.', () => {
            expect(manager.getName()).toEqual('Ben'); 
        })
    })

    describe('getId', () => {
        it('should return an ID when the "getId" function get called.', () => {
            expect(manager.getId()).toEqual(1); 
        })
    })

    describe('getEmail', () => {
        it('should return an email address when the "getEmail" function get called.', () => {
            expect(manager.getEmail()).toEqual('address@gmail.com'); 
        })
    })

    describe('getRole', () => {
        it('should return "employee" when the "getRole" function get called.', () => {
            expect(manager.getRole()).toEqual('Manager'); 
        })
    })

    describe('getOffice', () => {
        it('should return an office number when the "getOffice" function get called.', () => {
            expect(manager.getOffice()).toEqual('1A'); 
        })
    })
})