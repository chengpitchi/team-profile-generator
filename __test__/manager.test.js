const Manager = require('../lib/manager');

describe('Manger', () => {
    it('Test on creating new manager object', () => {
      const obj = new Manager('Billy Cheng', '1', 'chengpitchi@yahoo.com', '39992525');

      expect(obj.name).toEqual('Billy Cheng');
      expect(obj.id).toEqual('1'); 
      expect(obj.email).toEqual('chengpitchi@yahoo.com'); 
      expect(obj.officeNumber).toEqual('39992525'); 
    });

    it('Test on getName function', () => {
      const name = 'Kwen Ng';

      const result = new Manager(name, '1', 'kwen.ng@gmail.com', '12345678').getName();

      expect(result).toEqual(name);
    });

    it('Test on getId function', () => {
        const id = '2'

        const result = new Manager('Tri Lee', id, 'tri.lee@gmai.com', '99999999').getId();

        expect(result).toEqual(id);
    });


    it('Test on getEmail function', () => {
        const email = 'andy.lee@gmail.com'

        const result = new Manager('Andy Lee', '3', email, '23242334').getEmail();

        expect(result).toEqual(email);
    });

    it('Test on getRole function', () => {
        const result = new Manager('Shirley Cheung', '4', 'shirley.cheung@gmail.com', '344321431').getRole();

        expect(result).toEqual('Manager');
    });
})
