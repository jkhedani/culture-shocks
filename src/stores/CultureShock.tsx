/**
 * Sample MobX Class
 */
import { action, observable, decorate } from 'mobx';

class CultureShock_Store {

  /////////////// Observable ///////////////
  
  CultureShocks = [
    {
      "title": "Travelling to a new culture can",
      "desc": "mean seeing things on the menu that you never even knew you could eat. You don't have to scarf down every weird thing you but",
      "username": "Justin",
      "avatar_path": "",
      "time": "1 hour ago",
      "membership":"",
    },
    {
      "title": "Travelling to a new culture can",
      "desc": "mean seeing things on the menu that you never even knew you could eat. You don't have to scarf down every weird thing you but",
      "username": "Justin",
      "avatar_path": "",
    }
  ]


  ///////////////// Drivers /////////////////

  Create() {}
  Read() {}
  Update() {}
  
}

decorate(CultureShock_Store, {
  CultureShocks: observable,
  Create: action,
  Read: action,
  Update: action,
})

export default CultureShock_Store;
