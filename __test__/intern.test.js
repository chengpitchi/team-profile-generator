const Intern = require('../lib/intern');

describe('Intern', () => {
    it('Test on creating new intern object', () => {
      const obj = new Intern('Billy Cheng', '1', 'chengpitchi@yahoo.com', 'CUHK');

      expect(obj.name).toEqual('Billy Cheng');
      expect(obj.id).toEqual('1'); 
      expect(obj.email).toEqual('chengpitchi@yahoo.com'); 
      expect(obj.school).toEqual('CUHK'); 
    });

    it('Test on getName function', () => {
      const name = 'Kwen Ng';

      const result = new Intern(name, '1', 'kwen.ng@gmail.com', 'City U').getName();

      expect(result).toEqual(name);
    });

    it('Test on getId function', () => {
        const id = '2'

        const result = new Intern('Tri Lee', id, 'tri.lee@gmai.com', 'Melbourne U').getId();

        expect(result).toEqual(id);
    });


    it('Test on getEmail function', () => {
        const email = 'andy.lee@gmail.com'

        const result = new Intern('Andy Lee', '3', email, 'HKU').getEmail();

        expect(result).toEqual(email);
    });

    it('Test on getRole function', () => {
        const result = new Intern('Shirley Cheung', '4', 'shirley.cheung@gmail.com', 'Adelaide U').getRole();

        expect(result).toEqual('Intern');
    });


    it('Test on getSchool function', () => {
        const github = 'Havard'

        const result = new Intern('Shirley Cheung', '4', 'shirley.cheung@gmail.com', github).getSchool();

        expect(result).toEqual(github);
    });
})
