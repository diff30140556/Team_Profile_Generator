const Employee = require('../lib/Employee');

const employeeInfo = {
    name: 'Ben',
    id: 1,
    email: 'address@gmail.com'
};
const employee = new Employee(employeeInfo);

describe('Employee', () => {
    describe('Initialization', () => {
        it('should create an object with "name", "id", and "email" property when called with "new" keyword.', () => {
            expect(employee).toEqual(employeeInfo);
        })
    })

    describe('getName', () => {
        it('should return a name when the "getName" function get called.', () => {
            expect(employee.getName()).toEqual('Ben'); 
        })
    })

    describe('getId', () => {
        it('should return an ID when the "getId" function get called.', () => {
            expect(employee.getId()).toEqual(1); 
        })
    })

    describe('getEmail', () => {
        it('should return an email address when the "getEmail" function get called.', () => {
            expect(employee.getEmail()).toEqual('address@gmail.com'); 
        })
    })

    describe('getRole', () => {
        it('should return"employee" when the "getRole" function get called.', () => {
            expect(employee.getRole()).toEqual('Employee'); 
        })
    })
})