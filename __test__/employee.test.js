const Employee = require('../lib/employee');

describe('Employee', () => {
    it('Test on creating new employee object', () => {
      const obj = new Employee('Billy Cheng', '1', 'chengpitchi@yahoo.com');

      expect(obj.name).toEqual('Billy Cheng');
      expect(obj.id).toEqual('1'); 
      expect(obj.email).toEqual('chengpitchi@yahoo.com')
    });

    it('Test on getName function', () => {
      const name = 'Kwen Ng';

      const result = new Employee(name, '1', 'kwen.ng@gmail.com').getName();

      expect(result).toEqual(name);
    });

    it('Test on getId function', () => {
        const id = '2'

        const result = new Employee('Tri Lee', id, 'tri.lee@gmai.com').getId();

        expect(result).toEqual(id);
    });


    it('Test on getEmail function', () => {
        const email = 'andy.lee@gmail.com'

        const result = new Employee('Andy Lee', '3', email).getEmail();

        expect(result).toEqual(email);
    });

    it('Test on getRole function', () => {
        const result = new Employee('Shirley Cheung', '4', 'shirley.cheung@gmail.com').getRole();

        expect(result).toEqual('Employee');
    });
})
