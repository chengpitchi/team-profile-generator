const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    it('Test on creating new engineer object', () => {
      const obj = new Engineer('Billy Cheng', '1', 'chengpitchi@yahoo.com', 'chengpitchi');

      expect(obj.name).toEqual('Billy Cheng');
      expect(obj.id).toEqual('1'); 
      expect(obj.email).toEqual('chengpitchi@yahoo.com'); 
      expect(obj.github).toEqual('chengpitchi'); 
    });

    it('Test on getName function', () => {
      const name = 'Kwen Ng';

      const result = new Engineer(name, '1', 'kwen.ng@gmail.com', 'kwenng').getName();

      expect(result).toEqual(name);
    });

    it('Test on getId function', () => {
        const id = '2'

        const result = new Engineer('Tri Lee', id, 'tri.lee@gmai.com', 'trilee').getId();

        expect(result).toEqual(id);
    });


    it('Test on getEmail function', () => {
        const email = 'andy.lee@gmail.com'

        const result = new Engineer('Andy Lee', '3', email, 'andylee').getEmail();

        expect(result).toEqual(email);
    });

    it('Test on getRole function', () => {
        const result = new Engineer('Shirley Cheung', '4', 'shirley.cheung@gmail.com', 'shirleycheung').getRole();

        expect(result).toEqual('Engineer');
    });


    it('Test on getGithub function', () => {
        const github = 'shirleycheung'

        const result = new Engineer('Shirley Cheung', '4', 'shirley.cheung@gmail.com', github).getGithub();

        expect(result).toEqual(github);
    });
})
